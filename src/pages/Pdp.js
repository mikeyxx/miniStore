import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromPdp,
  addItemToCart,
  removeItemFromCart,
} from "../features/products/productSlice";
import {
  PdpContainer,
  PdpWrapper,
  PdpItems,
  PdpImage,
  PdpItemName,
  PdpButton,
  PdpRemoveButton,
  PdpItemPrice,
  PdpItemRating,
  PdpDesc,
  CheckCartButton,
} from "../components/styles";
import { Link } from "react-router-dom";

function Pdp() {
  const selectedProducts = useSelector((state) => state.products.pdp);
  const cart = useSelector((state) => state.products.cart);
  const currencySymbol = useSelector((state) => state.products.currencySymbol);

  function itemPrice(p) {
    let price = 1;
    if (currencySymbol === "£") {
      price = p * 0.79;
    } else if (currencySymbol === "₦") {
      price = p * 415.2;
    } else if (currencySymbol === "¥") {
      price = p * 129.23;
    } else {
      return (price = p);
    }

    return price.toLocaleString();
  }

  const dispatch = useDispatch();
  return (
    <PdpContainer>
      <PdpWrapper>
        {selectedProducts.map((item) => (
          <PdpItems key={item.id}>
            <PdpImage src={item.img} alt={item.name} />
            <PdpDesc>
              <PdpItemName>{item.name}</PdpItemName>
              <PdpItemPrice>
                {currencySymbol.length > 0 ? currencySymbol : "$"}
                {itemPrice(item.price)}
              </PdpItemPrice>

              <PdpItemRating>
                {/* <Rating rating={item.rating} /> */}
              </PdpItemRating>

              <span>{item.desc}</span>
            </PdpDesc>
            {cart.some((p) => p.id === item.id) ? (
              <PdpButton
                danger
                onClick={() => dispatch(removeItemFromCart(item))}
              >
                Remove from Cart
              </PdpButton>
            ) : (
              <PdpButton
                disabled={!item.inStock}
                onClick={() => dispatch(addItemToCart(item))}
              >
                {!item.inStock ? "Out of Stock" : "Add to Cart"}
              </PdpButton>
            )}
            <PdpRemoveButton onClick={() => dispatch(removeItemFromPdp(item))}>
              X
            </PdpRemoveButton>
          </PdpItems>
        ))}
      </PdpWrapper>
      <Link to="/cart">
        <CheckCartButton>Check Cart</CheckCartButton>
      </Link>
    </PdpContainer>
  );
}

export default Pdp;
