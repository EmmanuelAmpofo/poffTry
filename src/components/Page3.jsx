import React from 'react';
import SideBarNav from '../views/SideNavBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex'
  }
})

function Page3() {
  const classes = useStyles()
  return <div className={classes.container}>
    <SideBarNav />
    ,slghjfghouhxlu
  </div>;
}

export default Page3;
