import { useState } from "react";
import { Modal, Form, Button, FloatingLabel } from "react-bootstrap";

const AddDetails = ({ show, handleClose, addData, edit, details, did }) => {
  const [projectData, setProjectData] = useState(null);
  const [editData, setEditData] = useState(details);
  const [checked, setChecked] = useState(details && details.inProgress);

  const onChange = (e) => {
    if (!edit) {
      setProjectData({ ...projectData, [e.target.name]: e.target.value });
    } else {
      setEditData({ ...editData, [e.target.name]: e.target.value });
    }
  };

  const handleCheck = (e) => {
    let obj = editData;
    obj.inProgress = e.target.checked;
    setChecked(e.target.checked);
    setEditData(obj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!edit) {
      addData(projectData, null, edit);
      setProjectData(null);
    } else {
      addData(editData, did, edit);
    }
    handleClose("addDetailsModal");
  };

  return (
    <>
      <Modal show={show} onHide={() => handleClose("addDetailsModal")}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <h6>Add Project Details</h6>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Your Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  name="authorName"
                  onChange={onChange}
                  required
                  autoComplete="off"
                  value={edit ? editData.authorName : undefined}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Project Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Project Name"
                  name="projectName"
                  onChange={onChange}
                  required
                  autoComplete="off"
                  value={edit ? editData.projectName : undefined}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Short description of the project"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Short description of the project"
                  name="desc"
                  onChange={onChange}
                  required
                  autoComplete="off"
                  value={edit ? editData.desc : undefined}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Explain your project"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Explain your project"
                  name="description"
                  onChange={onChange}
                  required
                  autoComplete="off"
                  value={edit ? editData.description : undefined}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Required number of collaborators"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Required number of collaborators"
                  name="collaboratorsRequired"
                  onChange={onChange}
                  required
                  autoComplete="off"
                  value={edit ? editData.collaboratorsRequired : undefined}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Tech stack and skills required"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Tech stack and skills required"
                  name="techStack"
                  onChange={onChange}
                  required
                  autoComplete="off"
                  value={edit ? editData.techStack : undefined}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Type of the project (opensource/personal)"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Type of the project (opensource/personal)"
                  name="projectType"
                  onChange={onChange}
                  required
                  autoComplete="off"
                  value={edit ? editData.projectType : undefined}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={onChange}
                  required
                  autoComplete="off"
                  value={edit ? editData.email : undefined}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Linkedin profile url"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Linkedin profile url"
                  name="linkedin"
                  onChange={onChange}
                  autoComplete="off"
                  value={edit ? editData.linkedin : undefined}
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Phone number"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Phone number (optional)"
                  name="phoneNumber"
                  onChange={onChange}
                  autoComplete="off"
                  value={edit ? editData.phoneNumber : undefined}
                />
              </FloatingLabel>
            </Form.Group>
            {edit && (
              <Form.Group>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="In Progress"
                  name="inProgress"
                  checked={checked}
                  onChange={handleCheck}
                />
              </Form.Group>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddDetails;
