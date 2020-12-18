import { Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Protected exact path="/" component={Home} />
    </div>
  );
}

export default App;
