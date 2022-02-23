import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  function googleSignIn() {
    signInWithPopup(auth, provider).then((result) => {
      if (result.user) {
        navigate("/home");
      }
    });
  }

  return (
    <div className='signin-button'>
      <button type='button' className='btn btn-dark' onClick={googleSignIn}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
