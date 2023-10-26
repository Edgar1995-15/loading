import "./App.css";
// import Loading from "./Loading";
// import logo from "./assets/logo1.png";
import example from "./assets/11mp.mp4";

function App() {
  return (
    <>
      <div className="logo-container">
            <div>
              <video
                width="300"
                height="300"
                autoPlay
                muted
                playsInline
                loop
                controls={false}
                controlsList="nodownload"
              >
                <source src={example} type="video/mp4" />
              </video>
            </div>
            {/* <span className="chunks"></span>
          <span className="chunks2"></span>
          <span className="chunks3"></span>
          <span className="chunks4"></span>
          <span className="border-bold">
            <span className="logo-shadow"></span>
          </span> */}
          {/* <img src={logo} alt="Live Vegas" className="logo-live" /> */}
        {/* <Loading /> */}
      </div>
    </>
  );
}

export default App;
