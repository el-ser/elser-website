import { Routes, Route } from "react-router-dom";

import Contact from "./routes/contact/contact.component";
import Navigation from "./routes/navigation/navigation.component";
import Experience from "./routes/experience/experience.component";
import Blogs from "./routes/blogs/blogs.component";
import About from "./routes/about/about.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
