import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "routes/routes";
import "./assets/scss/index.scss";
function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
