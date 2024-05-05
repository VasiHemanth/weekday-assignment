import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import JobListShrimmer from "./JobListShrimmer";

export default function JobList() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchJobsData = async () => {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ limit: 35, offset: 0 }),
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
    <div>
      JobList
      <div className="jobs-container">
        {jobData.map((job, index) => {
          return <JobCard key={index} job={job} />;
        })}
      </div>
    </div>
  );
}
