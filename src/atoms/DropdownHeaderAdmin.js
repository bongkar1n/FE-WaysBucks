import React from "react";
import { Image } from "react-bootstrap";
import addProduct from "../images/Group.png";
import addTopping from "../images/topping 1.png";
import logoutIcon from "../images/logout 1.png";
import { useHistory, Link } from "react-router-dom";
import { logout } from "../utils";

function DropdownHeaderAdmin({ show }) {
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push("/");
  };
  return (
    show && (
      <div className="dropdown-header-admin">
        <section className="dd-route">
          <div className="dd-route-group">
            <Image src={addProduct} className="image-add-product-dd" />
            <Link to="/product" className="link-to-profile">
              <span className="text-option-dropdown">Add Product</span>
            </Link>
          </div>
          <div className="dd-route-group">
            <Image src={addTopping} className="image-add-topping-dd" />
            <Link to="/topping" className="link-to-profile">
              <span className="text-option-dropdown">Add Topping</span>
            </Link>
          </div>
          <hr className="dd-divider" />
          <div onClick={handleLogout} className="dd-route-group-admin">
            <Image src={logoutIcon} className="image-logout-dd" />
            <span className="text-option-dropdown">Logout </span>
          </div>
        </section>
      </div>
    )
  );
}

export default DropdownHeaderAdmin;
