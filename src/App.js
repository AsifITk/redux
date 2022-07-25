import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./components/slices/themeSlice";

function App() {
  const { value } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className={"App " + value}>
      <Profile></Profile>
      <Login></Login>
      <button onClick={(e) => dispatch(toggleTheme())}> Toggle</button>
    </div>
  );
}

export default App;
