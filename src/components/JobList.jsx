import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import JobCard from "./JobCard";
import JobListShrimmer from "./JobListShrimmer";
import { filterArray } from "../assets/FilteredData";

// Job List
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

  // Function to fetch Jobs Data
  const fetchJobsData = async () => {
    try {
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
      setJobData(
        option.fetchDataOnScrollFlag
          ? (prevJobData) => [...prevJobData, ...jdlist]
          : // (prevJobData) => [...prevJobData, ...jdlist]
            jdlist
      );
      setOption({ ...option, loading: false, fetchDataOnScrollFlag: false });
    } catch (error) {
      console.error("Error fetching job listings:", error);
    }
  };

  useEffect(() => {
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

  // Function updates offset triggers use effect and call API for more data
  const fetchDataOnScroll = () => {
    setOffset((prevOffset) => prevOffset + limit);
    setOption({ ...option, fetchDataOnScrollFlag: true });
  };

  // Function to Infinite Scroll limit
  const checkHasMore = () => {
    if (offset <= 947) {
      return true;
    } else {
      return false;
    }
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
        key={filteredData.length}
        dataLength={filteredData.length}
        next={fetchDataOnScroll}
        hasMore={checkHasMore}
        scrollableTarget={
          scrollContainerRef.current ? scrollContainerRef.current : undefined
        }
      >
        <div className="jobs-container" ref={scrollContainerRef}>
          {filteredData.map((job, index) => {
            return <JobCard key={index} job={job} />;
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}
