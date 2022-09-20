/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";
import cssClasses from './PageHeader.module.scss';
import { Link } from "react-router-dom";

export default function PageHeader() {
  return (
    <div className={cssClasses.page_header_modified + ' page-header header-filter'}>
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">A wise man once said, </h1>
          <h3 className="d-sm-block">
            "Hmm... My code works and I don't know why..."<br />
          </h3>
          <Button color="primary" to="whoami" tag={Link}><strong>FIND OUT WHY</strong></Button>
        </div>
      </Container>
    </div>
  );
}
