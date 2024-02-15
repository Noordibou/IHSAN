// pages/team.js

import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Omar Dibou',
    role: 'President',
    major: 'Biology',
    track:'Pre-Med',
    graduation: '2023',
    description: "I am most excited about meeting the new members of IHA and the Ramadan Social event. Outside of School, I am an Undergraduate Research Assistant for Interventional Cardiology at Medical City Fort Worth.I am a certified EMT and also volunteer at UTSW. In my free time, I enjoy wrestling with friends, hanging out with family, and trying out new Middle Eastern cafe spots. Fun fact I have 7 siblings.",
    image: '/omar.jpg',
    
  },
  {
    name: 'Rahil Howlader',
    role: 'Vice President',
    major: 'Neuroscience',
    track:'Pre-Med',
    graduation: '',
    description: "Being able to give like minded students clinical experiences. Working as a Certified Clinical Medical Assistant, Ungergraduate Reasearch Assistant for Interventional Cardiology at Medical City Fort Worth, Teaching Assistant for Introduction to Neuroscience with Dr. Raboune, Medical Director for Noorishment, Volunteer at Children's Hospital Dallas. Fun fact about me is that I have a twin brother!",
    image: '/rahil.jpg',
  },
  {
    name: 'Syed Zubab Hassan',
    role:'Vice President',
    major: 'Neuroscience',
    track: 'Pre-Med',
    graduation: '2026',
    description: "I'm excited to work alongside very capable and genuine individuals and not only build more connections but also help those who share my goal of becoming a physician. I'm currently an undergraduate research assistant at the Kolber Pain and Stress lab at UTD. I’m also a member of ALM fraternity. I like to play basketball, love playing golf, and would like to spend more time on the golf course this year.",
    image: '/syed.jpg',
  },
  {
    name: 'Ayah Hamdan',
  role: ' Secretary',
  major: 'Healthcare Studies with a minor in Biology',
  track:'Pre-Dental',
  graduation: 'Fall 2025',
  description: "I look forward to serving on the board this year, welcoming new members to IHA, and contributing to create a supportive environment for pre-health students. Outside of college, I work as a registered dental assistant (RDA) in a general practice and volunteer at a dental clinic that offers free services for low-income residents. In my free time, I like to draw/paint, hang out with friends and family, and try out new cuisines. ",
  image: '/ayah.jpg',
  },
  {
    name: 'Faatin Faisal',
    role: 'Social Media Manager',
    major: 'Biology with a minor in Child Development',
    track:'Pre-Dental',
    graduation: '2026',
    description: "Faatin is a sophomore biology major with a minor in Child Development, on the pre-dental track with a planned graduation in 2026. She currently holds the position of Registered Dental Assistant (RDA) at a pediatric dental office. Finding immense fulfillment in working with children, Faatin enjoys witnessing their increasing comfort with dental procedures over time. She expresses excitement about the plethora of opportunities presented by the organization and looks forward to delving deeper into them. In her free time, she loves to hang out with her friends and family!",
    image: '/faatin.jpg',
  },
    {
    name: 'Hiba Riazuddin',
    role: 'Social Events Coordinator',
    major: 'Healthcare Studies',
    track:'Pre-Med',
    graduation: '2026',
    description: "Meet Hiba, she is a Healthcare Studies major and is on the Pre-Med track. She is graduating in 2026, she is excited for all the amazing opportunities this organization has in store. In her free time, Hiba loves spending time with her family and friends, and she is looking forward to meeting new people and forming new connections!",
    image: '/hiba.jpg',
    },
    {
    name: 'Aleena Aziz',
    role: 'Social Events Coordinator',
    major: 'Psychology',
    track:'Pre-Med',
    graduation: '2026',
    description: "Aleena Aziz, a Psychology major on the pre-med track, is set to graduate in 2026. This year, she is eager to organize social events for pre-health students, fostering connections and contributing meaningfully to their communities. Outside of her academic pursuits, Aleena enjoys spending quality time with her family and two cats.",
    image: '/aleena.jpg',
    },
    {
      name: 'Ismahan Mohamed',
      role: 'Treasurer',
      major: 'Healthcare Studies with a minor in Biology',
      track: 'Pre-Med',
      description: "I'm excited about serving as treasurer, meeting new members, and seeing all the great things we can accomplish this semester! I work as a medical assistant at an internal medicine clinic and am a research associate for TEMRAP. In my free time, I love baking, exploring cute coffee shops, and spending time with family.",
      image: '/ismahan.jpg',
    },
    
    
    
];

const TeamPage = () => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="md:text-4xl text-3xl font-semibold font-title text-center mt-10 uppercase">Meet Our Officers</h1>
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col rounded-lg mx-4 my-4 md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } gap-4 items-center p-8`}
        >
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="rounded-full h-64 w-64 md:h-80 md:w-80 object-cover border-dashed border-4 border-third items-center"
            />
          </div>
          <div className="md:w-1/2 md:px-6 text-center md:text-start bg-third/50 py-2 px-2 rounded-xl">
            <h2 className="md:text-2xl text-xl font-title font-semibold">{member.name}</h2>
            <p className="text-gray-600 font-subTitle font-medium ">{member.role}</p>
            <p className="text-gray-600 font-subTitle font-medium">{member.major} ({member.track})</p>
            <p className="text-black font-body font-base">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamPage;
