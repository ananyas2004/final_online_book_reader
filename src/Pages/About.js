// import React from "react";
// import "./About.css";
// import { Outlet } from "react-router-dom";

// const AboutUs = () => {
//   return (
//     <>

//       <div className="about-us">
//       <div className="content">
//           <h1>Unleash Your Inner Bookworm</h1>
//           <p>
//             ℝ𝔼𝔸𝔻𝔼𝔸𝕊𝕐 is your one-stop shop for diving into the worlds created by your favorite authors. Whether you're a seasoned bibliophile or just starting your literary journey, our expansive library offers a vast selection of ebooks to cater to every taste. From heart-pounding thrillers to captivating classics, Readeasy makes it easy to find the perfect book to curl up with.
//           </p>
//           <p>
//             Our team is composed of dedicated individuals who share a passion for
//             books and technology. We work tirelessly to ensure that our users
//             have the best reading experience possible.The Readeasy team is a tireless
//             bunch. We're dedicated to crafting a reading experience that surpasses expectations. 
//             Whether it's meticulously optimizing font rendering for maximum readability, coding 
//             intuitive navigation features, or staying up late brainstorming innovative ways to personalize 
//             your reading journey – we're constantly innovating and refining. We believe the details matter, 
//             and our dedication ensures that every page turn on Readeasy is a smooth and delightful one.
//           </p>
//         </div>
//         <div className="Sundarta">
//         <img src="https://ideogram.ai/assets/image/list/response/4ndM6IcJQFOZuCAcY36lXA" alt="image"></img>
       
//         </div>
//         <Outlet/>
//       </div>
//   </>
//   );
// };

// export default AboutUs;



     

  




import React from 'react';
import "./About.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="container">
      <section className="hero-section">
        {/* Text directly on background image */}
        <h1 className="single-line">Unleash Your Inner Bookworm</h1>
        <p className="description">
          {/* Millions of ebooks, personalized recommendations, and a vibrant book community. */}
        </p>
        </section>

     

      <section className="our-story">
        <h2>Our Story</h2>
        <img src="https://ideogram.ai/assets/image/list/response/BL-5XPLpQkelP4y9rUaEyw" alt="Image" className="image"></img>
        <p className='text'>
        Our team is composed of dedicated individuals who share a passion for
          books and technology. We work tirelessly to ensure that our users
             have the best reading experience possible.The Readeasy team is a tireless
             bunch. We're dedicated to crafting a reading experience that surpasses expectations. 
             Whether it's meticulously optimizing font rendering for maximum readability, coding              intuitive navigation features, or staying up late brainstorming innovative ways to personalize 
             your reading journey – we're constantly innovating and refining. We believe the details matter, 
           and our dedication ensures that every page turn on Readeasy is a smooth and delightful one.
           From classic literature to the latest bestsellers, Readeasy empowers you to delve into any world with ease. 
           We curate a vast library that caters to every taste, from captivating thrillers to heartwarming romances.
        </p>
      </section>

      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="https://ideogram.ai/assets/image/list/response/NlHO2LPzRgiBfgKclHKeFQ" alt="Team Member 1" />
          <h3>Ananya Sharma</h3>
          <p>Team Leader</p>
        </div>
        <div className="team-member">
          <img src="https://ideogram.ai/assets/image/list/response/O-TneaitTiy7Hqods0HS3w" alt="Team Member 2" />
          <h3>Ajay Rana </h3>
          <p>Team Member</p>
        </div>
        <div className="team-member">
          <img src="https://ideogram.ai/assets/image/list/response/O-TneaitTiy7Hqods0HS3w" alt="Team Member 2" />
          <h3>Abhishek Garg</h3>
          <p>Team Member</p>
        </div>
        <div className="team-member">
          <img src="https://ideogram.ai/assets/image/list/response/O-TneaitTiy7Hqods0HS3w" alt="Team Member 2" />
          <h3>Abhishek Tayal</h3>
          <p>Team Member</p>
        </div>
      </section>

      <section className="what-makes-us-different">
  <div className="image-container">
    <img src='https://i.pinimg.com/564x/98/8f/ab/988fab36ece959714f71cbdd486e6968.jpg'/>
     </div>
  <div className="text-container">
    <h2>What Makes Us Different</h2>
    <ul>
      <li>🔘Curated Reading Lists: Discover hidden gems and find your next favorite read.</li>
      <li>🔘Personalized Recommendations: Get suggestions based on your reading preferences.</li>
      <li>🔘Seamless Reading Experience: Read ebooks on any device, anytime.</li>
    </ul>
  </div>
</section>

      <section className="call-to-action">
        <a href="./home">
          <button>Explore Our Library</button>
        </a>
      </section>
    </div>
  );
};

export default AboutUs;






