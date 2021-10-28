import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Navbar from "./components/Navbar";

let imgSrc =
  "https://images.unsplash.com/photo-1510893128885-390fef95867d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80";

function App() {
  const paragraph = "This is a paragraph";
  return (
    <div className="App">
      <img src={imgSrc} />
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
