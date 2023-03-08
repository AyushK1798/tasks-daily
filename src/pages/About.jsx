import React from "react";
import styled from "styled-components";

const AboutContent = styled.span`
  color: black;
  margin: 50px;
`;

function About() {
  return (
    <div>
      <AboutContent>
        Welcome to our booking website! We offer a convenient and hassle-free
        way to book your next travel adventure, whether it's a relaxing beach
        getaway, a thrilling mountain climb, or a cultural city tour. With our
        easy-to-use platform, you can browse through a wide range of
        destinations and accommodations, from budget-friendly hostels to
        luxurious resorts, and find the perfect fit for your travel style and
        budget. Our website offers a seamless booking experience, with real-time
        availability and instant confirmation, so you can book your trip with
        confidence and ease. Plus, our dedicated customer support team is always
        available to assist you with any questions or concerns you may have.
        Whether you're planning a solo adventure or a family vacation, our
        website has everything you need to plan your trip from start to finish.
        From flights and hotels to tours and activities, we've got you covered.
        So why wait? Start planning your next adventure today and book with us!
      </AboutContent>
    </div>
  );
}

export default About;
