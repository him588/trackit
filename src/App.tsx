import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Cashbook,
  Customer,
  Home,
  Login,
  Sales,
  Setting,
  Sighup,
} from "./component/pages";
import {
  UserContextProvider,
  CurrentPageProvider,
  CurrentUserContextProvider,
  SelectedPersonContextProvider,
} from "./component/context";
import { Fulldeatail } from "./component/core";

function App() {
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
                <Route path="/Purchase" element={<Sales />} />
                <Route path="/Cashbook" element={<Cashbook />} />
                <Route path="/person/:id" element={<Fulldeatail />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            </SelectedPersonContextProvider>
          </CurrentUserContextProvider>
        </CurrentPageProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
