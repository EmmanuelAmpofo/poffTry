import React from "react";
import SideNavBar from "./SideNavBar";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex'
  }
})

function Page2() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <SideNavBar />
      <div><h1>Page2</h1></div>
    </div>
  );
}

export default Page2;
