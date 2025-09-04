import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiCaretUpDownLight } from "react-icons/pi";

const SignUp = () => {
  const [apiData, setApiData] = useState([]);
  const [districtsData, setDistrictsData] = useState([])
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
            {/* Address 1 */}
            <div className="flex flex-col">
              <label
                htmlFor="address1"
                className="text-neutral-500 text-sm font-medium mb-1"
              >
                Address 1
              </label>
              <input
                type="text"
                id="address1"
                className="px-3 py-2 text-base text-neutral-800 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="4279 Zboncak Port Suite 6212"
              />
            </div>

            {/* Address 2 */}
            <div className="flex flex-col">
              <label
                htmlFor="address2"
                className="text-neutral-500 text-sm font-medium mb-1"
              >
                Address 2
              </label>
              <input
                type="text"
                id="address2"
                className="px-3 py-2 text-base text-neutral-800 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="—"
              />
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label
                htmlFor="city"
                className="text-neutral-500 text-sm font-medium mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="px-3 py-2 text-base text-neutral-800 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your city"
              />
            </div>

            {/* Post Code */}
            <div className="flex flex-col">
              <label
                htmlFor="postCode"
                className="text-neutral-500 text-sm font-medium mb-1"
              >
                Post Code
              </label>
              <input
                type="text"
                id="postCode"
                className="px-3 py-2 text-base text-neutral-800 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="05228"
              />
            </div>

            {/* Division */}
            <div className="relative flex flex-col">
              <label
                htmlFor="division"
                className="text-neutral-500 text-sm font-medium mb-1"
              >
                Division
              </label>
              <div className="relative">
                <select
                  id="division"
                  className="w-full appearance-none px-3 py-2 text-base text-neutral-500 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                     <option value="" disabled>Please select</option>
                  {apiData.map((item) => (
                    <option value=""  selected>{item.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <PiCaretUpDownLight className="h-4 w-4 text-neutral-500" />
                </div>
              </div>
            </div>

            {/* District */}
            <div className="relative flex flex-col">
              <label
                htmlFor="district"
                className="text-neutral-500 text-sm font-medium mb-1"
              >
                District
              </label>
              <div className="relative">
                <select
                  id="district"
                  className="w-full appearance-none px-3 py-2 text-base text-neutral-500 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {apiData.map((item) => (
                    <option value="" selected>
                      {}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <PiCaretUpDownLight className="h-4 w-4 text-neutral-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
