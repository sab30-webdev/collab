import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setAuthenticated } from "../redux/reducers/authSlice";
import { useDispatch } from "react-redux";

function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      navigate("/");
    } else {
      const { uid, displayName, photoURL } = user;
      dispatch(setAuthenticated({ uid, displayName, photoURL }));
    }
  });

  return children;
}

export default ProtectedRoute;
