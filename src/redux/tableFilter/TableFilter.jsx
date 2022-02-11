import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import {
  clearTableFilter,
  selectTableFilter,
  setTableFilter,
} from "./tableFilterSlice";


export const TableFilter = () => {
    const dispatch = useDispatch();
    const filterTerm = useSelector(selectTableFilter);
  return (
    <div>
        <FormControl
          sx={{ width: "250px", marginLeft: "20px", marginTop: "20px" }}
        >
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={id}
            label="Filter"
            // onChange={handleChange}
          >
            {/* {selValue.map((userid, x) => {
              return (
                <MenuItem value={userid} key={x}>
                  {userid}{" "}
                </MenuItem>
              );
            })} */}
          </Select>
        </FormControl>
    </div>
  )
}
