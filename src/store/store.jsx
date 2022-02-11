import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from "../redux/tableData/tableDataSlice"
import tableFilterReducer from "../redux/tableFilter/tableFilterSlice"


export default configureStore({
    reducer: {
        tableData: tableDataReducer,
        tableFilter: tableFilterReducer,
    }
});