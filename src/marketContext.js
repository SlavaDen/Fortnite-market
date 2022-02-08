import { createContext, useReducer } from "react";
import { marketReducer } from "./marketReducer";

const MarketContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

const MarketProvider = ({ children }) => {
  const [value, dispatch] = useReducer(marketReducer, initialState);

  value.setGoods = (goods) => {
    dispatch({ type: "SET_GOODS", payload: goods });
  };

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  value.incrementQuantity = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  value.decrementQuantity = (id) => {
    dispatch({ type: "DECREMENT_QUEANTITY", payload: id });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_SHOW_BASKET" });
  };

  return (
    <MarketContext.Provider value={value}>{children}</MarketContext.Provider>
  );
};

export { MarketContext, MarketProvider };
