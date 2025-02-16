import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Mridul Mittal</h2>
          <p className="text-base leading-6 ">
          I am a Full Stack Developer who emphasizes building mobile-compatible, responsive web applications that provide a seamless user experience across devices. Committed to following best practices in development, I ensure clean, maintainable code and scalable architectures. With a focus on performance optimization and user accessibility, I consistently deliver applications that are efficient, reliable, and adaptable to evolving needs.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            20
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Kolkata
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Newtown,Kolkata
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
