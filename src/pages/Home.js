import React, { useEffect, useState } from "react";
import HeaderLogin from "../components/HeaderLogin";
import HomeContent from "../components/HomeContent";
import Hero from "../components/Hero";

function Home() {
  const [isLogin, setIsLogin] = useState("");

  useEffect(() => {
    const status = localStorage.getItem("status");
    setIsLogin(status);
  });

  return (
    <div>
      <HeaderLogin />
      <Hero />
      <HomeContent isLogin={isLogin} />
    </div>
  );
}

export default Home;
