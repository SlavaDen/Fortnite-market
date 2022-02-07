import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import s from "./index.module.css";

const GoodsItem = (props) => {
  const {
    offerId: id,
    displayAssets,
    displayName: name,
    price,
    addToBasket = Function.prototype,
  } = props;

  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        image={displayAssets[0] ? displayAssets[0].background : "123"}
        alt="background"
      />
      <CardContent sx={{ height: "100%" }}>
        <Stack spacing={1}>
          <Typography textAlign="center" className={s.goodsItemName}>
            {name}
          </Typography>
          <Typography textAlign="center" className={s.goodsPrice}>
            {price.finalPrice} руб
          </Typography>
          <Button
            classes={{ root: s.goodsBuyButton }}
            onClick={() =>
              addToBasket({
                id,
                name,
                price: price.finalPrice,
              })
            }
          >
            Купить
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export { GoodsItem };
