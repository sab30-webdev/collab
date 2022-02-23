import Navbar from "./Navbar/Navbar";
import Cards from "./Cards/Cards";
import SideBar from "./Sidebar/Sidebar";
import { init } from "./firebase";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import ProtectedRoute from "./AuthRoute/ProtectedRoute";
import PublicRoute from "./AuthRoute/PublicRoute";
import { useEffect } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {
  init();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const usersRef = await doc(db, "users", user.uid);
        setDoc(usersRef, {});
      }
    });
  }, [auth]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='home'
          element={
            <ProtectedRoute>
              <div className='App-Bar'>
                <Cards />
                <SideBar />
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
