import { useState } from "react";
import "./App.css";

function App() {
  const [text,setText]= useState("");
  const [results, setResults] = useState([]);
  console.log(results)
  return <>
  <h1>HEY...... </h1>
  <input type="text" placeholder="list for search" onChange={(e) => setText(e,EventTarget.value)} />
  <div><button>SNAP HERE</button></div>
  <button
    onClick={() => {
      fetch("/api/search?text=" + text)
      .then((response) => {
        response
        .json()
        .then((results) => setResults(results))
        .catch((error) => console.error("Failed to search...", error));
      })
      .catch((error) => console.error("Failed to search...", error));
    }}
    >
      Search
    </button>
    <ul type="square">
        {
          results.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            </li>
          ))
          
        }
      </ul>
      


    
  </>
};

export default App;