import * as React from 'react';
import {Drawer,List,ListItem,ListItemText, Divider, Toolbar} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  drawer: {
    width: '200px'
  }
})




export default function PermanentDrawerLeft() {
  const classes = useStyles()
  const pages = ['Page 1', 'Page 2', 'Page 3']
  return (
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
      >
        <Toolbar />
        <Divider />
        <List>
          {pages.map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}