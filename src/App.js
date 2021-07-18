import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux'
import { fetchContent } from './features/contentSlice'
import NavbarDown from './components/NavbarDown';
import Card from './components/Card';
import Items from './components/Items';
import ItemDescription from './components/ItemDescription';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContent())
  })
  return (
    <Router>
      <div className="">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <NavbarDown />
            <Items />
          </Route>
          <Route exact path="/user/card">
            <Card />
          </Route>
          <Route exact path="/items">
            <ItemDescription />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
