import Sidebar from "./components/sidbar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="flex mt-3">
        <Sidebar />
        <div className="basis-5/6">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>
            <Route path="/new-user">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/new-product">
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
