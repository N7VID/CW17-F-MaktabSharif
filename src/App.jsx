import { ToastContainer } from "react-toastify";
import Bmi from "./components/Bmi";
import Card from "./components/Card";
import Clock from "./components/Clock";
import "./index.css";

function App() {
  return (
    <div className="flex justify-center items-center gap-20 h-screen ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div>
        <Clock />
        <Bmi />
      </div>
      <Card />
    </div>
  );
}

export default App;
