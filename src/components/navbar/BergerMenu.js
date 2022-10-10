import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from "./BergerMenu.module.css";
function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#C14795" : "black",
    };
  };
  return (
    <>
      <div className={style.burger}>
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
                      فروشگاه آنلاین موبایل و لوازم جانبی
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
                      سبدخرید
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
}

export default Header;
