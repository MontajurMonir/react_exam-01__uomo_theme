import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Error from "./Components/Pages/Error";
import About from "./Components/Pages/About";
import Shop from "./Components/Pages/Shop";
import RootLayout from "./Components/Layout/RootLayout";
import Collection from "./Components/Pages/Collection";
import Journal from "./Components/Pages/Journal";
import Lookbook from "./Components/Pages/Lookbook";
import Pages from "./Components/Pages/Pages";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="collection" element={<Collection />} />
          <Route path="journal" element={<Journal />} />
          <Route path="lookbook" element={<Lookbook />} />
          <Route path="pages" element={<Pages />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
