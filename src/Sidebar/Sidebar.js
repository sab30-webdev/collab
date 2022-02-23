import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import stats from "../assets/stats.gif";
import "./Sidebar.css";
import { collection, getDocs } from "firebase/firestore";

const SideBar = () => {
  const { total, inProgress } = useSelector((state) => state.sidebarState);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    getCount();
    async function getCount() {
      const usersRef = collection(db, "users");
      const docsSnap = await getDocs(usersRef);
      setUsers(docsSnap.docs.length);
    }
    return () => {
      setUsers(0);
    };
  }, []);

  return (
    <div className='Sidebar-Container'>
      <div className='mt-4 mx-3'>
        <h3 className='fw-bold'>Collab</h3>
        <p className='text-muted fw-normal m-0'>
          Create/Find your team to build projects
        </p>
      </div>
      <hr style={{ marginTop: "60px" }} />
      <div className='text-center'>
        <p className='stats fw-bold me-4'>STATS</p>
        <img src={stats} alt='stats' className='stats' />
      </div>
      <div className='box-parent'>
        <div className='item-0 box'>
          <p className='text-muted'>Total Projects</p>
          <h4>{total}</h4>
        </div>
        <div className='item-1 box'>
          {" "}
          <p className='text-muted'>Available/In Progress</p>
          <h4>{inProgress}</h4>
        </div>
        <div className='item-2 box'>
          {" "}
          <p className='text-muted'>Completed</p>
          <h4>{total - inProgress}</h4>
        </div>
        <div className='item-3 box'>
          {" "}
          <p className='text-muted'>User Count</p>
          <h4>{users}</h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
