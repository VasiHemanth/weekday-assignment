import React, { useEffect, useState } from "react";

import JobCard from "./JobCard";
import JobListShrimmer from "./JobListShrimmer";
import { useSelector } from "react-redux";

export default function JobList() {
  const [jobData, setJobData] = useState([]);
  const {
    roleFilter,
    experienceFilter,
    workTypeFilter,
    minBasePayFilter,
    searchCompanyFilter,
    searchByLocationFilter,
  } = useSelector((state) => state.filters);

  useEffect(() => {
    const fetchJobsData = async () => {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ limit: 900, offset: 0 }),
        }
      );
      const responseData = await response.json();
      setJobData(responseData["jdList"]);
    };
    fetchJobsData();
  }, []);

  if (!jobData.length) {
    return <JobListShrimmer />;
  }

  return (
    <>
      <div className="jobs-container">
        {jobData
          .filter((job) => {
            if (roleFilter) return job.jobRole.includes(roleFilter);
          })
          .map((job, index) => {
            return <JobCard key={index} job={job} />;
          })}
      </div>
    </>
  );
}
