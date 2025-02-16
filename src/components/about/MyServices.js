import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I provide web development services focused on building responsive, mobile-friendly websites. My work emphasizes clean code, scalable architecture, and seamless user experiences, ensuring optimized performance and accessibility across all devices."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="I offer web design services focused on creating responsive, visually appealing, and user-friendly interfaces. My designs prioritize accessibility, modern aesthetics, and seamless functionality across devices, ensuring a balanced and optimized user experience."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="I offer mobile development services to create responsive, user-friendly applications for iOS and Android. My focus is on delivering seamless, high-performance apps with intuitive interfaces and optimized functionality, ensuring an excellent user experience on all mobile devices."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="I provide SEO services designed to enhance your website's visibility and ranking on search engines. My approach includes optimizing content, improving site structure, and implementing best practices to drive organic traffic and ensure a strong online presence."
      />
    </div>
  );
};

export default MyServices;
