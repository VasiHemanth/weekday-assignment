import React, { useEffect, useRef, useState } from "react";

import JobCard from "./JobCard";
import JobListShrimmer from "./JobListShrimmer";
import { useSelector } from "react-redux";
import { filterArray } from "../assets/FilteredData";
import InfiniteScroll from "react-infinite-scroll-component";

export default function JobList() {
  const [jobData, setJobData] = useState([]);
  const [option, setOption] = useState({
    loading: false,
    fetchDataOnScrollFlag: false,
  });
  const [offset, setOffset] = useState(0);
  const scrollContainerRef = useRef(null);
  const limit = 10;
  const {
    roleFilter,
    experienceFilter,
    workTypeFilter,
    minBasePayFilter,
    searchCompanyFilter,
  } = useSelector((state) => state.filters);

  useEffect(() => {
    // Function to fetch Jobs Data
    const fetchJobsData = async () => {
      try {
        console.log("fetching data");
        setOption({ ...option, loading: true });
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ limit: limit, offset: offset }),
          }
        );
        const responseData = await response.json();
        const jdlist = responseData["jdList"];
        console.log("Data", responseData["jdList"], option, offset);
        setJobData(
          option.fetchDataOnScrollFlag
            ? jobData.concat(jdlist)
            : // (prevJobData) => [...prevJobData, ...jdlist]
              jdlist
        );
        setOption({ ...option, loading: false, fetchDataOnScrollFlag: false });
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };
    fetchJobsData();
  }, [offset]);

  // Funtion that returns Jobs Data based on filters selected
  const filteredData = filterArray(jobData, {
    role: roleFilter,
    experience: experienceFilter,
    workType: workTypeFilter,
    minBasePay: minBasePayFilter,
    company: searchCompanyFilter,
  });

  console.log("filteredData", filteredData);

  const fetchDataOnScroll = () => {
    console.log("fetching data on scroll");
    setOffset((prevOffset) => prevOffset + limit);
    setOption({ ...option, fetchDataOnScrollFlag: true });
  };

  if (option.loading) {
    return <JobListShrimmer />;
  }

  if (!filteredData.length) {
    return <p>No Jobs found</p>;
  }

  return (
    <>
      <InfiniteScroll
        dataLength={filteredData.length}
        next={fetchDataOnScroll}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget={scrollContainerRef.current} // Pass the ref to the scrollableTarget prop
      >
        <div className="jobs-container" ref={scrollContainerRef}>
          {" "}
          {filteredData.map((job, index) => {
            return <JobCard key={index} job={job} />;
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}
