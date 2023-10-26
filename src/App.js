import "./App.css";
// import Loading from "./Loading";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
    
    <div className="logo-container">
      <span className="cut-wrapper">
        <div class="circle-container">
          <span className="chunks"></span>
          <span className="chunks2"></span>
          <span className="chunks3"></span>
          <span className="chunks4"></span>
          <span className="border-bold">
            <span className="logo-shadow"></span>
          </span>
        </div>
        <img src={logo} alt="Live Vegas" className="logo-live" />
      </span>
      {/* <Loading /> */}
    </div>
    </>
  );
}

export default App;
