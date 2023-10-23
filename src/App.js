import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="logo-container">
      <span className="cut-wrapper">
        <div class="circle-container">
          <span className="chunks"></span>
          <span className="border-bold">
            <span className="logo-shadow"></span>
          </span>
        </div>
        <span className="small-items"></span>

        <img src={logo} alt="Live Vegas" className="logo-live" />
      </span>
    </div>
  );
}

export default App;
