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
          title="Frontend Developer (Freelance / Contract)"
          subTitle="HYVE AI LABS"
          des="Collaborated with cross-functional teams to develop and integrate RESTful APIs, ensuring seamless communication between frontend and backend systems. Built a centralized Axios instance with request and response interceptors, enabling automatic access-token attachment and refresh-token–based reauthentication on 401 errors. Implemented a dynamic XML sitemap in Next.js with runtime generation and fail-safe API handling to improve scalable SEO indexing. Enhanced application performance by developing a debounced search bar to reduce redundant API calls and implemented a refresh state flag using React to trigger data re-fetching after API mutations. Configured hosting, environment variables, and build processes to optimize production performance and reliability. Developed SEO-friendly applications with clean URLs, semantic routing, and improved crawlability, and deployed Next.js applications on a Node.js environment using cPanel for smooth server-side rendering and routing. Followed best practices in coding, security, and documentation while contributing to live production projects including gulf.deals, truval.ae, portal.gulf.deals, and parking24.ae."
        />
        <ResumeCard
          badge="Tech"
          title="Full Stack Practitioner"
          subTitle="ONE BILLION IDEAS"
          des="Developed and maintained scalable web applications using React for the frontend, ensuring high performance and maintainability. Followed React best practices including reusable components, custom hooks, efficient state management, and performance optimization techniques. Structured applications with a clean and modular folder architecture, improving code readability, scalability, and long-term maintainability."
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
          subTitle="Sister Nivedita University, Kolkata"
          des="Passed my btech with 6.26 CGPA Batch(2025)"
        />
      </div>
    </div>
  );
};

export default Education;
