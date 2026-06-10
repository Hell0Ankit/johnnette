import { Routes, Route } from "react-router-dom";
import JF_4 from "./Pages/JF_4";
import JF_2 from "./Pages/JF_2";
import JM_1 from "./Pages/JM_1";
import Home from "./Pages/Home";
import Space from "./Pages/Space";
import About from "./Pages/About";
import Career from "./Pages/Career/Career";
import JobDetail from "./Pages/Career/JobDetail";
import Contact from "./Pages/Contact";
import AccoladesCertifications from "./Pages/AccoladesCertifications";
import Policy from "./Pages/Policy";
import Cookies from "./Pages/Cookies";
import Terms from "./Pages/Terms";
import CodeEthics from "./Pages/CodeEthics";
import Post from "./Pages/blog/Post";
import PostDetail from "./Pages/blog/PostDetail";
import News from "./Pages/news/News";
import NotFound from "./Pages/NotFound/NotFound";







const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jf4" element={<JF_4 />} />
        <Route path="/jf2" element={<JF_2 />} />
        <Route path="/jm1" element={<JM_1 />} />
        <Route path="/space" element={<Space/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/career" element={<Career/>} />
        <Route path="/career/:id" element={<JobDetail />} />

        <Route path="/blogs" element={<Post/>} />
        <Route path="/blogs/:id" element={<PostDetail/>} />
        <Route path="*" element={<NotFound />} />

        
        <Route path="/contact" element={<Contact/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/accolades-and-certifications" element={<AccoladesCertifications/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/cookies" element={<Cookies/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/code-ethics" element={<CodeEthics/>} />

      </Routes>
    </div>
  )
}

export default App

