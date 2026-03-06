import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl bg-white flex flex-col md:flex-row gap-10">

        {/* Left Side Text */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Mission of A OICA Institute
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-left">
              Our mission is to provide quality computer education and practical
              skills to students so they can succeed in the modern digital world.
              We aim to train students in courses like PGDCA, DCA, Tally, C
              Programming, Spoken English, and Microsoft Office (Word, Excel,
              PowerPoint).
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-left">
              We focus on building strong technical knowledge, communication
              skills, and confidence so that students can get good job
              opportunities or become successful professionals in the IT field.
              Our goal is to make technology education simple, affordable, and
              accessible for everyone while helping students grow personally
              and professionally.
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_70TWOWp90AF5S4j81k3vwlNU2WPC_jn4_A&s"
            alt="OICA Logo"
            className="rounded-full w-[350px] h-[350px] object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default About;