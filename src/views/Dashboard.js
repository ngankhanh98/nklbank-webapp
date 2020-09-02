import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AppBar } from "@material-ui/core";

import Sidebar from "../components/sidebar";
import Accounts from "./pages/Accounts";

import {
  accounts,
  debts,
  transfer,
  beneficiaries,
} from "../assets/language.json";
import Notification from "../components/notification";
import User from "../components/user";
import { useSelector } from "react-redux";
import Debts from "./pages/Debts";
import Transfer from "./pages/Transfer";
import Beneficiaries from "./pages/Beneficiaries";
import SnackNotification from "../components/snack_notification";

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
    marginTop: 70,
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: theme.palette.info.main,
      padding: theme.spacing(1.5),
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    "& > *": {
      display: "flex",
      flexDirection: "row",
      "& > *": { marginLeft: theme.spacing(2) },
      marginLeft: theme.spacing(2),
    },
  },
}));

const layouts = [
  {
    key: accounts.key,
    title: accounts.vi,
    component: <Accounts />,
  },
  {
    key: debts.key,
    title: debts.vi,
    component: <Debts />,
  },
  {
    key: transfer.key,
    title: transfer.vi,
    component: <Transfer />,
  },
  {
    key: beneficiaries.key,
    title: beneficiaries.vi,
    component: <Beneficiaries />,
  },
];

export default function Dashboard() {
  const classes = useStyles();

  const { selector } = useSelector((state) => state.appReducer);
  console.log("selector", selector);

  return (
    <>
      <SnackNotification />
      <div className={classes.root}>
        <CssBaseline />
        <Sidebar drawer={classes.drawer} drawerPaper={classes.drawerPaper} />
        <AppBar position="fixed" className={classes.appBar}>
          <Typography variant="h5" noWrap>
            {layouts.find((layout) => layout.key === selector).title}
          </Typography>
          <div>
            <Notification />
            <User />
          </div>
        </AppBar>
        <main className={classes.content}>
          {layouts.find((layout) => layout.key === selector).component}
        </main>
      </div>
    </>
  );
}
