import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roleFilter: '',
  experienceFilter: '',
  workTypeFilter: '',
  minBasePayFilter: '',
  searchCompanyFilter: '',
  searchByLocationFilter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateRoleFilter: (state, action) => {
      state.roleFilter = action.payload;
    },
    updateWorkTypeFilter: (state, action) => {
      state.workTypeFilter = action.payload;
    },
    updateExperienceFilter: (state, action) => {
      state.experienceFilter = action.payload;
    },
    updateMinBasePayFilter: (state, action) => {
      state.minBasePayFilter = action.payload;
    },
    updateSearchCompanyFilter: (state, action) => {
      state.searchCompanyFilter = action.payload;
    },
    updateSearchByLocationFilter: (state, action) => {
      state.searchByLocationFilter = action.payload;
    },
  }
});

export const { 
  updateRoleFilter, 
  updateExperienceFilter, 
  updateWorkTypeFilter, 
  updateMinBasePayFilter, 
  updateSearchCompanyFilter, 
  updateSearchByLocationFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;