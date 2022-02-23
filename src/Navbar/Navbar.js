import "./Navbar.css";
import { signOut, getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthenticated } from "../redux/reducers/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authState);

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getDate() +
    " " +
    months[current_datetime.getMonth()] +
    " " +
    current_datetime.getFullYear();

  return (
    <div className='App'>
      <nav className='navbar navbar-light bg-light '>
        <span className='navbar-brand mb-0 h1 ms-3 fs-2'>
          <img
            src='https://img.icons8.com/color/48/000000/hexa.png'
            alt='logo'
            style={{ width: "35px" }}
          />
        </span>
        {user && (
          <div className='main'>
            <p className='date '>{formatted_date}</p>
            <div className='user me-3'>
              <h2>{user.displayName}</h2>
              <img src={user.photoURL} alt={user.name} />
            </div>
            <span
              className='signout h1 fs-2 me-3'
              onClick={() => {
                dispatch(setAuthenticated({}));
                signOut(auth);
                navigate("/");
              }}
            >
              <ion-icon name='log-out-outline'></ion-icon>
            </span>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
