import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
  useNavigate,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
// import routes from "./routes";
import NotFound from "./components/NotFound";
import About from "./components/About";

function App() {
  // const content = useRoutes(routes);
  // const navigate = useNavigate();

  // const location = window.location.origin;
  // console.log("location", location);

  // const restoreOriginalUri = (originalUri) => {
  //   navigate(originalUri || "/", window.location.origin);
  // };

  return (
    <>
      {/* <NavigationBar /> */}
      {/* <div restoreOriginalUri={restoreOriginalUri}>{content}</div> */}

      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/'>dfsdfs</Route>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
