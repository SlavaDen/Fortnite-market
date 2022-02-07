import React from "react";
import { IconButton, Badge } from "@mui/material";
import { BsFillBasket2Fill } from "react-icons/bs";
import s from "./index.module.css";

const Cart = (props) => {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;

  return (
    <IconButton className={s.cart} onClick={() => handleBasketShow()}>
      <Badge badgeContent={quantity}>
        <BsFillBasket2Fill />
      </Badge>
    </IconButton>
  );
};

export { Cart };
