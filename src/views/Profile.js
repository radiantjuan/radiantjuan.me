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
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
    const workedSince = 2014;
    const yearsOfExp = new Date().getFullYear() - workedSince;
    return (
        <React.Fragment>
            <Container className={cssClasses.container_padding}>
                <Row className="align-items-center">
                    <Col>
                        <Row className="align-items-center">
                            <Col lg="6" md="6" className="animate__animated animate__fadeInDown">
                                <h5 className={cssClasses.text_on_back + " text-on-back"}>RCJ</h5>
                                <h1 className={cssClasses.profile_title + " profile-title text-left "}><strong>Radiant
                                    C. Juan</strong></h1>
                                <h4 className={cssClasses.profile_title + " profile-title text-left text-primary"}>
                                    Software Engineer
                                </h4>
                                <div className="profile-description">
                                    <p className="mt-3">In my {yearsOfExp} years of experience as a Software Engineer, I have honed my proficiency in PHP development to deliver impactful solutions for businesses. Alongside my expertise in PHP, I possess a strong foundation in web development technologies such as HTML, CSS, and JavaScript. My skill set extends to frameworks like Laravel and Symfony, enabling me to architect robust and scalable web applications.</p>
                                    <p className="mt-3">Driven by a passion for innovation, I have a proven track record of developing user-friendly interfaces and optimizing backend functionalities to enhance overall system performance. Moreover, my experience with version control systems like Git and proficiency in database management with MySQL further bolster my capabilities as a Software Engineer.</p>
                                    <p className="mt-3">Additionally, I have a solid background in API development, crafting interfaces that facilitate seamless communication between different software systems. Furthermore, I excel in the role of Scrum Master, guiding cross-functional teams through the iterative development process with a deep understanding of Agile methodologies.</p>
                                </div>
                                <div className={"container mt-3"}>
                                    <div className={'d-flex justify-content-center'}>
                                        <div className={"m-3"}>
                                            <a href={'https://www.credly.com/badges/9a9fb0fe-e32c-420b-94a1-f196c5b635d3/linked_in_profile'}
                                                target={'_blank'} rel={'noreferrer'} className={'mt-4'}>
                                                <img
                                                    src={"https://images.credly.com/size/680x680/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png"}
                                                    alt={'PSM 1 certification'} className={cssClasses.certBadge} />
                                            </a>
                                        </div>
                                        <div className={"m-3"}>
                                            <a href={'https://www.credly.com/badges/5b420526-46c6-4d3f-85fd-9009496265fd/linked_in_profile'}
                                                target={'_blank'} rel={'noreferrer'} className={'mt-4'}>
                                                <img
                                                    src={"https://images.credly.com/size/680x680/images/0ab5b829-02ae-4a73-ac82-ab9798fb76e9/157a788a3a7d3880f574c2cdaf0b97d5.png"}
                                                    alt={'International academic qualification'} className={cssClasses.certBadge} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto animate__animated animate__fadeInDown mt-5" lg="4" md="6">
                                <Card className="card-coin card-plain">
                                    <CardHeader className={cssClasses.card_header_class + " text-center"}>
                                        <img
                                            alt="..."
                                            className="img-center img-fluid rounded-circle"
                                            style={{ width: '230px' }}
                                            src={require("../assets/img/profilepic.jpg").default}
                                        />
                                        <h4 className="mt-5"><strong>Contact Me</strong></h4>
                                    </CardHeader>
                                    <CardBody className="text-center mb-3">
                                        <ul className={cssClasses.contant_list + " m-0 p-0"}>
                                            <li>
                                                <h4><a href="tel:+639055629640"><FontAwesomeIcon
                                                    icon={faMobile} /> +639055629640</a></h4>
                                            </li>
                                            <li>
                                                <h4><a href="mailto:radiantcjuan@gmail.com"><FontAwesomeIcon
                                                    icon={faEnvelope} /> radiantcjuan@gmail.com</a></h4>
                                            </li>
                                            <li>
                                                <h4><a href="https://www.linkedin.com/in/radiant-juan-2b495391"
                                                    target="_blank" rel="noreferrer"><FontAwesomeIcon
                                                        icon={faLinkedin} /> radiant-juan-2b495391</a></h4>
                                            </li>
                                            <li>
                                                <h4><a href="https://github.com/radiantjuan" target="_blank"
                                                    rel="noreferrer"><FontAwesomeIcon
                                                        icon={faGithub} /> radiantjuan</a></h4>
                                            </li>
                                            <li className="pt-3">
                                                <a href={resume['resume.pdf'].default} className="btn btn-primary"
                                                    target="_blank" rel="noreferrer"><strong>REVIEW MY CV</strong></a>
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
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeu6kaQLH85IG-U2UDJbhX5FC87gsbTJ8gDQPAk2HhZ-uwzpA/viewform?usp=pp_url"
                                    target="_blank" rel="noreferrer" className="btn btn-primary btn-lg"><strong>INQUIRE
                                        NOW</strong></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Profile;