import React from "react";
import { Image } from "react-bootstrap";
import profileIcon from "../images/user 2.png";
import logoutIcon from "../images/logout 1.png";
import { useHistory, Link } from "react-router-dom";
import { logout } from "../utils";

function DropdownHeader({ show }) {
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push("/");
  };
  return (
    show && (
      <div className="dropdown-header triangle-up">
        <section className="dd-route">
          <div className="dd-route-group">
            <Image src={profileIcon} className="image-profile-dd" />
            <Link to="/profile" className="link-to-profile">
              <span className="text-option-dropdown">Profile</span>
            </Link>
          </div>
          <hr className="dd-divider" />
          <div className="dd-route-group" onClick={handleLogout}>
            <Image src={logoutIcon} className="image-profile-dd" />
            <span>Logout</span>
          </div>
        </section>
      </div>
    )
  );
}

export default DropdownHeader;
