import React from 'react';
import SideNavBar from './SideNavBar'
import {TableData} from '../redux/tableData/TableData'
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTableData, addToTableData } from "../redux/tableData/tableDataSlice"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex'
  }
})

function Page1() {
  const dispatch = useDispatch();

  dispatch(loadTableData());
  useEffect(() => {
  }, [dispatch]);

  const classes = useStyles()
  return <div className={classes.container}>
    <SideNavBar />
    <div><h1>Page1</h1>
    <TableData />
    </div>
  </div>;
}

export default Page1;
