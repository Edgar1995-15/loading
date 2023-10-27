import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="logo-container">
        <span className="cut-wrapper">
          <div class="circle-container">
            <span className="chunks"></span>
            <span className="insideCutter"></span>
            <span className="border-bold"></span>
          </div>
          <img src={logo} alt="Live Vegas" className="logo-live" />
        </span>
      </div>
    </>
  );
}

export default App;
