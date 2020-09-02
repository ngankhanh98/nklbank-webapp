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
  beneficiaries,
  debts,
  transfer,
} from "../assets/language.json";
import { useDispatch, useSelector } from "react-redux";
import { onSwitchSidebarOps } from "../actions/appAction";

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

const categories = [
  {
    key: accounts.key,
    label: accounts.vi,
    icon: <CreditCard />,
    active: true,
  },
  { key: transfer.key, label: transfer.vi, icon: <CallMade /> },
  {
    key: beneficiaries.key,
    label: beneficiaries.vi,
    icon: <PermContactCalendar />,
  },
  { key: debts.key, label: debts.vi, icon: <AddAlert /> },
];

const Sidebar = ({ drawer, drawerPaper }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { selector } = useSelector((state) => state.appReducer);

  const handleClick = (item) => {
    dispatch(onSwitchSidebarOps(item.key));
  };

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
          <ListItem
            button
            key={item.key}
            className={classes.item}
            onClick={() => handleClick(item)}
          >
            <ListItemIcon
              className={item.key === selector ? classes.active : null}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              className={item.key === selector ? classes.active : null}
              primary={item.label}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
