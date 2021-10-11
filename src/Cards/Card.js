import { useState } from "react";
import { Button } from "react-bootstrap";
import ProjectDetails from "../Modal/detailsModal";
import AddDetails from "../Modal/addModal";
import EditDetails from "../Modal/addModal";
import plus from "../assets/plus.gif";
import "./Card.css";

const Card = ({
  projectName,
  authorName,
  desc,
  img,
  details,
  addData,
  user,
  removeData,
  did,
}) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleShow = (d) => {
    if (d === "detailsModal") {
      setShowDetailsModal(true);
    } else if (d === "addDetailsModal") {
      setShowAddModal(true);
    }
  };

  const handleClose = (d) => {
    if (d === "detailsModal") {
      setShowDetailsModal(false);
    } else if (d === "addDetailsModal") {
      setShowAddModal(false);
    }
  };

  return projectName ? (
    <div className="col-sm-4 ">
      <div className="card m-2 max-auto">
        {user.uid === details.uid ? (
          <div>
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleShow("addDetailsModal")}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn-close p-2 remove-card"
              aria-label="Close"
              onClick={() => removeData(did)}
            ></button>
          </div>
        ) : (
          <div style={{ width: "100%", height: "37.685px" }}></div>
        )}
        <img
          className="card-img-top image--cover mx-auto"
          alt="profile"
          src={img}
        />
        <div className="card-block">
          <h4 className="card-title text-center">{projectName}</h4>
          <p className="card-text text-center">
            <small className="text-muted">By {authorName}</small>
          </p>
          <hr />
          <p className="card-text pos text-center p-1 mb-3 fw-bold text-muted">
            {desc}
          </p>
        </div>
        <div className="text-center d-grid gap-2">
          <Button
            variant="outline-success"
            onClick={() => handleShow("detailsModal")}
          >
            Interested
          </Button>
        </div>
      </div>
      <ProjectDetails
        show={showDetailsModal}
        details={details}
        handleClose={handleClose}
      />
      <EditDetails
        edit={true}
        show={showAddModal}
        handleClose={handleClose}
        details={details}
        addData={addData}
        did={did}
      />
    </div>
  ) : (
    <div className="col-sm-4 center-plus">
      <div onClick={() => handleShow("addDetailsModal")}>
        <img className="plus" src={plus} alt="add" />
      </div>
      <AddDetails
        edit={false}
        show={showAddModal}
        handleClose={handleClose}
        addData={addData}
        details={null}
        did={null}
      />
    </div>
  );
};

export default Card;
