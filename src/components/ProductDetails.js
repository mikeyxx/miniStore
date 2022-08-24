import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToPdp } from "../features/products/productSlice";
import {
  ProductContainer,
  ProductWrapper,
  Image,
  ProductBody,
  ProductName,
  ProductSubtitle,
  ProductPrice,
  RatingContainer,
} from "../components/styles";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import { FaShoppingCart } from "react-icons/fa";

function ProductDetails({ item }) {
  const dispatch = useDispatch();
  const currencySymbol = useSelector((state) => state.products.currencySymbol);

  function itemPrice(c) {
    let price = 1;
    if (c === "£") {
      price = item.price * 0.79;
    } else if (c === "₦") {
      price = item.price * 415.2;
    } else if (c === "¥") {
      price = item.price * 129.23;
    } else {
      return (price = item.price);
    }

    return price.toLocaleString("en-US");
  }

  const price = itemPrice(currencySymbol);
  // console.log(item);

  return (
    <ProductContainer>
      <Link to="/pdp">
        <ProductWrapper onClick={() => dispatch(addItemToPdp(item))}>
          <Image src={item.img} alt={item.name} />
          <ProductBody tabIndex="1">
            <ProductName>{item.name}</ProductName>
            <ProductSubtitle>
              <ProductPrice>
                {currencySymbol.length > 0 ? currencySymbol : "$"} {price}
              </ProductPrice>
              {item.fastDelivery === true ? (
                <p>Fast Delivey</p>
              ) : (
                <p>4 days Delivery</p>
              )}
              <RatingContainer>
                <Ratings rating={item.rating} />
              </RatingContainer>
            </ProductSubtitle>
          </ProductBody>
          <div className="cartHomeIconContainer">
            <FaShoppingCart className="cartHomeIcon" />
          </div>
        </ProductWrapper>
      </Link>
    </ProductContainer>
  );
}

export default ProductDetails;
