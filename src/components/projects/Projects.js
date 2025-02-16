import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-rows-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Chat Application"
            category="Tech"
            image="• Developed real-time chat application project which aims to showcase the integration of Socket.io, Express.js, and SQL for creating a dynamic and interactive communication platform. Users can securely authenticate. engage in real-time conversations, and access chat history,"
            image2="• Tech stack: Socket.io, Express.js, SQL, HTML, CSS, DOM, Rest APIs"
          />
          <ProjectsCard
            title="Goods Selling Store"
            category="Tech"
            image="• This application project aims to provide users with a seamless platform for selling and buying goods. By utilizing Express.js for the backend and SQL for data storage, the application ensures a secure and efficient experience. Sellers can post new items for sale or and buyer can browse for purchases and purchase items"
            image2="• Tech stack: Express js, SQL, Rest APIs, HTML, CSS, DOM"
          />
          <ProjectsCard
            title="Social Media Marketing"
            category="Tech"
            image="• This social media platform project aims to create a vibrant and engaging space for users to connect and share content. By utilizing Express.js for the backend and Mongodb for data storage. Users can post updates or exploring other users post on the home page, the project highlights the integration of technologies to build a dynamic social media platform"
            image2="• Tech stack: Express JS, Mongo db, HTML, CSS, JS, Rest APIs"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
