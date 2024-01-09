import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Cashbook,
  Customer,
  Home,
  Login,
  Purchases,
  Sales,
  Sighup,
  Suppliers,
} from "./component/pages";
// import CurrentPageProvider from "./component/context/currentpageprovider";
import {
  UserContextProvider,
  CurrentPageProvider,
  CurrentUserContextProvider,
} from "./component/context";
// import { useContext } from "react";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CurrentPageProvider>
          <CurrentUserContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Sighup" element={<Sighup />} />
              <Route path="/Customers" element={<Customer />} />
              <Route path="/Suppliers" element={<Suppliers />} />
              <Route path="/Sales" element={<Sales />} />
              <Route path="/Purchase" element={<Purchases />} />
              <Route path="/Cashbook" element={<Cashbook />} />
            </Routes>
          </CurrentUserContextProvider>
        </CurrentPageProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
