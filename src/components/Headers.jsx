import React from "react";
import "../index.css";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Header(props) {
  const { countCartItems } = props;
  return (
    <div className="container" style={{backgroundColor:"#1d2634"}}>
    <header className="row block center">
      <div>
        <a href="#/"></a>
        <h1>Small Shopping Cart</h1>
      </div>
      <div>
        <a href="#/">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            " "
          )}
        </a>
        <a href="#/" className="ms-2">
          SignIn
        </a>
      </div>
    </header>
    </div>
  );
}
export default Header;
