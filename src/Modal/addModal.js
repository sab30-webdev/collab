import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddDetails = ({ show, handleClose, addData, edit, details, did }) => {
  const [projectData, setProjectData] = useState(null);
  const [editData, setEditData] = useState(details);
  const [state, setState] = useState(
    details !== null ? details.available : true
  );

  const onChange = (e) => {
    if (!edit) {
      setProjectData({ ...projectData, [e.target.name]: e.target.value });
    } else {
      setEditData({ ...editData, [e.target.name]: e.target.value });
    }
  };

  const handleChange = (e) => {
    let obj = editData;
    if (e.target.value === "true") {
      obj.available = true;
    } else {
      obj.available = false;
    }
    setState(e.target.value);
    setEditData(obj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!edit) {
      addData(projectData, null, edit);
      setEditData(null);
    } else {
      addData(editData, did, edit);
    }
    handleClose("addDetailsModal");
    setProjectData(null);
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
              <Form.Control
                type="text"
                placeholder="Your Name"
                name="authorName"
                onChange={onChange}
                required
                autoComplete="off"
                value={edit ? editData.authorName : undefined}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Project Name"
                name="projectName"
                onChange={onChange}
                required
                autoComplete="off"
                value={edit ? editData.projectName : undefined}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Short description of the project"
                name="desc"
                onChange={onChange}
                required
                autoComplete="off"
                value={edit ? editData.desc : undefined}
              />
            </Form.Group>
            <Form.Group className="mb-3">
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
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Required number of collaborators"
                name="collaboratorsRequired"
                onChange={onChange}
                required
                autoComplete="off"
                value={edit ? editData.collaboratorsRequired : undefined}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Tech stack and skills required"
                name="techStack"
                onChange={onChange}
                required
                autoComplete="off"
                value={edit ? editData.techStack : undefined}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Type of the project (opensource/personal)"
                name="projectType"
                onChange={onChange}
                required
                autoComplete="off"
                value={edit ? editData.projectType : undefined}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChange}
                required
                autoComplete="off"
                value={edit ? editData.email : undefined}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Linkedin profile url (optional)"
                name="linkedin"
                onChange={onChange}
                autoComplete="off"
                value={edit ? editData.linkedin : undefined}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Phone number (optional)"
                name="phoneNumber"
                onChange={onChange}
                autoComplete="off"
                value={edit ? editData.phoneNumber : undefined}
              />
            </Form.Group>
            {edit && (
              <Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleChange}
                  value={state}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Form.Select>
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
