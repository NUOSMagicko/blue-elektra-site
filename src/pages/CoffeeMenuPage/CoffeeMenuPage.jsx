import React from 'react';
import styles from './CoffeeMenu.module.css'; // Importing CSS as a module

function MenuComponent() {
  return (
    <div className={styles.menu}>
      <header>
        <h1>Brew & Blue</h1>
        <p className={styles.established}>Est. 2020</p>
      </header>
      <hr />
      <main>
        <section>
          <h2>Hot Coffee</h2>
          {/* <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon" /> */}
          <div className={styles.item}>
            <p className={styles.flavor}><b>Menu</b></p><p className={styles.price}><b>Price</b></p>
          </div>
          {/* ----- */}
          <div className={styles.item}>
            <p className={styles.flavor}>Espresso</p><p className={styles.price}>80</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Picolo</p><p className={styles.price}>90</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Americano</p><p className={styles.price}>80</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Cappucino</p><p className={styles.price}>90</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Latte</p><p className={styles.price}>90</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Mocha</p><p className={styles.price}>100</p>
          </div>
          {/* Repeat for each item */}
        </section>
        <section>
          <h2>Iced Coffee</h2>
          {/* <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon" /> */}
          <div className={styles.item}>
            <p className={styles.flavor}><b>Menu</b></p><p className={styles.price}><b>Price</b></p>
          </div>
          {/* ----- */}
          <div className={styles.item}>
            <p className={styles.flavor}>Es-yen(Thai style)</p><p className={styles.price}>100</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Black Orange</p><p className={styles.price}>110</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Caramel Macchiato</p><p className={styles.price}>110</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Espresso-Matcha</p><p className={styles.price}>120</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Americano</p><p className={styles.price}>90</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Cappucino</p><p className={styles.price}>100</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Latte</p><p className={styles.price}>100</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Mocha</p><p className={styles.price}>110</p>
          </div>
          {/* Repeat for each item */}
        </section>
        <section>
          <h2>Hot Non-Coffee</h2>
          {/* <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon" /> */}
          <div className={styles.item}>
            <p className={styles.flavor}><b>Menu</b></p><p className={styles.price}><b>Price</b></p>
          </div>
          {/* ----- */}
          <div className={styles.item}>
            <p className={styles.flavor}>Cocoa</p><p className={styles.price}>80</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Mocha</p><p className={styles.price}>100</p>
          </div>
          
          {/* Repeat for each item */}
        </section>
        <section>
          <h2>Iced Non-Coffee</h2>
          {/* <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon" /> */}
          <div className={styles.item}>
            <p className={styles.flavor}><b>Menu</b></p><p className={styles.price}><b>Price</b></p>
          </div>
          {/* ----- */}
          <div className={styles.item}>
            <p className={styles.flavor}>Cocoa</p><p className={styles.price}>85</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Thai Tea</p><p className={styles.price}>85</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Black Lemon Tea</p><p className={styles.price}>85</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Matcha</p><p className={styles.price}>100</p>
          </div>
          
          {/* Repeat for each item */}
        </section>
        <section>
          <h2>Fizzy</h2>
          {/* <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon" /> */}
          <div className={styles.item}>
            <p className={styles.flavor}><b>Menu</b></p><p className={styles.price}><b>Price</b></p>
          </div>
          {/* ----- */}
          <div className={styles.item}>
            <p className={styles.flavor}>Lychee-Rose</p><p className={styles.price}>80</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Peach Fizzy</p><p className={styles.price}>80</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Lemon </p><p className={styles.price}>80</p>
          </div>
          
          {/* Repeat for each item */}
        </section>
        <section>
          <h2>Frappe</h2>
          {/* <img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon" /> */}
          <div className={styles.item}>
            <p className={styles.flavor}><b>Menu</b></p><p className={styles.price}><b>Price</b></p>
          </div>
          {/* ----- */}
          <div className={styles.item}>
            <p className={styles.flavor}>Coffee Frappe</p><p className={styles.price}>130</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Thai Tea Frappe</p><p className={styles.price}>130</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Matcha Frappe</p><p className={styles.price}>130</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Cocoa Frappe</p><p className={styles.price}>130</p>
          </div>
          <div className={styles.item}>
            <p className={styles.flavor}>Caramel Macchiato Frappe</p><p className={styles.price}>140</p>
          </div>
          {/* Repeat for each item */}
        </section>
      </main>
      <hr className={styles.bottomLine} />
      <footer>
        <p className={styles.address}>Enjoy your time at <b>Brew & Blue</b> ^^</p>
      </footer>
    </div>
  );
}

export default MenuComponent;
