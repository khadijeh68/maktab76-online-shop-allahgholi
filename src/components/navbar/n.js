import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

function OffcanvasExample() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
    <>
     {[false].map((expand) => ( 
        <Navbar key={expand} bg="#fff7fd" expand={expand} className="mb-3" >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  پنل مدیریت فروشگاه
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="product">کالاها </NavLink>
                  <NavLink to="inventory">موجودی و قیمت ها</NavLink>
                  <NavLink to="orders">سفارش ها </NavLink>
                  <NavLink to="/">بازگشت به سایت </NavLink>
                  <NavLink to="/login">خروج </NavLink>
                </Nav>
              </Offcanvas.Body>
              <Navbar.Brand href="orders">پنل مدیریت فروشگاه</Navbar.Brand>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
