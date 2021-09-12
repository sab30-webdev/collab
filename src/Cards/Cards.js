import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTotal, setAvailable } from "../redux/stateSlice";
import { db } from "../firebase";
import Card from "./Card";
import "./Cards.css";

const Cards = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    function fetchData() {
      db.collection("projects")
        .get()
        .then((snapshot) => {
          let list = [];
          let availableNumberOfProjects = 0;
          snapshot.forEach((doc) => {
            if (doc.data().available) {
              availableNumberOfProjects += 1;
            }
            list.push({ ...doc.data(), id: doc.id });
          });
          setProjects(list);
          dispatch(setTotal(list.length));
          console.log();
          dispatch(setAvailable(availableNumberOfProjects));
        });
    }
    fetchData();
  }, [refresh, dispatch]);

  const addData = async (data, did, edit) => {
    let newData = {
      ...data,
      img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
      uid: user.uid,
    };
    if (!data.hasOwnProperty("available")) {
      newData.available = true;
    }
    if (edit) {
      await db.collection("projects").doc(did).delete();
    }
    await db.collection("projects").add(newData);
    setRefresh(!refresh);
  };

  async function removeData(did) {
    if (window.confirm("Do you want to remove this project?")) {
      await db.collection("projects").doc(did).delete();
      setRefresh(!refresh);
    }
  }

  return (
    <div className="container mx-auto m-5">
      <h2 className="ms-3" style={{ display: "inline" }}>
        Projects
      </h2>
      <div className="search-div">
        <p
          className="ms-3 my-0 all-tab"
          style={{ position: "relative", top: "16px", cursor: "pointer" }}
        >
          All
        </p>
        <input
          className="form-control float-end w-25"
          type="search"
          placeholder="Search by project name"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr className="mt-0" />
      <div className="row">
        {projects
          .filter((val) =>
            val.projectName.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((p, idx) => (
            <Card
              projectName={p.projectName}
              authorName={p.authorName}
              desc={p.desc}
              img={p.img}
              details={p}
              user={user}
              key={idx}
              did={p.id}
              removeData={removeData}
              addData={addData}
            />
          ))}
        <Card addData={addData} />
      </div>
    </div>
  );
};

export default Cards;
