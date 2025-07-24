import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-between">
        <Course />
      </main>
      <Footer />
    </>
  );
}

export default Courses;
