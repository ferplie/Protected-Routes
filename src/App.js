import {
  Routes,
  Route,
  renderMatches,
  Outlet,
  useParams,
  useOutletContext,
} from "react-router-dom";
import Nav from "./Nav";
import ProtectedRoutes from "./ProtectedRoutes";
import Openpage from "./Openpage";
function App() {
  return (
    <div>
      <header>
        <h1>React Router v6</h1>
      </header>
      <Nav />
      <Routes>
        <Route path="/" element={<Openpage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/users" element={<Users />}>
            <Route path=":id" element={<User />} />
            <Route path="me" element={<UserMe />} />
          </Route>
        </Route>

        <Route path="*" element={<Dunno />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}
function Users() {
  return (
    <>
      <h2>This is users</h2>
      <Outlet context={{ timmy: Date.now() }} />
    </>
  );
}
function UserMe() {
  const context = useOutletContext();
  const timmy = context ? context.timmy : "";
  return (
    <div>
      <h2>This is all about me</h2>
      <p>The timmy data is: {timmy}.</p>
    </div>
  );
}
function User() {
  const { id } = useParams();
  return <h2>This is user {id}</h2>;
}
function Dunno() {
  return <h2>Page not found. Error 404</h2>;
}

export default App;
