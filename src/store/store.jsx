import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from "../redux/tableData/tableDataSlice"
import tableFilterReducer from "../redux/tableFilter/tableFilterSlice"
import todoReducer from "../redux/toDo/toDoSlice"


export default configureStore({
    reducer: {
        tableData: tableDataReducer,
        tableFilter: tableFilterReducer,
        todo: todoReducer
    }
});