import React from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";

function Ratings({ rating, onClick }) {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <Wrapper
          key={index}
          onClick={() => onClick(index)}
          style={{ cursor: "pointer" }}
        >
          {rating > index ? (
            <AiIcons.AiFillStar style={{ color: "orange" }} />
          ) : (
            <AiIcons.AiOutlineStar />
          )}
        </Wrapper>
      ))}
    </>
  );
}

export default Ratings;

const Wrapper = styled.div``;
