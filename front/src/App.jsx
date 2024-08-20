import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import {
  Landing,
  About,
  Carrer,
  Industry,
  Product,
  Blog,
  Contact,
} from "./components/screens";
import axios from "axios";
import { Error404, FullBlog } from "./components/pages";
import { useEffect, useState } from "react";
import Preloader from "./components/preloader/Preloader";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Landing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/carrer" element={<Carrer />} />
                <Route path="/product" element={<Product />} />
                <Route path="/industry" element={<Industry />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/full-blog" element={<FullBlog />} />
              </Route>
              <Route path="/*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
