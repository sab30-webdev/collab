import { useSelector } from "react-redux";
import stats from "../assets/stats.gif";
import "./Sidebar.css";

const SideBar = () => {
  const { total, available } = useSelector((state) => state.state);
  // const [t, setT] = useState(total);

  // useEffect(() => {
  //   async function fetch() {
  //     const ref = await db
  //       .collection("global")
  //       .doc("Oz9IjNO2VY8hHYeETy4H")
  //       .get();
  //     const total = ref.data().total;
  //     setTotal(total);
  //   }
  //   fetch();
  // }, []);

  return (
    <div className="Sidebar-Container">
      <div className="mt-4 mx-3">
        <h3 className="fw-bold">Collab</h3>
        <p className="text-muted fw-normal m-0">
          Find the right project that suits you
        </p>
      </div>
      <hr style={{ marginTop: "60px" }} />
      <div className="text-center">
        <p className="stats fw-bold me-4">STATS</p>
        <img src={stats} alt="stats" className="stats" />
      </div>
      <div className="box-parent">
        <div className="item-0 box">
          <p className="text-muted">Total Projects</p>
          <h4>{total}</h4>
        </div>
        <div className="item-1 box">
          {" "}
          <p className="text-muted">Available/In Progress</p>
          <h4>{available}</h4>
        </div>
        <div className="item-2 box">
          {" "}
          <p className="text-muted">Completed</p>
          <h4>{total - available}</h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
