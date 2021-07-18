import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { selectedData, fetchContent } from './features/contentSlice'
import NavbarDown from './components/NavbarDown';
import Item from './components/Item';
import Card from './components/Card';
import Items from './components/Items';
import ItemDescription from './components/ItemDescription';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContent())
  }, [])
  const data = useSelector(selectedData)
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
