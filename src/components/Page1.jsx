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
    <div>dskgkfhdkjsh;jghufd</div>
  </div>;
}

export default Page1;
