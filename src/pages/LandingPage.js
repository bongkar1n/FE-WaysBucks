import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import { useHistory } from "react-router";
import { login } from "../utils";

function LandingPage() {
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  let history = useHistory();
  const [isLogin, setIsLogin] = useState("");

  useEffect(() => {
    const status = localStorage.getItem("status");
    setIsLogin(status);
  });

  const handleLogin = () => {
    login();
    history.push("/home");
  };
  return (
    <div>
      <Header
        handleLogin={handleLogin}
        modalLoginShow={modalLoginShow}
        setModalLoginShow={setModalLoginShow}
        modalRegisterShow={modalRegisterShow}
        setModalRegisterShow={setModalRegisterShow}
      />
      <Hero />
      <HomeContent
        isLogin={isLogin}
        modalLoginShow={modalLoginShow}
        setModalLoginShow={setModalLoginShow}
      />
    </div>
  );
}

export default LandingPage;
