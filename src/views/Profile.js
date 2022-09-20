import React from 'react';
import {
    Card,
    CardHeader,
    Container,
    Row,
    Col,
    CardBody
} from "reactstrap";
import cssClasses from '../assets/scss/views/Profile.module.scss';
import '../assets/scss/views/Profile.scss';
import 'animate.css';
import WhatCanICode from '../components/Views/Profile/WhatCanICode';
import ServerAdmin from 'components/Views/Profile/ServerAdmin';
import MyJourney from '../components/Views/Profile/MyJourney';
import '../../node_modules/@splidejs/splide/dist/css/splide.min.css';
import OperatingSystem from 'components/Views/Profile/OperatingSystem';
import Repositories from 'components/Views/Profile/Repositories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import ProjectManagement from 'components/Views/Profile/ProjectManagement';

const importAll = (r) => {
    let images = {};
    for (var index in r.keys()) {
        images[r.keys()[index].replace('./', '')] = r(r.keys()[index]);
    }
    return images;
}

const resume = importAll(require.context('../assets/img/rcjworks', false, /\.(pdf)$/));

const Profile = props => {
    const WORKEDSINCE = 2014;
    const yearsOfExp = new Date().getFullYear() - WORKEDSINCE;
    return (
        <React.Fragment>
            <Container className={cssClasses.container_padding}>
                <Row className="align-items-center">
                    <Col>
                        <Row className="align-items-center">
                            <Col lg="6" md="6" className="animate__animated animate__fadeInDown">
                                <h5 className={cssClasses.text_on_back + " text-on-back"}>RCJ</h5>
                                <h1 className={cssClasses.profile_title + " profile-title text-left "}><strong>Radiant C. Juan</strong></h1>
                                <h4 className={cssClasses.profile_title + " profile-title text-left text-primary"}>Full-stack Web Developer</h4>
                                <p className="profile-description">
                                    In my {yearsOfExp} years of experience as a Web Developer, I have the necessary skill set and knowledge to help your company to be profitable, my mission is to deliver operational excellence, productivity, and compliance to ensure and maximize client services, minimize costs they serve and most importantly drive revenue for their business.
                                </p>
                            </Col>
                            <Col className="ml-auto mr-auto animate__animated animate__fadeInDown" lg="4" md="6">
                                <Card className="card-coin card-plain">
                                    <CardHeader className={cssClasses.card_header_class + " text-center"}>
                                        <img
                                            alt="..."
                                            className="img-center img-fluid rounded-circle"
                                            src={require("../assets/img/profilepic.png").default}
                                        />
                                        <h4 className="mt-3"><strong>Contact Me</strong> </h4>
                                    </CardHeader>
                                    <CardBody className="text-center mb-3">
                                        <ul className={cssClasses.contant_list + " m-0 p-0"}>
                                            <li>
                                                <h4><a href="tel:+639055629640"><FontAwesomeIcon icon={faMobile} /> +639055629640</a></h4>
                                            </li>
                                            <li>
                                                <h4><a href="mailto:radiantcjuan@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> radiantcjuan@gmail.com</a></h4>
                                            </li>
                                            <li>
                                                <h4><a href="https://www.linkedin.com/in/radiant-juan-2b495391" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /> radiant-juan-2b495391</a></h4>
                                            </li>
                                            <li className="pt-3">
                                                <a href={resume['resume.pdf'].default} className="btn btn-primary" target="_blank" rel="noreferrer"><strong>REVIEW MY CV</strong></a>
                                            </li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-5 animate__animated animate__fadeInLeft animate__delay-1s">
                            <Col>
                                <h2 className="text-info"><strong>WHAT I CAN DO</strong></h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} lg={6} className="mb-4">
                                <Card className="animate__animated animate__fadeInDown animate__delay-1s h-100">
                                    <CardHeader>
                                        <h4><strong>Coding</strong></h4>
                                    </CardHeader>
                                    <CardBody>
                                        <div id="whatcanido" className="m-auto container-fluid">
                                            <div className="row justify-content-center">
                                                <WhatCanICode />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} lg={6} className="mb-4">
                                <Card className="animate__animated animate__fadeInDown animate__delay-1s h-100">
                                    <CardHeader>
                                        <h4><strong>Cloud Administration</strong></h4>
                                    </CardHeader>
                                    <CardBody>
                                        <div id="server" className="m-auto container-fluid h-100">
                                            <div className="row justify-content-center h-100">
                                                <ServerAdmin />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} lg={4} className="mb-4">
                                <Card className="animate__animated animate__fadeInDown animate__delay-1s h-100">
                                    <CardHeader>
                                        <h4><strong>Operating System</strong></h4>
                                    </CardHeader>
                                    <CardBody>
                                        <div id="os" className="m-auto container-fluid">
                                            <div className="row justify-content-center">
                                                <OperatingSystem />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} lg={4} className="mb-4">
                                <Card className="animate__animated animate__fadeInDown animate__delay-1s h-100">
                                    <CardHeader>
                                        <h4><strong>Repositories and versioning</strong></h4>
                                    </CardHeader>
                                    <CardBody>
                                        <div id="repositories" className="m-auto container-fluid">
                                            <div className="row justify-content-center">
                                                <Repositories />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} lg={4} className="mb-4">
                                <Card className="animate__animated animate__fadeInDown animate__delay-1s h-100">
                                    <CardHeader>
                                        <h4><strong>Project Management</strong></h4>
                                    </CardHeader>
                                    <CardBody>
                                        <div id="projectManagement" className="m-auto container-fluid">
                                            <div className="row justify-content-center">
                                                <ProjectManagement />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-5 animate__animated animate__fadeInLeft animate__delay-1s">
                            <Col>
                                <h2 className="text-info"><strong>MY EXPERIENCES</strong></h2>
                            </Col>
                        </Row>
                        <Row>
                            <MyJourney />
                        </Row>
                        <Row className="mb-5">
                            <Col className="text-center">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeu6kaQLH85IG-U2UDJbhX5FC87gsbTJ8gDQPAk2HhZ-uwzpA/viewform?usp=pp_url" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg"><strong>INQUIRE NOW</strong></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Profile;