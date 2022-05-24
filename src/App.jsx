import { useContext } from "react";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Project from "./components/project/Project";
import { ThemeContext } from "./context";
import Toggle from "./components/toggle/Toggle";
import { ThemeProvider } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ backgroudColor: "red" }}>
      <Nav />
      <Home />
      <Blog />
      <About />
      <Project />
    </div>
  );
};

export default App;
