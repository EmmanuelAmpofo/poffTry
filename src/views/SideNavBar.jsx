import * as React from "react";
import {useNavigate} from 'react-router-dom'
import "./sideNavBar.css";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Toolbar,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  drawer: {
    width: "100px",
  },
});


function PermanentDrawerLeft() {
  const navigate = useNavigate()
  const classes = useStyles();
  
  const pages = [
    {
      text: "Page 1",
      onClick: () => navigate('/page1')
    },
    {
      text: "Page 2",
      onClick: () => navigate('/page2')
    },
    {
      text: "Page 3",
      onClick: () => navigate('/page3')
    },
  ];
  return (
    <div className="main">
      <Drawer variant="permanent" anchor="left" className={classes.drawer}>
        <Toolbar />
        <Divider />
        <List>
          {pages.map((page, index) => {
            const { text, onClick } = page;
            return (
              <ListItem button key={text} onClick={onClick}>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}

export default PermanentDrawerLeft


