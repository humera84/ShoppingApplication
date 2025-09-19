import { useState, createContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
export const AppContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState({});
  const [orders, setOrders] = useState([]);

  return (
    <div>
      <AppContext.Provider
        value={{
          count,
          setCount,
          customers,
          setCustomers,
          currentCustomer,
          setCurrentCustomer,
          cart,
          setCart,
          orders,
          setOrders
        }}
      >
        {/* <h1>Hello World Humera!!</h1>
        <Child1 />
        <Child2 /> */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
