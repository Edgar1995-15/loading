// import { useEffect, useMemo } from "react";
// import logo from "../assets/logo1.png";
// import "./index.css";

// const Loading = () => {
//   const time = 3;
//   const dotesCount = 600;

//   const dotes = useMemo(() => {
//     const generatedDotes = [];
//     for (let i = 0; i < dotesCount; i++) {
//       generatedDotes.push({
//         distance: Math.floor(Math.random() * 250 + 1),
//         angle: Math.floor(Math.random() * 360 + 1),
//       });
//     }
//     return generatedDotes;
//   }, [dotesCount]);

//   useEffect(() => {
//     const radar = () => {
//       const radius = 150;
//       const dotWrapper = document.getElementById("dot-wrapper");
  
//       for (let i = 0; i < dotes.length; i++) {
//         const disX =
//           90 < dotes[i].angle + 90 < 270 ? radius - dotes[i].distance : radius;
//         const disY =
//           180 < dotes[i].angle + 90 < 360 ? radius - dotes[i].distance : radius;
//         const angleNew = (dotes[i].angle + 90) * (Math.PI / 180);
//         const getDegX =
//           disX +
//           dotes[i].distance -
//           Math.round(dotes[i].distance * Math.cos(angleNew));
//         const getDegY =
//           disY +
//           dotes[i].distance -
//           Math.round(dotes[i].distance * Math.sin(angleNew));
//         const delay = (time / 360) * dotes[i].angle;
  
//         const dotElement = document.createElement("span");
//         dotElement.classList.add("dot");
//         dotElement.style.left = `${getDegX}px`;
//         dotElement.style.top = `${getDegY}px`;
//         dotElement.style.animationDelay = `${delay}s`;
//         dotElement.dataset.atDeg = dotes[i].angle;
        
//         dotWrapper.appendChild(dotElement);
//       }
  
//       document.getElementById("radar").classList.add("animated");
//     };
  
//     radar();
//   }, [dotes]);

//   return (
//     <>
//       <div id="radar">
//         <span className="border-circle"></span>
//         <span className="cut-overflow">
//           <div id="guides">
//             <img src={logo} alt="Live Vegas" className="logo-live" />
//             <div className="line"></div>
//             <div id="dot-wrapper"></div>
//           </div>
//         </span>
//       </div>
//     </>
//   );
// };

// export default Loading;
