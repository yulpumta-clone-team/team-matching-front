import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api/test")
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);
  return <div className="App">"TEST"</div>;
}

export default App;
