import React from "react";
import SideBarNav from "./SideNavBar";
import TodoInput from '../components/page3/TodoInput'
import TodoItem from '../components/page3/TodoItem'
import TodoList from '../components/page3/TodoList'
import './page3.css'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

function Page3() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SideBarNav />
      <div className="todoinput">
        <TodoInput/>
        <TodoItem />
        <TodoList />

      </div>
    </div>
  );
}

export default Page3;
