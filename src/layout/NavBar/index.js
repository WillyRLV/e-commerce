import "./nav.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <nav>
      <div className="nav">
        <div className="logo">
          <h4><Link to="/">LOGO</Link></h4>
        </div>
        <div>
          <ul className="ul-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Productos</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="btn-login">
          <div  className="login">
            <AccountCircleOutlinedIcon
              sx={{ fontSize: 19, marginRight: 0.8 }}
            />
            <h4>Login</h4>
  
            </div>
          <div><ShoppingBasketOutlinedIcon sx={{ fontSize:35 ,color: "#73548B" }} /></div>
        </div>
      </div>
    </nav>
    <section>
      <Outlet/>
    </section>
    </div>
  );
};

export default Navbar;
