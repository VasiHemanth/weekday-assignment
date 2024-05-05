import React from "react";
import Filters from "./Filters";
import JobList from "./JobList";

export default function Home() {
  return (
    <main>
      <div className="home-header-container">
        <span className="home-header">Search jobs</span>
      </div>
      <div className="filter-container ">
        <Filters />
      </div>
      <JobList />
    </main>
  );
}
