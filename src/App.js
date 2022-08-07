import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Blogs from "./routes/blogs/blogs.component";
import Experience from "./routes/experience/experience.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="experience" element={<Experience />} />
      </Route>
    </Routes>
  );
};

export default App;
