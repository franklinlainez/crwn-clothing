import {
  CartItemContainer,
  CartIemImage,
  ItemDetailName,
  ItemDetailsContainer,
} from "./cart-item.styles.jsx";

import React from "react";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartIemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer className="item-details">
        <ItemDetailName>{name}</ItemDetailName>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
