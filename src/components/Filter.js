import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Ratings from "./Ratings";
import {BsGithub} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'
import {
  FilterContainer,
  FilterTitle,
  AscendingFilter,
  FilterInputLabel,
  FilterInput,
  DescendingFilter,
  StockFilter,
  FastDeliveryFilter,
  ClearFilterButton,
  RatingFilter,
  FilterWrapper,
  SocialIconsContainer,
  SocialIconsWrapper
} from "../components/styles";
import {
  filterByStock,
  filterByDeliveryTimeline,
  sortByPrice,
  filterByRating,
  clearFilters,
} from "../features/products/productFilterSlice";

function Filter() {
  const { byStock, byFastDelivery, sort, byRating } = useSelector(
    (state) => state.productFilters
  );

  const dispatch = useDispatch();
  return (
    <FilterContainer>
      <FilterWrapper>
        <FilterTitle>Filter Products</FilterTitle>
        <AscendingFilter>
          <FilterInputLabel htmlFor="ascending">
            <FilterInput
              type="radio"
              name="group1"
              id="ascending"
              onChange={() => dispatch(sortByPrice("lowToHigh"))}
              checked={sort === "lowToHigh" ? true : false}
            />
            Ascending
          </FilterInputLabel>
        </AscendingFilter>
        <DescendingFilter>
          <FilterInputLabel htmlFor="descending">
            <FilterInput
              type="radio"
              name="group1"
              id="descending"
              onChange={() => dispatch(sortByPrice("highToLow"))}
              checked={sort === "highToLow" ? true : false}
            />
            Descending
          </FilterInputLabel>
        </DescendingFilter>
        <StockFilter>
          <FilterInputLabel htmlFor="inStock">
            <FilterInput
              type="checkbox"
              id="inStock"
              name="group1"
              onChange={() => dispatch(filterByStock())}
              checked={byStock}
            />
            Include Out of Stock
          </FilterInputLabel>
        </StockFilter>
        <FastDeliveryFilter>
          <FilterInputLabel htmlFor="fastDeliveyStat">
            <FilterInput
              type="checkbox"
              id="fastDeliveyStat"
              name="group1"
              onChange={() => dispatch(filterByDeliveryTimeline())}
              checked={byFastDelivery}
            />
            Fast Delivery Only
          </FilterInputLabel>
        </FastDeliveryFilter>
        <RatingFilter>
          <FilterInputLabel>Rating:</FilterInputLabel>
          <Ratings
            rating={byRating}
            onClick={(i) => dispatch(filterByRating(i + 1))}
          />
        </RatingFilter>

        <ClearFilterButton onClick={() => dispatch(clearFilters())}>
          Clear Filters
        </ClearFilterButton>
        <SocialIconsContainer>
          <h3>Socials</h3>
          <SocialIconsWrapper>
            <a href="https://twitter.com/topboy_mikey"><IoLogoTwitter className="twitterLogo socials" /></a>
            <a href="https://github.com/mikeyxx" target='_blank'> <BsGithub className="socials"/></a>
          </SocialIconsWrapper>
        </SocialIconsContainer>
      </FilterWrapper>
    </FilterContainer>
  );
}

export default Filter;
