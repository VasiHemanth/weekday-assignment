export const filterArray = (jobData, variables) => {
    const { role, experience, workType, minBasePay, company} = variables;
  
    // Check if any of the variables have values
    const anyVariableSet = Object.values(variables).some(value => value !== '');
    const filteredData = jobData.filter(job => {
      if (anyVariableSet) {
        // Filter with variables that have values
        return (
          (!role || job.jobRole === role) &&
          (!experience || (experience <= job.maxExp && experience >=job.minExp)) &&
          (!workType || job.location === workType.toLowerCase()) &&
          (!minBasePay || minBasePay >= job.minJdSalary) &&
          (!company || job.companyName.toLowerCase().includes(company.toLowerCase())) 
        );
      } else {
        // No filtering if all variables are empty
        return job;
      }
    });
    if(minBasePay) {
      return filteredData.sort((a, b) =>  b.minJdSalary- a.minJdSalary)
    } 
    return filteredData
  };