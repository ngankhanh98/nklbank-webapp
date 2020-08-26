import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  AddAlert,
  CallMade,
  CreditCard,
  PermContactCalendar,
} from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  accounts,
  beneficỉaies,
  debts,  
  transfer,
} from "../assets/language.json";

const useStyles = makeStyles((theme) => ({
  item: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
    "& > *": {
      color: "#eeeeee",
    },
  },
  active: {
    color: theme.palette.info.light,
  },
}));

const Sidebar = ({ drawer, drawerPaper }) => {
  const classes = useStyles();

  const categories = [
    { label: accounts.vi, icon: <CreditCard />, active: true },
    { label: transfer.vi, icon: <CallMade /> },
    { label: beneficỉaies.vi, icon: <PermContactCalendar /> },
    { label: debts.vi, icon: <AddAlert /> },
  ];
  return (
    <Drawer
      className={drawer}
      variant="permanent"
      classes={{
        paper: drawerPaper,
      }}
      anchor="left"
    >
      <Divider />
      <List>
        {categories.map((item) => (
          <ListItem button key={item.label} className={classes.item}>
            <ListItemIcon className={item.active ? classes.active : null}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              className={item.active ? classes.active : null}
              primary={item.label}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <CreditCard /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List> */}
    </Drawer>
  );
};

export default Sidebar;
