import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import TodoIndex from "./editForm/TodoIndex"
import Title from "./components/Title";
import List from "./components/List";
// import { titleReducer } from "./reducers/titleReducer";
// import { recipesReducer } from "./reducers/recipesReducer";
import rootReducer from "./reducers";
import Nav from "./components/navbar/Nav"
import CardAdd from "./components/CardAdd";
import "./styles.css";
import TodoIndex from "./editForm/TodoIndex";
 import Heading from "./Heading"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login.js';
import PrivateRoute from './components/PrivateRoute';



function AppComp() {
  return (
    <div key="2"  className="App">
      <Nav key="3" />
      <Title key="4" />
      <List key="5" />
      <CardAdd key="6" />
    </div>
  );
}


function App() {
  const logout = () => {
    localStorage.removeItem('token')
  };


  return (
    <Router>
      <div className="App">
        <Heading />
        <Switch>
          <PrivateRoute exact path="/protected" component={AppComp} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log(`preve state: `, store.getState());
  console.log(`action: `, action);
  next(action);
  console.log("new state: ", store.getState());
  console.groupEnd();
};

const store = createStore(rootReducer, applyMiddleware(logger));



const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider key="0" store={store}>
    <App key="1" />
  </Provider>,
  rootElement
);
