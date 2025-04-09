import react from "react";
import viteLogo from './assets/react.svg';
const Profilecard=({Profile})=>{
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <div 
        style={{
          justifyContent: "center",
          textAlign: "center",
          padding: "30px",
          border: "2px solid blue",
          borderRadius: "10px",
          width: "250px",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <img
          style={{
            backgroundColor: "black",
            border: "2px solid blue",
            borderRadius: "50%",
            margin: "10px",
            padding: "5px",
            width: "100px",
            height: "100px",
          }} src={viteLogo}
      />
        <div>
        <div>
          <span>NAME : </span>
          <span>{Profile.name}</span></div>
          <div><span>DEPARTMENT : </span>
          <span>{Profile.Department}</span></div>
         <div> <span>YEAR : </span>
          <span>{Profile.year}</span></div>
          <div><span>MOBILE : </span>
          <span>{Profile.mobile}</span></div>
          <div><span>ADDRESS : </span>
          <span>{Profile.address}</span></div>
          <a href="https://www.linkedin.com/in/parvathi-devi-g-7bbaa62a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin profile</a>
          </div>
          </div>
          
          </div>
          )};

export default Profilecard;