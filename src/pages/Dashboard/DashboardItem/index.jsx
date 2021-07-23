import React from "react";
import { Typography, Box , Paper} from "@material-ui/core";
import convertToMoneyFormat from "../../../util/ConvertToMoneyFormat"

export default function DashboardItem({ brandDetails }) {

  const { brand, totalVehicle, totalPrice } = brandDetails;

  return (
    <Paper elevation={3} style={{ padding: "16px" }}> 
      <Typography variant="h5">{brand}</Typography>
      <Typography variant="body1">{totalVehicle} {totalVehicle > 1 ? "veículos" : "veículo" } </Typography>
      <Typography variant="body1">{convertToMoneyFormat(totalPrice)}</Typography>
    </Paper>
  );
}
