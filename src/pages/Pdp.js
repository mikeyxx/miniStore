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
  GoHomeButton
} from "../components/styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Pdp() {
  const selectedProducts = useSelector((state) => state.products.pdp);
  const cart = useSelector((state) => state.products.cart);

  const currencySymbol = useSelector((state) => state.products.currencySymbol);

  useEffect(() => {
    localStorage.setItem("currency", JSON.stringify(currencySymbol));
  }, [currencySymbol]);

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
      {selectedProducts.length < 1 ? (
        <div className="productInfoContainer">
          <h1 className="productInfo">No product selected</h1>
          <div className="cProducts">
            <Link to="/">Check products</Link>
          </div>
        </div>
      ) : (
        <>
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
                {cart?.some((p) => p.id === item.id) ? (
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
                <PdpRemoveButton
                  onClick={() => dispatch(removeItemFromPdp(item))}
                >
                  X
                </PdpRemoveButton>
              </PdpItems>
            ))}
          </PdpWrapper>
          <Link to="/cart">
            <CheckCartButton>Check Cart</CheckCartButton>
          </Link>
          <GoHomeButton>
            <Link to="/">Go Home</Link>
          </GoHomeButton>
        </>
      )}
    </PdpContainer>
  );
}

export default Pdp;
