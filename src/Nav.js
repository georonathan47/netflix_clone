/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.screenY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className= {`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />

        <img
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn.png"
          alt="https://www.google.com/imgres?imgurl=https%3A%2F%2Ficon2.cleanpng.com%2F20180319%2Frow%2Fkisspng-computer-icons-google-account-user-profile-iconfin-png-icons-download-profile-5ab0301d8907a6.3404305715214960935613.jpg&imgrefurl=https%3A%2F%2Fwww.cleanpng.com%2Ffree%2Fuser-profile.html&tbnid=pExwfCYw8yAAIM&vet=12ahUKEwjEuJuF-dnuAhXt4IUKHfMVCl0QMygCegUIARCrAQ..i&docid=_VqasVaKWpBq8M&w=260&h=260&q=png%20profiles%20images&client=ubuntu&ved=2ahUKEwjEuJuF-dnuAhXt4IUKHfMVCl0QMygCegUIARCrAQ"
        />
      </div>
    </div>
  );
}

export default Nav;
