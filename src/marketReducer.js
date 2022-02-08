function marketReducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS": {
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    }
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = [];
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return { ...orderItem, quantity: orderItem.quantity + 1 };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
      };
    }
    case "REMOVE_FROM_BASKET": {
      return {
        ...state,
        order: state.order.filter((orderItem) => orderItem.id !== payload),
      };
    }
    case "INCREMENT_QUANTITY": {
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === payload) {
            const newQuantity = orderItem.quantity + 1;
            return {
              ...orderItem,
              quantity: newQuantity,
            };
          }
          return orderItem;
        }),
      };
    }
    case "DECREMENT_QUEANTITY": {
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.id === payload) {
            const newQuantity = orderItem.quantity - 1;
            return {
              ...orderItem,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          }
          return orderItem;
        }),
      };
    }
    case "TOGGLE_SHOW_BASKET": {
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    }
    default:
      return state;
  }
}

export { marketReducer };
