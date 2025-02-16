import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="Tech"
          title="Full Stack Developer"
          subTitle="Tecnod8 AI"
          des="At Tecnod8, I worked as a Full Stack Developer, focusing on both front-end and back-end development. On the back end, I used Next.js and Node.js to build scalable, server-side applications, while leveraging React on the front end for creating dynamic user interfaces. I developed and integrated APIs, focusing on performance and security. Without involving databases, I worked closely with teams to ensure seamless project delivery, troubleshooting technical challenges, and optimizing the overall application architecture."
        />
        <ResumeCard
          badge="Tech"
          title="Front-end Developer"
          subTitle="Wisho"
          des="At WishO, I worked as a Frontend Developer, specializing in building responsive and dynamic user interfaces. I used React.js for creating interactive components, Tailwind CSS for rapid styling and design, and Flexbox for layout management. My focus was on delivering clean, maintainable code and ensuring optimal performance across different devices. I collaborated with designers and backend developers to ensure seamless integration and user experience, while solving technical challenges related to UI responsiveness and styling."
        />
        <ResumeCard
          badge="Tech"
          title="Frontend Developer"
          subTitle="Gadgets Reborn"
          des="At Gadgets Reborn, I worked as a Frontend Developer, focusing on creating responsive and visually appealing web interfaces. I used React.js, Tailwind CSS, and Flexbox to build user-friendly layouts, and collaborated closely with designers using Figma for pixel-perfect design implementations. My responsibilities included ensuring smooth performance across devices, maintaining design consistency, and optimizing the front-end for scalability. I addressed challenges related to responsiveness and performance, delivering high-quality web applications that met project goals."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2020-2021"
          title="12th Board"
          subTitle="St.Joseph School,Varanasi"
          des="Passed 12th board exam with 76% marks"
        />
        <ResumeCard
          badge="2018-2019"
          title="10th Board"
          subTitle="Sri Gurunanak Public School"
          des="Passed 10th board with 76% marks"
        />
        <ResumeCard
          badge="2021-2025"
          title="Btech. in computer science and engineering"
          subTitle="Newtown,Kolkata"
          des="in 7th semester with a score of 6 cgpa"
        />
      </div>
    </div>
  );
};

export default Education;
