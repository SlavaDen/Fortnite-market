import React, { useContext } from "react";
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
import { MarketContext } from "../marketContext";

const BasketItem = (props) => {
  const { id = "", name = "", quantity = "", price = "" } = props;

  const { removeFromBasket, incrementQuantity, decrementQuantity } =
    useContext(MarketContext);

  return (
    <Box>
      <ListItem
        className={s.listItem}
        secondaryAction={
          <IconButton onClick={() => removeFromBasket(id)}>
            <AiOutlineClose />
          </IconButton>
        }
      >
        <ListItemText
          classes={{
            primary: s.listItemTextPrimary,
            secondary: s.listItemTextSecondary,
          }}
          primary={`${name}(${quantity})`}
          secondary={
            <Stack direction="row" spacing={1}>
              <Typography>{price * quantity}</Typography>
              <ToggleButtonGroup exclusive size="small">
                <ToggleButton
                  onClick={() => decrementQuantity(id)}
                  className={s.toggleButton}
                >
                  <AiOutlineLine />
                </ToggleButton>
                <ToggleButton
                  onClick={() => incrementQuantity(id)}
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
