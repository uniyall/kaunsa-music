import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { setUser, removeUser } from "./utils/state/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //signin / signup
        console.log(user);
        const { uid, displayName, email } = user;
        dispatch(
          setUser({
            uid,
            displayName,
            email,
          })
        );
      } else {
        // logged out
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div className="relative">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
