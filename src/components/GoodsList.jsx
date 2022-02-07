import React from "react";
import { Grid } from "@mui/material";
import { GoodsItem } from "./GoodsItem";

const GoodsList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h1>Нет данных</h1>;
  }

  return (
    <Grid container spacing={3}>
      {goods.map((good) => (
        <Grid item key={good.offerId} xl={2} lg={2} md={4} sm={6} xs={12}>
          <GoodsItem {...good} addToBasket={addToBasket} />
        </Grid>
      ))}
    </Grid>
  );
};

export { GoodsList };
