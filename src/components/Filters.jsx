import React from "react";
import { useSelector } from "react-redux";
import {
  updateRoleFilter,
  updateExperienceFilter,
  updateMinBasePayFilter,
  updateWorkTypeFilter,
  updateSearchCompanyFilter,
  updateSearchByLocationFilter,
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
    searchByLocationFilter,
  } = useSelector((state) => state.filters);

  return (
    <div style={{ display: "flex" }}>
      <Dropdown
        options={roles}
        label={"Role"}
        value={roleFilter}
        updateFilter={updateRoleFilter}
      />
      <Dropdown
        options={workType}
        label={"Remote"}
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
      <Input
        label={"Search by location"}
        value={searchByLocationFilter}
        updateFilter={updateSearchByLocationFilter}
      />
    </div>
  );
}
