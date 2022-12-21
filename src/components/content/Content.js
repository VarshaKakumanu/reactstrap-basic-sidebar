import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/" component={() => "Hello"} />
      <Route path="/abouts" element={<About />} />
    </Switch>
  </Container>
);

export default Content;
