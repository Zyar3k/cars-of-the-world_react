import { Route, Switch } from "react-router";

import "./App.css";

import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={CarList} exact />
        <Route path="/add" component={CarForm} />
      </Switch>
    </div>
  );
}

export default App;
