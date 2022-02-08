import React, { useContext } from "react";
import { IconButton, Badge } from "@mui/material";
import { BsFillBasket2Fill } from "react-icons/bs";
import s from "./index.module.css";
import { MarketContext } from "../marketContext";

const Cart = () => {
  const { handleBasketShow = Function.prototype, order = {} } =
    useContext(MarketContext);

  return (
    <IconButton className={s.cart} onClick={() => handleBasketShow()}>
      <Badge badgeContent={order.length}>
        <BsFillBasket2Fill />
      </Badge>
    </IconButton>
  );
};

export { Cart };
