import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function PublicRoute({ children }) {
  const auth = getAuth();
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/home");
    }
  });

  return children;
}

export default PublicRoute;
