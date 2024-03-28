import React from "react";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";


const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
  color: #A7C7E7; 
  text-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.7); 
  z-index: 1;
  &.hide {
    display: none;
  }
  @media (max-width: 768px) {
    font-size: 1.375rem; 
  }
`;

const Title = ({ isMobileNavVisible }) => {
  return (
    <StyledTitle className={isMobileNavVisible ? "hide" : ""}>
      <TypeAnimation
        sequence={[
          "Brew & Blue", 
          1000, 
          "", 
          1000, 
          "Cafe and Restaurant ...", 
          1000, 
        ]}
        wrapper="span" 
        cursor={true} 
        repeat={Infinity} 
      />
    </StyledTitle>
  );
};

export default Title;
