import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    docs: [
          {
            id: "1",
            doc_name: "Doc 1",
          },
          {
            id: "2",
            doc_name: "Doc 2",
          },
          {
            id: "3",
            doc_name: "Doc 3",
          },
    ],
    projects: [
            {
            id: "1",
            project_name: "Project 1",
            },
            {
              id: "2",
              project_name: "Project 2",
            },
            {
              id: "3",
              project_name: "Project 3",
            },
            {
              id: "4",
              project_name: "Project 4",
            },
            {
              id: "5",
              project_name: "Project 5",
            },
    ]
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    appData: (state, action) => {
        state.docs = action.payload;
      },
  },
});

export const {
  appData
} = dataSlice.actions;
export default dataSlice.reducer;
