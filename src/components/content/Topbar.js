import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  const [selectedDate, setSelectedDate] = useState(null);

  const [value, setValue] = useState();
  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Container>
          <form>
            <Row>
              <Col>
                <label>Name </label>
                <input />
              </Col>
              <Col>
                <label>Place </label>
                <input />
              </Col>
            </Row>
          </form>
        </Container>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to={"/page-1"}>
              <ReactDatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />

              <form>
                <label>Timings</label>
                <Row>
                  <Col>
                    <TimePicker onChange={setValue} value={value} />
                  </Col>

                  <Col>
                    <TimePicker />
                  </Col>
                  <Col>
                    <br />{" "}
                    <button type="button" class="btn btn-success">
                      Submit
                    </button>
                  </Col>
                </Row>
              </form>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
