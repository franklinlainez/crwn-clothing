import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityText,
  Text,
  RemoveButtonContainer,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <Text>{name}</Text>
      <QuantityText>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <Text>{quantity}</Text>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityText>
      <Text>{price}</Text>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
