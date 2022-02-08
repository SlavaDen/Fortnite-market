import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import s from "./index.module.css";
import BasketItem from "./BasketItem";
import { MarketContext } from "../marketContext";

const BasketList = () => {
  const {
    isBasketShow = false,
    handleBasketShow = Function.prototype,
    order = [],
  } = useContext(MarketContext);

  const totalPrice = order.reduce((acc, orderItem) => {
    return acc + orderItem.price * orderItem.quantity;
  }, 0);

  return (
    <Dialog open={isBasketShow} onClose={handleBasketShow} fullWidth={true}>
      <DialogTitle className={s.basketTitle}>Корзина</DialogTitle>
      <DialogContent>
        <List>
          {order.map((orderItem) => (
            <BasketItem key={orderItem.id} {...orderItem} />
          ))}
          <ListItem className={s.listItem}>
            <ListItemText
              classes={{
                primary: s.listItemTextPrimary,
                secondary: s.listItemTextSecondary,
              }}
              primary={`Итог: ${totalPrice}`}
            />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default BasketList;
