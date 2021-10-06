import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css";
import UsersList from "./Pages/UsersList";
import Error from "./Pages/Error";
import AddUser from "./Pages/AddUser";
import Footer from "./Components/Footer";
import UserCard from "./Components/UserCard";

function App() {
  return (
    <div>
      <Navbar />
      {/* <UserCard /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UsersList} />
        <Route path={["/addUser", "/editUser/:_id"]} component={AddUser} />
        <Route path="/*" component={Error} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
