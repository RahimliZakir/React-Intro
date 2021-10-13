import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {
  const paragraph = "This is a paragraph";
  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input type="text" />
          <p style={{ color: "crimson" }}>{paragraph}</p>
          <User />
          <Navbar />
        </div>
      </form>
    </div>
  );
}

export default App;
