import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Sidebar from "../components/sidebar";
import Accounts from "./pages/Accounts";

import { accounts } from "../assets/language.json";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#1b262c",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const layouts = [
  {
    title: accounts.vi,
    component: <Accounts />,
    active: true,
  },
];

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar drawer={classes.drawer} drawerPaper={classes.drawerPaper} />
      <main className={classes.content}>
        {layouts.map((layout) => {
          if (layout.active)
            return (
              <>
                <Typography variant="h3">{layout.title}</Typography>
                {layout.component}
              </>
            );
        })}
      </main>
    </div>
  );
}
