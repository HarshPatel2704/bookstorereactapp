import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import Home from "./home/Home";

function App() {
  return (
    <div>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/course" element={<Courses />} /> */}
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/contact" element={<Contactus />} /> */}
        </Routes>
        <Toaster />
      </div>
    </div>
  )
}

export default App
