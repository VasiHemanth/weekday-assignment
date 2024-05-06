import React from "react";

// Job Card
export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="card-header-container">
        <img src={job.logoUrl} alt={job.companyName} />
        <div className="card-header-content">
          <h3>{job.companyName}</h3>
          <h2>{job.jobRole.charAt(0).toUpperCase() + job.jobRole.slice(1)}</h2>
          <p>
            {job.location}{" "}
            {job.minExp === null || job.maxExp === null ? (
              ""
            ) : (
              <>
                | Exp: {job.minExp} - {job.maxExp} years
              </>
            )}
          </p>
        </div>
      </div>
      <p className="card-salary">
        Estimated Salary:
        {job.minJdSalary != null && job.minJdSalary != null
          ? `$${job.minJdSalary} - ${job.maxJdSalary} `
          : `$${10 - 35}`}
        {job.salaryCurrencyCode} ✅
      </p>
      <div className="card-content">
        <p className="card-content-company">About Company:</p>
        <p className="card-content-about">About us:</p>
        <p className="card-content-detials">{job.jobDetailsFromCompany}</p>
        <p className="card-content-overlay">
          <p></p>
        </p>
        <p className="card-content-link">View Jobs</p>
      </div>

      <div className="card-footer">
        <h3>Minimum Experience</h3>
        <h2>{job.minExp} years</h2>
        <button className="card-button">⚡ Easy Apply</button>
      </div>
    </div>
  );
}
