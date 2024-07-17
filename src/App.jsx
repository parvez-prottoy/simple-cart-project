import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      {/* Navbar section start */}
      <Navbar />
      {/* Navbar section ends */}
      <main className="py-16">
        <Outlet />
      </main>
    </>
  );
};

export default App;
