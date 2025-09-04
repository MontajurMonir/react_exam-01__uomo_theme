import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiCaretUpDownLight } from "react-icons/pi";

const SignUp = () => {
  const [apiData, setApiData] = useState([]);
  const [districtsData, setDistrictsData] = useState([]);
  useEffect(() => {
    async function allData() {
      const allApiData = await axios.get(
        "https://thealamindev.github.io/bdlocalarea/index.json"
      );
      setApiData(allApiData.data);
      //   console.log(allApiData.data[districts]);
    }
    allData();
  });
  return (
    <>
      <div className="flex items-center justify-center  p-4">
        <div className="w-full max-w-4xl p-6 bg-white rounded-xl shadow-lg border border-neutral-200">
          <h1 className="text-3xl font-semibold mb-8 text-neutral-800">
            New Customer
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Division */}
            <div className="relative flex flex-col">
              <label className="text-menuColor-500 text-sm font-medium mb-1">
                Division
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2  text-neutral-500 rounded-lg border border-neutral-300 bg-white">
                  <option value="" disabled selected>
                    Please select
                  </option>
                  {apiData.map((item) => (
                    <option value="" >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* District */}
            <div className="relative flex flex-col">
              <label className="text-menuColor text-sm font-medium mb-1">
                District
              </label>
              <div className="relative">
                <select
                  id="district"
                  className="w-full  px-3 py-2  text-neutral-500 rounded-lg border border-neutral-300 bg-white "
                >
                  {apiData.map((item) => (
                    <option value="" selected>
                      {}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
