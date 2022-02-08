import React, { useEffect, useContext } from "react";
import { Grid } from "@mui/material";
import { API_KEY, API_URL } from "../config";
import { GoodsList } from "../components/GoodsList";
import { Cart } from "../components/Cart";
import BasketList from "../components/BasketList";
import Preloader from "../components/Preloader";
import { MarketContext } from "../marketContext";

const MarketPage = () => {
  const { loading, setGoods } = useContext(MarketContext);

  const getGoods = () => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
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
      <BasketList />
      <GoodsList />
      <Cart />
    </Grid>
  );
};

export default MarketPage;
