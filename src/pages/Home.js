import React from "react";
import ProductDetails from "../components/ProductDetails";
import { HomeContainer, HomeProductContainer } from "../components/styles";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";

function Home() {
  const products = useSelector((state) => state.products.products);
  const { byStock, byFastDelivery, sort, byRating, searchQuery } = useSelector(
    (state) => state.productFilters
  );

  function transformedProducts() {
    let sortedProduct = [...products];

    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProduct = sortedProduct.filter((item) => item.inStock);
    }

    if (byFastDelivery) {
      sortedProduct = sortedProduct.filter((item) => item.fastDelivery);
    }

    if (byRating) {
      sortedProduct = sortedProduct.filter((item) => item.rating >= byRating);
    }

    if (searchQuery) {
      sortedProduct = sortedProduct.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProduct;
  }

  return (
    <HomeContainer>
      <Filter />
      <HomeProductContainer>
        {transformedProducts().map((item) => (
          <ProductDetails key={item.id} item={item} />
        ))}
      </HomeProductContainer>
    </HomeContainer>
  );
}

export default Home;
