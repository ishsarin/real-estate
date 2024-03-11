import "./App.css";
import NavScrollExample from "./components/Navbar";
import { Properties } from "./components/Properties";
import Properties_API from "./components/Properties_API";
function App() {
  return (
    <div className="App">
      <NavScrollExample />
      {/* <Properties/> */}
      <Properties_API />
    </div>
  );
}

export default App;
