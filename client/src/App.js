import { Route } from "react-router-dom";
import About from "./views/About/About";
import Home from "./views/Home/Home";
import Form from "./views/Form/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/form" component={Form} />
    </div>
  );
}

export default App;
