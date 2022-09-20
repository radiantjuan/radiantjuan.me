import React, { useState } from 'react';
import { Container, Col, Row, Card, CardBody, CardImg, CardFooter } from 'reactstrap';
import 'animate.css';
import ProjectModals from 'components/Views/MyProjects/ProjectModals';
import ProjectCardsInfoModel from '../models/ProjectCardsInfoModel';
import { Link, useParams } from 'react-router-dom';

const projectCardsInfo = ProjectCardsInfoModel.get_all_project_cards_info();
const MyProjects = props => {
    const params = useParams();
    let modalStateInit = false;
    let selectedStateInit = 0;
    if (params.id) {
        modalStateInit = true;
        selectedStateInit = params.id;
    }
    
    const [modalState, setModalState] = useState(modalStateInit);
    const [selectedProject, setSelectedProject] = useState(selectedStateInit);
    const toggleModalDemo = (id) => {
        setModalState(modalState ? false : true);
        setSelectedProject(id);
    }
    
    const projectsMap = projectCardsInfo.map((val, index) => {
        return (
            <Col xs={12} lg={4} className="mb-3 animate__animated animate__fadeInDown animate__delay-1s" key={index}>
                <Card className="h-100">
                    <CardImg style={{ width: '100%', borderRadius: '6px 6px 0 0' }} src={val.src} alt={val.caption} />
                    <CardBody>
                        <h4 className="text-info">{val.caption}</h4>
                        <p>
                            {val.short_description}
                        </p>
                    </CardBody>
                    <CardFooter className="text-right">
                        <Link to={/myprojects/+val.id} className="btn btn-secondary btn-sm" onClick={() => toggleModalDemo(val.id)}>View more</Link>
                    </CardFooter>
                </Card>
            </Col>
        )
    });

    return (
        <React.Fragment>
            <Container className="pt-4">
                <h2 className="text-info animate__animated animate__fadeInLeft">Projects</h2>
                <Row>
                    {projectsMap}
                </Row>
            </Container>
            <ProjectModals modalStateProps={modalState} selectedProject={selectedProject} toggleModalEvent={() => toggleModalDemo()} />
        </React.Fragment>
    )
}

export default MyProjects;