/*!

=========================================================
* BLK Design System PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import {
  Button,
  UncontrolledCollapse,
  Container,
  Row,
  Col,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,

} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)



class Index extends React.Component {
  componentDidMount() {
    document.body.classList.add("index-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
  }
  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }
  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          {/* ********* HEADER 6 ********* */}
          <div className="header header-6">
            <div className="page-header">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6" />
            <div className="squares square7" />
              <div className="content-center">
                <Container>
                  <Row className="align-items-center text-left">
                    <Col lg="6" xs="12">
                      <h1 className="title">
                        Maikro<br />
                        
                        <strong className="text-info">Microfinance Access Initiative</strong>
                      </h1>
                      <p className="description">
                      "Microfinance is a unique platform for elevating individuals and small businesses through microloans. 
                      Here at MAIkro, however, building relationships stands at the core of our mission. We invest in people 
                      and their stories, working together to build sustainable solutions on the global front."
                      </p>
                      <Row className="row-input">
                        <Col className="mt-1" sm="8" xs="12">
                          <Input
                            aria-label="Your email"
                            id="signupSrEmail"
                            name="email"
                            placeholder="Your email"
                            type="email"
                          />
                        </Col>
                        <Col sm="4" xs="12">
                          <Button block color="info">
                            Join Us
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="6" xs="12">
                      <img
                        alt="..."
                        className="path path3"
                        src={require("assets/img/shape-s.png")}
                      />
                      {/* SVG Illustration */}
                      <figure className=" header-shape">
                        <svg
                          className=" injected-svg js-svg-injector"
                          style={{ enableBackground: "new 10 12 878.9 907" }}
                          viewBox="10 12 878.9 907"
                          x="0px"
                          y="0px"
                          xmlSpace="preserve"
                        >
                          <g>
                            <defs>
                              <path
                                d="M300.34,75.35C379.42-7.43,305.86,185.78,540.87,98.95,647.68,46,677,219,674.65,258.55c-11,185-132.32,65-13.89,317.66,56.86,121.32-94.88,256-155.89,151.41-55.11-94.48-151.56-85.1-189-90.54-311-45.27-9.33-148.52-125.21-256.78C9.7,211.2,190.5,100.86,306.34,70.35Z"
                                id="shape1"
                              />
                            </defs>
                            <clipPath id="shape2">
                              <use
                                style={{ overflow: "visible" }}
                                xlinkHref="#shape1"
                              />
                            </clipPath>
                            <g clipPath="url(#shape2)">
                              <image
                                height="900"
                                id="imageShape1"
                                style={{ overflow: "visible" }}
                                transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                                width="800"
                                xlinkHref={require("assets/img/img_352.png")}
                              />
                            </g>
                          </g>
                          <g>
                            <defs>
                              <path
                                d="M186.26,647.36c7,1,14,1.87,21.11,2.4,42.73,3.24,173.84,9.32,234.51,60.15,72.83,61,105.38,80.19,37.4,96.45C388.73,828,438.49,724,312,749.28c-167.3,33.46-210.61-70.86-181.08-90.54C151.8,644.8,174.69,645.67,186.26,647.36Z"
                                id="shape3"
                              />
                            </defs>
                            <clipPath id="shape4">
                              <use
                                style={{ overflow: "visible" }}
                                xlinkHref="#shape3"
                              />
                            </clipPath>
                            <g
                              clipPath="url(#shape4)"
                              transform="matrix(1 0 0 1 0 0)"
                            >
                              <image
                                height="900"
                                id="imageShape2"
                                style={{ overflow: "visible" }}
                                transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                                width="900"
                                xlinkHref={require("assets/img/img_352.png")}
                              />
                            </g>
                          </g>
                        </svg>
                      </figure>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
          {/* ********* END HEADER 6 ********* */}
          <div className="main">
          </div>
          <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">The Maikro Difference</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">0% Interest</h4>
                        <hr className="line-primary" />
                        <p>
                         The loans 
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">High Impact Selection</h4>
                        <hr className="line-warning" />
                        <p>
                        We do extensive research and target the loans with the highest impact 
                        in five diversified sectors: Education, Water and Sanitation, Health,
                        Agriculture, and Women. 
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <h4 className="info-title">Diverse Borrowers</h4>
                        <hr className="line-success" />
                        <p>
                        We hope to primarily invest in the Asia Pacific, East Africa, 
                        South America, and Middle East regions. 
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          <DemoFooter />
        </div>

      </>
    );
  }
}

export default Index;
