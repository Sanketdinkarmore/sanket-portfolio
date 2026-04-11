import Sidebar from './components/Sidebar';
import ProfileHeader from './components/Header';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import GeometricSBackground from './components/GeometricS';
import About from './components/sections/About';
import Blog from './components/sections/Blogs';
import { Routes, Route, Navigate } from "react-router-dom";
import BlogPost from "./components/BlogPosts";
import { MobileSidebar } from './components/MobileSideBar';

function App() {
  return (
    <div className="min-h-screen bg-[#1d1e24]">
      <GeometricSBackground />

      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <MobileSidebar />
      </div>

      <div className="md:hidden h-[68px]" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-12">
        <ProfileHeader />

        <div className="mt-6 flex flex-col md:flex-row gap-6">

          <div className="hidden md:block w-[150px] shrink-0">
            <div className="sticky top-10">
              <Sidebar />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-[#23262b] rounded-2xl border border-white/[0.08] min-h-[500px] relative overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">

              <div className="w-full h-full p-4 md:p-6">
                <Routes>
                  <Route path="/" element={<Navigate to="/resume" />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;