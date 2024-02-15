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
} from "./component/pages";
// import CurrentPageProvider from "./component/context/currentpageprovider";
import {
  UserContextProvider,
  CurrentPageProvider,
  CurrentUserContextProvider,
  SelectedPersonContextProvider,
} from "./component/context";
import { Fulldeatail } from "./component/core";
// import { useContext } from "react";

function App() {
  // localStorage.clear();
  return (
    <BrowserRouter>
      <UserContextProvider>
        <CurrentPageProvider>
          <CurrentUserContextProvider>
            <SelectedPersonContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Sighup" element={<Sighup />} />
                <Route path="/Customers" element={<Customer />} />
                <Route path="/Suppliers" element={<Customer />} />
                <Route path="/Sales" element={<Sales />} />
                <Route path="/Purchase" element={<Purchases />} />
                <Route path="/Cashbook" element={<Cashbook />} />
                <Route path="/person/:id" element={<Fulldeatail />} />
              </Routes>
            </SelectedPersonContextProvider>
          </CurrentUserContextProvider>
        </CurrentPageProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
