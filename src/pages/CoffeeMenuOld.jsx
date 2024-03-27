// Import React and styled-components
import React from 'react';
import styled from 'styled-components';

// Styled-components for each part of the menu
const StyledMenu = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  max-width: 500px;
  hr {
    height: 2px;
    background-color: #3E2723;
    border-color: #3E2723;
  }
  .bottom-line {
    margin-top: 25px;
  }
`;

const Header = styled.header`
  h1 {
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 15px;
    font-family: Impact, serif;
    text-align: center;
  }
  p {
    font-style: italic;
    text-align: center;
  }
`;

const Main = styled.main`
  h2 {
    font-size: 30px;
    font-family: Impact, serif;
    text-align: center;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .item p {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 18px;
    text-align: center;
  }
  .flavor, .dessert {
    text-align: left;
    width: 75%;
  }
  .price {
    text-align: right;
    width: 25%;
  }
`;

const Footer = styled.footer`
  font-size: 14px;
  p {
    text-align: center;
  }
  .address {
    margin-bottom: 5px;
  }
  a {
    color: black;
    &:visited {
      color: black;
    }
    &:hover, &:active {
      color: #3E2723;
    }
  }
`;

// The React component
const CoffeeMenuPage = () => {
  return (
    <StyledMenu>
      <Header>
        <h1>CAMPER CAFE</h1>
        <p className="established">Est. 2020</p>
      </Header>
      <hr />
      <Main>
        <section>
          <h2>Coffee</h2>
          <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon"/>
          {/* Repeat the following structure for each item */}
          <article className="item">
            <p className="flavor">French Vanilla</p><p className="price">3.00</p>
          </article>
          {/* More items... */}
        </section>
        <section>
          <h2>Desserts</h2>
          <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg" alt="pie icon"/>
          {/* Dessert items */}
        </section>
      </Main>
      <hr className="bottom-line" />
      <Footer>
        <p>
          <a href="mailto:mohamed.f.ghulam@gmail.com">Email</a>
        </p>
        <p className="address">123 - Riyadh - Saudi Arabia</p>
      </Footer>
    </StyledMenu>
  );
}

export default CoffeeMenuPage;
