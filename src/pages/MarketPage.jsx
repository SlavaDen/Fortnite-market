import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { API_KEY, API_URL } from "../config";
import { GoodsList } from "../components/GoodsList";
import { Cart } from "../components/Cart";
import BasketList from "../components/BasketList";
import Preloader from "../components/Preloader";

const MarketPage = () => {
  const [loading, setLoading] = useState(true);
  const [goods, setGoods] = useState([]);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  const removeFromBasket = (id) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== id);

    setOrder(newOrder);
  };

  const incQuantity = (id) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === id) {
        const newQuantity = orderItem.quantity + 1;
        return {
          ...orderItem,
          quantity: newQuantity,
        };
      }
      return orderItem;
    });

    setOrder(newOrder);
  };

  const decQuantity = (id) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.id === id) {
        const newQuantity = orderItem.quantity - 1;
        return {
          ...orderItem,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      }
      return orderItem;
    });

    setOrder(newOrder);
  };

  const getGoods = () => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      })
      .catch((error) => {
        alert("Ошибка получения данных");
      });
  };

  useEffect(() => {
    getGoods();
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <Grid container>
      <BasketList
        order={order}
        isBasketShow={isBasketShow}
        handleBasketShow={handleBasketShow}
        removeFromBasket={removeFromBasket}
        incQuantity={incQuantity}
        decQuantity={decQuantity}
      />
      <GoodsList goods={goods} addToBasket={addToBasket} />
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
    </Grid>
  );
};

export default MarketPage;
