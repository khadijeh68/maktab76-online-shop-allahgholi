import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { IS_LOGGGED_IN } from "../../config/constants";
import "../../index.css";
import style from "./AdminNavbar.module.css";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };

  const logOut = () => {
    localStorage.setItem(IS_LOGGGED_IN, false);
    navigate("/login");
  };

  return (
    <>
      <nav className={style.mainNav}>
        <div className={style.nav}>
          <NavLink to="orders" className={style.nav_link} style={navLinkStyles}>
            <span className={style.home}>پنل مدیریت فروشگاه</span>
          </NavLink>

          <div id="myLinks">
            <NavLink
              to="product"
              className={style.nav_link}
              style={navLinkStyles}
            >
              <span className={style.product}>کالاها</span>
            </NavLink>

            <NavLink
              to="inventory"
              className={style.nav_link}
              style={navLinkStyles}
            >
              <span className={style.inventory}>موجودی و قیمت ها</span>
            </NavLink>

            <NavLink
              to="orders"
              className={style.nav_link}
              style={navLinkStyles}
            >
              <span className={style.orders}>سفارش ها</span>
            </NavLink>

            <button onClick={logOut} className={style.btn}>
              <span className={style.logOut}>خروج </span>
            </button>
          </div>
          <NavLink to="/" className={style.nav_link} style={navLinkStyles}>
            <span className={style.site}>بازگشت به سایت</span>
          </NavLink>
        </div>
      </nav>
      <div>
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
                <NavLink to="orders" style={navLinkStyles}  className={style.title}>
                <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    
                  >
                    پنل مدیریت فروشگاه
                  </Offcanvas.Title>
                </NavLink>
                  
                </Offcanvas.Header>
                <Offcanvas.Body className={style.toggle}>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink
                      to="product"
                      className={style.sidebar}
                      style={navLinkStyles}
                    >
                      کالاها{" "}
                    </NavLink>
                    <NavLink
                      to="inventory"
                      className={style.sidebar}
                      style={navLinkStyles}
                    >
                      موجودی و قیمت ها
                    </NavLink>
                    <NavLink
                      to="orders"
                      className={style.sidebar}
                      style={navLinkStyles}
                    >
                      سفارش ها{" "}
                    </NavLink>
                    <NavLink
                      to="/"
                      className={style.sidebar}
                      style={navLinkStyles}
                    >
                      بازگشت به سایت{" "}
                    </NavLink>
                    <NavLink
                      to="/login"
                      className={style.sidebar}
                      style={navLinkStyles}
                    >
                      خروج{" "}
                    </NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
};

export default AdminNavbar;
