import {
  Card,
  CardContent,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import "moment/locale/vi";
import React from "react";


const useStyles = makeStyles((theme) => ({
  type: {
    fontSize: 14,
  },
  balance: {
    width: "fit-content",
    color: "#1fab89",
    borderRadius: "5px",
    // border: "1px solid ",
    padding: theme.spacing(0.5),
    background: "#e0ffcd",
    marginBottom: 12,
  },
}));

export default function OutlinedCard({ account }) {
  const classes = useStyles();

  return (
   
      <Card >
        <CardContent>
          <Typography
            className={classes.type}
            color="textSecondary"
            gutterBottom
          >
            {account.type === 0
              ? "Tài khoản thanh toán"
              : "Tài khoản tiết kiệm"}
          </Typography>
          <Typography variant="h4" component="h2">
            {account.account_number}
          </Typography>
          <Typography className={classes.balance}>
            {new Intl.NumberFormat("vi-VI", {
              style: "currency",
              currency: "VND",
            }).format(account.account_balance)}
          </Typography>
          <Typography className={classes.type} color="textSecondary">
            Ngày mở: {moment(account.open_date).format("L")}
          </Typography>
        </CardContent>
      </Card>
  );
}
