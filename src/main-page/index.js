import { useEffect, useMemo, useState } from "react";
import './main-page.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import FeaturedHouse from "./feature-house";
import SearchResults from "../search-results";
import HouseFromQuery from "../house/HouseFromQuery";
import HouseFilter from "./house-filter";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    }
    fetchHouses()
  }, []);


  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header />
        <HouseFilter allHouses={allHouses}></HouseFilter>
        <Switch>
        <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses}></SearchResults>
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses}></HouseFromQuery>
          </Route>
          <Route path="/">
            <FeaturedHouse house={featuredHouse}></FeaturedHouse>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
