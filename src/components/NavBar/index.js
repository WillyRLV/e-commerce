import "./nav.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Link, Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import { Button, Dialog } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./nav.css";
import Login from "../Login";
import Footer from "../Footer/Footer";
import logo from "../../assets/image/logo.png";
import { ThemeProvider } from '@mui/material/styles';
import {Theme} from "../../styles";
import {auth} from "../../services/firestore"
import { onAuthStateChanged } from "@firebase/auth";



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user,setUser]=useState(null);

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      user?setUser(user):setUser(null); 
      console.log(user)
    });
  };

  useEffect(() => {
    getUser();
  }, []);


  const handleClose = () => {
    setOpen(false);
  };
  const [status, setStatus] = useState("menu-nav");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    status === "menu-nav"
      ? setStatus("menu-nav nav__active")
      : setStatus("menu-nav");

    //toggler
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  // const closeicon = (
  //   <CloseIcon
  //     className="icon"
  //     sx={{ color: "#fff", cursor: "pointer", marginRight: 2 }}
  //   />
  // );
  return (
    <div>
      <nav className="container">
        <div className="nav">
          <div className="logo">
            <img src={logo} style={{ width: 140 }} />
          </div>
          <div>
            <div className={status}>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/tienda">Tienda</Link>
                </li>
                <li>
                  <Link to="/">Nosotros</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li >
                <ThemeProvider theme={Theme}>
                  <Button  color="primary" 
                  variant="contained" 
                  onClick={() => setOpen(true)}
                  startIcon={
                    <AccountCircleOutlinedIcon
                  />
                }
                  >
                   
                    {user&&'LOGOUT'}
                    {!user&&'LOGIN'}
                  </Button>
                  </ThemeProvider>
                  
                </li>
              </ul>
            </div>
          </div>

          <div className="btn-login">
            <div>
              <ShoppingBasketOutlinedIcon
                className="carshop"
                sx={{
                  fontSize: 30,
                  color: "#73548B",
                  marginRight: 2,
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              />
            </div>
          </div>

          <div className={toggleIcon} onClick={navToggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
      <Footer />
      <Dialog open={open} onClose={handleClose}>
        <Login />
      </Dialog>
    </div>
  );
};

export default Navbar;
