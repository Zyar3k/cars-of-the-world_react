import { Route, Switch } from "react-router";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import Header from "./components/Header";

import { ContextProvider } from "./context/GlobalContext";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={CarList} exact />
          <Route path="/add" component={CarForm} />
        </Switch>
      </div>
    </ContextProvider>
  );
}

export default App;
