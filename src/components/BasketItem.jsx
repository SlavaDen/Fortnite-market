import React from "react";
import {
  Divider,
  Box,
  ListItem,
  ListItemText,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
  Typography,
} from "@mui/material";
import s from "./index.module.css";
import { AiOutlineClose, AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

const BasketItem = (props) => {
  const {
    orderItem = {},
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <Box>
      <ListItem
        className={s.listItem}
        secondaryAction={
          <IconButton onClick={() => removeFromBasket(orderItem.id)}>
            <AiOutlineClose />
          </IconButton>
        }
      >
        <ListItemText
          classes={{
            primary: s.listItemTextPrimary,
            secondary: s.listItemTextSecondary,
          }}
          primary={`${orderItem.name}(${orderItem.quantity})`}
          secondary={
            <Stack direction="row" spacing={1}>
                <Typography>{orderItem.price * orderItem.quantity}</Typography>
                <ToggleButtonGroup exclusive size="small">
                  <ToggleButton
                    onClick={() => decQuantity(orderItem.id)}
                    className={s.toggleButton}
                  >
                    <AiOutlineLine />
                  </ToggleButton>
                  <ToggleButton
                    onClick={() => incQuantity(orderItem.id)}
                    className={s.toggleButton}
                  >
                    <AiOutlinePlus />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Stack>
          }
        />
      </ListItem>
      <Divider />
    </Box>
  );
};

export default BasketItem;
