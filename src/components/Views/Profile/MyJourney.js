import React from 'react';
import {
    Card,
    CardHeader,
    Col,
    CardBody
} from 'reactstrap';

const MyJourney = () => {
    return (
        <React.Fragment>
            <Col xs={12} lg={3}>
                <Card className="animate__animated animate__fadeInDown animate__delay-1s">
                    <CardHeader>
                        <h4 className="m-0">
                            Diversify (Temple and Webster client) - <span className="text-primary">Full-stack Engineer</span>
                        </h4>
                        <p>
                            <small className="text-muted">Taguig, Philippines</small><br />
                            <small className="text-muted">JANUARY 25, 2021 - PRESENT</small>
                        </p>
                    </CardHeader>
                    <CardBody>
                        <p>
                            With the position of Full-stack Engineer, I handle the development, implementation, management, optimization and continuous improvement of the Temple And Webster online furniture shop based in Australia.
                        </p>
                    </CardBody>
                </Card>
            </Col>
            <Col xs={12} lg={3}>
                <Card className="animate__animated animate__fadeInDown animate__delay-1s">
                    <CardHeader>
                        <h4 className="m-0">
                            Microsourcing (HungryHungry client) - <span className="text-primary">PHP Developer</span>
                        </h4>
                        <p>
                            <small className="text-muted">Pasig, Philippines</small><br />
                            <small className="text-muted">MAY 15, 2017 - JANUARY 22, 2021</small>
                        </p>
                    </CardHeader>
                    <CardBody>
                        <p>
                            Back-end developer of Ordermate Online website, an online ordering multi-site application where merchant can freely self-manage their content for their online ordering site section,Ordermate Online is owned by an Australian Company based in Melbourne named Ordermate
                            I do the back end development, API integration, third party app integration, server configuration for Ordermate Online and all back-end related.
                        </p>
                    </CardBody>
                </Card>
            </Col>
            <Col xs={12} lg={3}>
                <Card className="animate__animated animate__fadeInDown animate__delay-1s">
                    <CardHeader>
                        <h4 className="m-0">
                            IBM (ABS-CBN Induction Project) - <span className="text-primary">Web Applications Developer</span>
                        </h4>
                        <p>
                            <small className="text-muted">Quezon City, Philippines</small><br />
                            <small className="text-muted">SEPTEMBER 2015 - APRIL 2017</small>
                        </p>
                    </CardHeader>
                    <CardBody>
                        <ul>
                            <li>
                                Transitioned from ABS-CBN to IBM
                            </li>
                            <li>
                                Web developer for IBM’s ABS-CBN induction deck project
                            </li>
                            <li>
                                Responsible for back-end development for all the websites of ABS-CBN’s TV network
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
            <Col xs={12} lg={3}>
                <Card className="animate__animated animate__fadeInDown animate__delay-1s">
                    <CardHeader>
                        <h4 className="m-0">
                            Affinity X - <span className="text-primary">Web Developer</span>
                        </h4>
                        <p>
                            <small className="text-muted">Quezon City, Philippines</small><br />
                            <small className="text-muted">SEPTEMBER 2014 - SEPTEMBER 2015</small>
                        </p>
                    </CardHeader>
                    <CardBody>
                        <ul>
                            <li>
                                Web Developer and Designer
                            </li>
                            <li>
                                Email Marketing Advertisements Designer
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default MyJourney;