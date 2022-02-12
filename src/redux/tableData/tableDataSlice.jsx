import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {selectTableFilter} from "../tableFilter/tableFilterSlice";

export const loadTableData = createAsyncThunk(
    "tableData/getTableData",
    async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await data.json();
      return json;
    }
  );


  const sliceOptions = {
    name: "tableData",
    initialState: {
      tableInfo: [],
      isLoading: false,
      hasError: false
    },
    reducers: {
        editTableData: (state, action) => {
          state.tableInfo.map((x) => {
            if(x.id === action.payload.id){
              x.title = action.payload.title;
              x.userId = action.payload.userId;
              x.body = action.payload.body;
              return x;
            }
            return x;
          })
        },
        deleteTableData: (state, action) => {
          const index = state.tableInfo.findIndex(x => x.id === action.payload.id)
          state.tableInfo.splice(index, 1);
        },
        addToTableData: (state, action) => {
            state.tableInfo.map((x) => {
                x.action = "actions";
                return x;
            })
        },
    },
    extraReducers: {
      [loadTableData.pending]: (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      },
      [loadTableData.fulfilled]: (state, action) => {
        state.tableInfo = action.payload;
        state.isLoading = false;
        state.hasError = false;
      },
      [loadTableData.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      }
    }
  }

  
  export const tableDataSlice = createSlice(sliceOptions);
  
export const{editTableData,deleteTableData, addToTableData }  = tableDataSlice.actions;
export const selectTableData = (state) => state.tableData.tableInfo;


export const selectFilteredTableData = (state) => {
    const allTableData = selectTableData(state);
    const filterTerm = selectTableFilter(state);
    // console.log(allTableData)
    // console.log(filterTerm)
  
    return allTableData.filter((tableData) =>{
        if(filterTerm === 0){
            return true;
        }
        return (tableData.userId === filterTerm);
    }
    );
  };

export default tableDataSlice.reducer;