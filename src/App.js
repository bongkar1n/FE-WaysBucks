import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct";
import CartPage from "./pages/CartPage";
import MyProfile from "./pages/MyProfile";
import Home from "./pages/Home";
import TransactionPage from "./pages/TransactionPage";
import AddProductPage from "./pages/AddProductPage";
import AddToppingPage from "./pages/AddToppingPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  const [loginAs, setLoginAs] = useState("");
  useEffect(() => {
    const status = localStorage.getItem("status");
    setLoginAs(status);
  }, []);
  console.log(loginAs);
  return (
    <Switch>
      <div className="App">
        <PublicRoute
          exact
          path="/"
          component={LandingPage}
          restricted={false}
        />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/detail-product" component={DetailProduct} />
        <PrivateRoute exact path="/cart" component={CartPage} />
        <PrivateRoute exact path="/profile" component={MyProfile} />
        {loginAs === "admin" && (
          <>
            <PrivateRoute
              exact
              path="/transaction"
              component={TransactionPage}
            />
            <PrivateRoute exact path="/product" component={AddProductPage} />
            <PrivateRoute exact path="/topping" component={AddToppingPage} />
          </>
        )}
      </div>
    </Switch>
  );
}

export default App;
