import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
`;

export const HomeProductContainer = styled.div`
  width: 75vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 7em 0 1.8em 22em;
  align-item: center;
  justify-content: center;

  @media only screen and (max-width: 67.5em) {
    margin: 8em 1em;
    place-items: center;
    width: 100%;
  }
`;

export const NavbarContainer = styled.div`
  min-height: 80px;
  background-color: #343a40;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 100;

  @media only screen and (max-width: 37.75em) {
    min-height: 100px;
  }
`;

export const NavbarItemWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 5rem;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 67.5em) {
    padding: 1rem 2rem;
  }

  @media only screen and (max-width: 41.25em) {
    padding: 1rem 1rem;
  }
`;

export const ResponsiveFilter = styled.div`
  display: none;

  @media only screen and (max-width: 67.5em) {
    display: ${(props) => (props.clicked ? "flex" : "none")};
  }

  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  align-items: center;
  justify-content: center;
  background: rgba(53, 53, 63, 0.95);
  color: white;
  line-height: 2.5;
  margin: 0 2em;
  border-radius: 2em;
  // opacity: ${(props) => (props.clicked ? 1 : 0)};
`;

export const Currency = styled.div`
  width: 4em;
  cursor: pointer;

  @media only screen and (max-width: 27.8125em) {
    display: none;
  }
`;
export const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  height: 30px;
  cursor: pointer;
`;
export const Option = styled.option`
  cursor: pointer;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
  a {
    color: white;
    font-size: 1.3rem;
    text-decoration: none;

    @media only screen and (max-width: 41.25em) {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 41.25em) {
    width: 13rem;
  }
`;

export const HamburgerBtn = styled.div`
  width: 2rem;
  height: 2px;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  cursor: pointer;
  position: relative;
  display: none;

  @media only screen and (max-width: 67.5em) {
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    width: 2rem;
    height: 2px;
    display: inline-block;
    cursor: pointer;
    background-color: white;
    position: absolute;
    right: 0;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? 0 : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : 0)};
  }

  &::after {
    top: ${(props) => (props.clicked ? 0 : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : 0)};
  }
`;

export const Center = styled.div`
  @media only screen and (max-width: 37.75em) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 500px;
  border: none;
  height: 30px;
  border-radius: 4px;
  padding: 0 5px;

  @media only screen and (max-width: 68em) {
    width: 300px;
  }

  @media only screen and (max-width: 47.5em) {
    width: 200px;
  }

  @media only screen and (max-width: 41.25em) {
    width: 150px;
  }
`;

export const Right = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 5em;
`;

export const SearchInputContainer = styled.div`
  padding: 0 1rem;

  padding-bottom: 1rem;
  // width: 100%;

  Input {
    width: 100%;
    height: 2.1rem;
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 37.75em) {
    display: none;
  }
`;

export const CartElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #078c66;
  color: white;
  border-radius: 3px;
  padding: 5px;
  width: 4em;
  height: 30px;
  position: relative;
`;

export const CartIconWrap = styled.div`
  @media only screen and (max-width: 41.25em) {
    font-size: 1.5rem;
  }
`;

export const CartItemCountContainer = styled.div`
  position: absolute;
  background-color: red;
  top: -8px;
  left: 18px;
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartItemCount = styled.span``;

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 1px;
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.8);
  box-shadow: 5px 3px 8px 0px;
  border-radius: 4px;
  min-width: 16em;
  min-height: 2em;
  display: flex;
  align-items: center;
  padding: 6px;
  flex-direction: column;
  z-index: 1;

  a {
    width: 100%;
  }
`;

export const CartDropdownItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 7px;
  background-color: white;
  padding: 6px;
  box-shadow: 5px 3px 8px 3px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;
export const CartDropdownItemImage = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
`;

export const CartDropdownDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartDropdownName = styled.span`
  font-size: 0.8rem;
`;

export const CartDropdownButton = styled.button`
  background-color: #0099dd;
  color: white;
  border: none;
  width: 100%;
  cursor: pointer;
  padding: 4px;
  border-radius: 3px;
  margin-top: 7px;
`;

export const CartPageContainer = styled.div`
  width: 100vw;
`;
export const CartPageWrapper = styled.div`
  padding-top: calc(10em - 80px);
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin: 0 auto;
  padding-bottom: 1.8em;

  @media only screen and (max-width: 39.4375em) {
    width: 70vw;
    padding-top: 8em;
  }
`;
export const CartPageItem = styled.div`
  width: 100%;
  padding: 1em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: white;
  font-size: 1.2rem;
  line-height: 2.1;
  position: relative;

  &:first-of-type {
    margin-top: 1em;
  }
`;
export const CartPageItemImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 4px;
`;
export const CartPageItemName = styled.p``;
export const CartPageItemPrice = styled.p``;
export const CartPageItemRemoveButton = styled.button`
  background-color: transparent;
  border: 0;
  position: absolute;
  left: 40em;
  top: 35px;
  cursor: pointer;

  @media only screen and (max-width: 44.6875em) {
    left: 20em;
    top: 35px;
  }

  @media only screen and (max-width: 64.75em) {
    left: 25em;
    top: 35px;
  }

  @media only screen and (max-width: 23.75em) {
    left: 15em;
    top: 35px;
  }
