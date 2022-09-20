import React, { useEffect, useState } from 'react';
import { ModalBody, ModalFooter, Modal, Button, Row, Col, UncontrolledCarousel } from 'reactstrap';
import cssClasses from './ProjectModals.module.scss';
import ProjectDescriptionModel from 'models/ProjectDescriptionModel';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectModals = props => {
    const [sliderImages, setSliderImages] = useState(0);
    const [title, setTitle] = useState(0);
    const [workDescription, setWorkDescription] = useState(0);

    useEffect(() => {
        if (props.modalStateProps) {
            const ProjectDescription = ProjectDescriptionModel.get_project_detail(props.selectedProject);
            const responsibilities = ProjectDescription[0].work_description.responsibilities.map((val, index) => {
                return (
                    <li className="text-default" key={index}>{val}</li>
                );
            })
            setTitle(ProjectDescription[0].title);
            setWorkDescription(
                <React.Fragment>
                    <div className="text-default">
                        <strong>Project Link: </strong>
                        <a href={ProjectDescription[0].url} target="_blank" rel="noreferrer">&nbsp;<FontAwesomeIcon icon={faExternalLinkAlt} /> {ProjectDescription[0].url}</a>
                    </div>
                    <div className="text-default">
                        <strong>Work Type: </strong>
                        <span>{ProjectDescription[0].work_description.work_type}</span>
                    </div>
                    <div>
                        <strong>Responsibilities: </strong>
                        <ul>
                            {responsibilities}
                        </ul>
                    </div>
                </React.Fragment>
            );
            setSliderImages(<UncontrolledCarousel items={ProjectDescription[0].slider_images} />);
        }
    }, [props.modalStateProps, props.selectedProject]);

    return (
        <React.Fragment>
            <Modal isOpen={props.modalStateProps} size="lg" className={cssClasses.modal_position}>
                <div className="modal-header">
                    <h3 className="modal-title text-info" id="exampleModalLabel">
                        {title}
                    </h3>
                    <Link
                        type="button"
                        data-dismiss="modal"
                        aria-hidden="true"
                        onClick={() => props.toggleModalEvent()}
                        tag={Link} to="/myprojects"
                    >
                        <i className="tim-icons icon-simple-remove" />
                    </Link>
                </div>
                <ModalBody>
                    <Row>
                        <Col>
                            {sliderImages}

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {workDescription}
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => props.toggleModalEvent()} tag={Link} to="/myprojects">
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    )
}

export default ProjectModals;