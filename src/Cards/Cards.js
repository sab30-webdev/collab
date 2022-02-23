import { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  deleteDoc,
  doc,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { setTotal, setInProgress } from "../redux/reducers/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { Spinner } from "react-bootstrap";
import "./Cards.css";

const Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllCards, setShowAllCards] = useState(false);
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const { user } = useSelector((state) => state.authState);

  useEffect(() => {
    function fetchData() {
      const colRef = collection(db, "projects");
      const ref = query(colRef, orderBy("createdAt", "desc"));
      onSnapshot(ref, (snapshot) => {
        const list = [];
        let availableNumberOfProjects = 0;
        snapshot.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
          if (doc.data().inProgress) {
            availableNumberOfProjects += 1;
          }
        });
        setProjects(list);
        dispatch(setTotal(list.length));
        dispatch(setInProgress(availableNumberOfProjects));
      });
    }
    fetchData();
  }, [dispatch]);

  const addData = async (data, did, edit) => {
    let newData = {
      ...data,
      img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
      uid: user.uid,
      createdAt: new Date(),
    };
    if (!data.hasOwnProperty("inProgress")) {
      newData.inProgress = true;
    }
    if (edit) {
      deleteDoc(doc(db, "projects", did));
    }
    addDoc(collection(db, "projects"), newData);
  };

  async function removeData(did) {
    deleteDoc(doc(db, "projects", did));
  }

  return (
    <>
      <div className='container mx-auto mt-4 m-5'>
        <h2 className='ms-3' style={{ display: "inline" }}>
          Projects
        </h2>
        <div className='search-div' style={{ marginTop: "1rem" }}>
          <p
            className='ms-3 my-0 all-tab'
            onClick={() => setShowAllCards(true)}
          >
            All
          </p>
          <p
            className='ms-3 my-0 all-tab'
            onClick={() => setShowAllCards(false)}
          >
            InProgress
          </p>
          <input
            className='form-control float-end w-25'
            type='search'
            placeholder='Search by project name'
            aria-label='Search'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <hr className='mt-0' />
        <div className='cards-parent'>
          {projects.length !== 0 ? (
            <div className='row'>
              {projects
                .filter((val) => {
                  return showAllCards
                    ? val.projectName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    : val.inProgress === true;
                })
                .map((p) => (
                  <Card
                    projectName={p.projectName}
                    authorName={p.authorName}
                    desc={p.desc}
                    img={p.img}
                    details={p}
                    user={user}
                    key={p.id}
                    did={p.id}
                    removeData={removeData}
                    addData={addData}
                  />
                ))}
              <Card addData={addData} />
            </div>
          ) : (
            <Spinner animation='grow' className='spinner' />
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
