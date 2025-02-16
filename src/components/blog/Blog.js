// import React from "react";
// import Title from "../home/Title";
// import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
// import BlogCard from "./BlogCard";

// const Blog = () => {
//   return (
//     <div>
//       <Title title="Latest" subTitle="Posts" />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
//         <div className="px-6">
//           <BlogCard
//             image={blogImgOne}
//             title="September 16, 2020"
//             subTitle="UI & UX Conference at Lviv 2022"
//             category="Travel"
//           />
//           <BlogCard
//             image={blogImgTwo}
//             title="July 15, 2020"
//             subTitle="How to become a creative designer"
//             category="Documentation"
//           />
//           <BlogCard
//             image={blogImgThree}
//             title="July 14, 2020"
//             subTitle="Designers thoughts about mobile UI templates"
//             category="Travel"
//           />
//           <BlogCard
//             image={blogImgOne}
//             title="July 13, 2020"
//             subTitle="Designer Conference at Florida, USA 2020"
//             category="Documentation"
//           />
//         </div>
//         <div className="px-6">
//           <BlogCard
//             image={blogImgThree}
//             title="July 13, 2020"
//             subTitle="Designer Conference at Florida, USA 2020"
//             category="Documentation"
//           />
//           <BlogCard
//             image={blogImgTwo}
//             title="July 14, 2020"
//             subTitle="Designers thoughts about mobile UI templates"
//             category="Travel"
//           />
//           <BlogCard
//             image={blogImgOne}
//             title="September 16, 2020"
//             subTitle="UI & UX Conference at Lviv 2022"
//             category="Travel"
//           />
//           <BlogCard
//             image={blogImgThree}
//             title="September 16, 2020"
//             subTitle="UI & UX Conference at Lviv 2022"
//             category="Travel"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;
import React, { useEffect, useState } from "react";
import Title from "../home/Title";
import BlogCard from "./BlogCard";
import axios from "axios";

const Blog = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const options = {
        method: 'GET',
        url: 'https://dogapi.dog/api/v2/breeds',
        headers: { accept: 'application/json' }
      };

      try {
        const response = await axios.request(options);
        setBreeds(response.data.data); // Store breed data from API
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  return (
    <div>
      <Title title="Latest" subTitle="Dog Breeds" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10 px-6">
        {breeds.length > 0 ? (
          breeds.map((breed) => {
            const { name, description, life, male_weight, female_weight, hypoallergenic } = breed.attributes;

            return (
              <BlogCard
                key={breed.id}
                title={name} // Breed name
                description={description} // Breed description
                lifeSpan={`${life.min} - ${life.max}`} // Life span
                maleWeight={`${male_weight.min} - ${male_weight.max}`} // Male weight range
                femaleWeight={`${female_weight.min} - ${female_weight.max}`} // Female weight range
                hypoallergenic={hypoallergenic} // Hypoallergenic status
              />
            );
          })
        ) : (
          <p className="text-center col-span-2">Loading breeds...</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
