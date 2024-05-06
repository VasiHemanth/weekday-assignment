import React from "react";
import { useSelector } from "react-redux";
import {
  updateRoleFilter,
  updateExperienceFilter,
  updateMinBasePayFilter,
  updateWorkTypeFilter,
  updateSearchCompanyFilter,
} from "../reducers/filterReducer";
import {
  workType,
  experience,
  minBasePay,
  roles,
} from "../assets/dropdownOptions";

import Input from "./UI/Input";
import Dropdown from "./UI/Dropdown";

export default function Filters() {
  const {
    roleFilter,
    experienceFilter,
    workTypeFilter,
    minBasePayFilter,
    searchCompanyFilter,
  } = useSelector((state) => state.filters);

  return (
    <div className="filter-container">
      <Dropdown
        options={roles}
        label={"Role"}
        value={roleFilter}
        updateFilter={updateRoleFilter}
      />
      <Dropdown
        options={workType}
        label={"Location"}
        value={workTypeFilter}
        updateFilter={updateWorkTypeFilter}
      />
      <Dropdown
        options={experience}
        label={"Experience"}
        value={experienceFilter}
        updateFilter={updateExperienceFilter}
      />
      <Dropdown
        options={minBasePay}
        label={"Minumum Base Pay"}
        value={minBasePayFilter}
        updateFilter={updateMinBasePayFilter}
      />
      <Input
        label={"Search Company"}
        value={searchCompanyFilter}
        updateFilter={updateSearchCompanyFilter}
      />
    </div>
  );
}
