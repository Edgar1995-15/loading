import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="logo-container">
        <span className="cut-wrapper">
          <div class="circle-container">
            <span className="chunks"></span>
            <span className="chunks2"></span>
            <span className="insideCutter"></span>
            <span className="border-bold"></span>
            <span className="shadow-example"></span>
            {/* <span className="border-shadow"></span> */}
            {/* <span className="border-shadow2"></span> */}
          </div>
          <img src={logo} alt="Live Vegas" className="logo-live" />
        </span>
      </div>
    </>
  );
}

export default App;