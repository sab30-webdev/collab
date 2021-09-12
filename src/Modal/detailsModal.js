import { Modal } from "react-bootstrap";

const ProjectDetails = ({ show, details, handleClose }) => {
  return (
    <Modal show={show} onHide={() => handleClose("detailsModal")}>
      <Modal.Header closeButton>
        <h3>Project Details</h3>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>What we build</strong> : {details.description}
        </p>
        <p>
          <strong>Number of collaborators required</strong> :{" "}
          {details.collaboratorsRequired}
        </p>
        <p>
          <strong>TechStack</strong> : {details.techStack}
        </p>
        <p>
          <strong>Project Type</strong> : {details.projectType}
        </p>
        <div>
          <h4>Contact :-</h4>
          {details.phoneNumber && (
            <p>
              <strong>Phone</strong> : {details.phoneNumber}
            </p>
          )}
          {details.linkedin && (
            <a href={details.linkedin}>
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
          )}
          <a href={`mailto:${details.email}.com`}>
            <img
              src="https://img.icons8.com/fluent/48/000000/gmail-new.png"
              alt="email"
            />
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectDetails;
