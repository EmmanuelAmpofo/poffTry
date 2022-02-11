import React from 'react';
import SideNavBar from '../views/SideNavBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex'
  }
})

function Page1() {
  const classes = useStyles()
  return <div className={classes.container}>
    <SideNavBar />
    <div><h1>Page1</h1></div>
  </div>;
}

export default Page1;
