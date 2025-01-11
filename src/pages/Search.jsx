import React from "react";
import Hero from "../components/Hero";
import SearchCard from "../components/SearchCard";

import GradientAreaChart from "../components/GradientGraph";
function Search() {
  return (
    <div>
      <Hero />
      <SearchCard />

      {/* <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <GradientAreaChart />
      </div> */}
    </div>
  );
}

export default Search;