`;
export const CartPageItemSummary = styled.div`
  line-height: 2;
`;
export const CartPageItemSummaryHeader = styled.h2``;
export const CartPageItemPriceTotal = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`;
export const CartPageItemButton = styled.button`
  padding: 0.5em;
  font-weight: 600;
  background: #a9d9d0;
  border-radius: 5px;
  cursor: pointer;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const CartItemQtyContainer = styled.div``;
export const CartItemDecrementBtn = styled.button`
  padding: 0.3em 0.8em;
  margin-right: 1.2em;
  cursor: pointer;
`;
export const CartItemQty = styled.span``;
export const CartItemIncrementBtn = styled.button`
  padding: 0.3em 0.8em;
  margin-left: 1.2em;
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: white;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
`;

export const ProductWrapper = styled.div`
  padding: 1em;
  border-radius: 5px;

  &:hover {
    background: white;
  }
`;

export const Image = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 5px;
`;
export const ProductBody = styled.div`
  margin: 1em 0;
  font-size: 1.2rem;
`;

export const ProductName = styled.p``;
export const ProductSubtitle = styled.div``;
export const ProductPrice = styled.span``;
export const Button = styled.button`
  color: white;
  cursor: pointer;
  border: 0;
  padding: 4px;
  border-radius: 3px;
  background-color: ${(props) => (props.danger ? "#BD2A2E" : "#0099DD")};
`;

export const RatingContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const FilterContainer = styled.div``;

export const FilterWrapper = styled.div`
  background-color: #343a40;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 20%;
  // margin: 10px;
  height: 100vh;
  position: fixed;
  top: 4em;
  bottom: 0;
  left: 0;
  cursor: pointer;

  @media only screen and (max-width: 67.5em) {
    display: none;
  }

  span {
    padding-bottom: 20px;
  }
`;

export const FilterTitle = styled.span`
  font-size: 30px;
`;

export const AscendingFilter = styled.span`
  cursor: pointer;
`;

export const FilterInputLabel = styled.label``;

export const FilterInput = styled.input`
  margin-right: 1em;
`;

export const DescendingFilter = styled.span`
  cursor: pointer;
`;

export const StockFilter = styled.span`
  cursor: pointer;
`;

export const FastDeliveryFilter = styled.span`
  cursor: pointer;
`;

export const ClearFilterButton = styled.button`
  padding: 0.5em;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
`;

export const RatingFilter = styled.span`
  display: flex;
  cursor: pointer;

  label {
    padding-right: 10px;
  }
`;

export const PdpContainer = styled.div`
  width: 100vw;

  a {
    text-decoration: none;
  }
`;

export const PdpWrapper = styled.div`
  padding-top: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  margin: 0 auto;

  @media only screen and (max-width: 39.4375em) {
    width: 70vw;
    padding-top: 8em;
  }
`;

export const PdpItems = styled.div`
  width: 100%;
  padding: 1em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: white;
  font-size: 1.2rem;
  position: relative;
  z-index: 1;

  &:first-of-type {
    margin-top: 1em;
  }

  @media only screen and (max-width: 27.5em) {
    line-height: 2;
  }
`;

export const PdpDesc = styled.div`
  line-height: 1.7;
`;

export const PdpImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 4px;
`;
export const PdpItemName = styled.p`
  width: 10em;
  // margin-left: 5em;
`;

export const PdpItemSummary = styled.div`
  background-color: #343a40;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100vh;
  position: fixed;
  top: 4em;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export const PdpItemSummaryHeader = styled.h2``;

export const PdpButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  border: 0;
  border-radius: 3px;
  width: 7em;
  background-color: ${(props) => (props.danger ? "red" : "#0099dd")};
  color: white;
  cursor: pointer;
  margin-top: 1.4em;
`;

export const PdpRemoveButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  color: red;
  position: absolute;
  left: 30em;
  top: 35px;
  font-size: 1.4rem;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 59.6875em) {
    left: 12em;
    top: 50px;
  }

  @media only screen and (max-width: 40.5625em) {
    left: 15em;
    top: 35px;
  }

  @media only screen and (min-width: 70.625em) {
    left: 26em;
    top: 35px;
  }

  @media only screen and (max-width: 37.5em) {
    left: 15em;
    top: 35px;
  }

  @media only screen and (max-width: 23.5em) {
    left: 10em;
    top: 35px;
  }
`;

export const PdpItemPrice = styled.span`
  // margin-left: 5em;
`;

export const PdpItemRating = styled.div`
  margin-left: 5em;
`;

export const CheckCartButton = styled.button`
  min-width: 10vw;
  display: block;
  margin: 2em auto;
  padding: 1em;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  background: #a9d9d0;
  border-radius: 5px;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(0.9);
  }
`;
