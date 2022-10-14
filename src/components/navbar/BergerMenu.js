import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from "./BergerMenu.module.css";
import SearchPage from "./SearchPage";
function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };
  return (

      <div className={style.burger}>
        {[false].map((expand) => (
          <Navbar key={expand} bg="#fff7fd" expand={expand}>
            <Container fluid style={{zIndex: "100"}}>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton >
                  <NavLink to="/" style={navLinkStyles} className={style.title}>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <span className={style.name}>
                        فروشگاه آنلاین موبایل و لوازم جانبی
                      </span>
                    </Offcanvas.Title>
                  </NavLink>
                </Offcanvas.Header>
                <Offcanvas.Body className={style.toggle}>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink
                      to="login"
                      className={style.sidebar}
                      style={navLinkStyles}
                    >
                      مدیریت{" "}
                    </NavLink>
                    <NavLink
                      to="shoppingCart"
                      className={style.sidebar}
                      style={navLinkStyles}
                    >
                      سبد خرید
                    </NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <SearchPage style={{zIndex: "100"}}/>
      </div>

  );
}

export default Header;
