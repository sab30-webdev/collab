import Navbar from "./Navbar/Navbar";
import Cards from "./Cards/Cards";
import SideBar from "./Sidebar/Sidebar";
import withFirebaseAuth from "react-with-firebase-auth";
import firebaseApp from "./firebase";
import firebase from "firebase/app";
import "./App.css";

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const App = ({ user, signOut, signInWithGoogle }) => {
  return (
    <>
      <Navbar signout={signOut} user={user} />
      {user ? (
        <div className="App-Bar">
          <Cards user={user} />
          <SideBar />
        </div>
      ) : (
        <div className="signin-button">
          <button
            type="button"
            className="btn btn-dark"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </button>
        </div>
      )}
    </>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
