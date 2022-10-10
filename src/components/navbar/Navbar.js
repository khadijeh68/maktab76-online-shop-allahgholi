import { NavLink } from "react-router-dom";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import "../../index.css";
import { useSelector } from "react-redux";
import style from "./Navbar.module.css";
import SearchPage from "./SearchPage";
import { Container, Nav, Offcanvas } from "react-bootstrap";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };

  return (
    <>
      <div>
        <div className={style.nav}>
          <div>
            <NavLink to="/" className={style.span} style={navLinkStyles}>
              <span className={style.logo}>
                <img
                  className={style.img}
                  src={`../../../image/logo.png`}
                  alt="logo"
                />
                <span className={style.name}>
                  فروشگاه آنلاین موبایل و لوازم جانبی
                </span>
              </span>
            </NavLink>
          </div>

          <div className={style.search}>
            <SearchPage />
          </div>

          <div className={style.leftNav}>
            {isLoggedIn ? (
              <NavLink
                to="/admin/orders"
                className={style.span}
                style={navLinkStyles}
              >
                <span>مدیریت </span>
              </NavLink>
            ) : (
              <NavLink to="/login" className={style.span} style={navLinkStyles}>
                <span className={style.admin}>مدیریت </span>
              </NavLink>
            )}
            <NavLink
              to="/shoppingCart"
              className={style.span}
              style={navLinkStyles}
            >
              <div className={style.basket}>
                <ShoppingCartSharpIcon />
                <span className="bag-quantity">{cartItems.length}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* <div>
        {[false].map((expand) => (
          <Navbar key={expand} bg="#fff7fd" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <NavLink to="/" style={navLinkStyles} className={style.title}>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      فروشگاه آنلاین موبایل و لوازم جانبی{" "}
                    </Offcanvas.Title>
                  </NavLink>
                </Offcanvas.Header>
                <Offcanvas.Body className={style.toggle}>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink
                      to="/admin/orders"
                      className={style.sidebar}
                      style={navLinkStyles}
                    >
                      مدیریت{" "}
                    </NavLink>

                    <NavLink
                      to="/shoppingCart"
                      className={style.sidebar}
                      style={navLinkStyles}
                    >
                      <div>
                        <ShoppingCartSharpIcon />
                        <span className="bag-quantity">{cartItems.length}</span>
                      </div>
                    </NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div> */}
    </>
  );
}

export default Navbar;
