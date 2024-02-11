// pages/team.js

import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Samantha Rodriguez',
    role: 'Project Manager',
    discription: "Samantha is our seasoned Project Manager, overseeing the successful execution of our initiatives. With a decade of experience in project management, she navigates challenges with grace and precision. Her strategic planning and organizational skills ensure that our projects are delivered on time and exceed expectations. Samantha's commitment to excellence drives our team's success.",
    image: '/image-holder1.png',
  },
  {
    name: 'Michael Turner',
    role: 'Marketing Specialist',
    discription: "Michael is our Marketing Specialist, leveraging his extensive background in digital marketing to elevate our brand. His data-driven approach and creative mindset help us reach and engage our target audience effectively. Michael's passion for innovation and staying ahead of marketing trends makes him an invaluable asset to our team ",
    image: '/image-holder1.png',
  },
    {
    name: 'Elena Martinez',
    role: ' UX/UI Designer',
    discription: "Elena, our talented UX/UI Designer, crafts captivating user experiences that seamlessly blend functionality with aesthetics. With a keen eye for detail and a deep understanding of user behavior, she transforms complex ideas into user-friendly interfaces. Elena's designs not only meet user needs but also enhance the overall appeal of our products.",
    image: '/image-holder1.png',
    },
    {
    name: 'David Nguyen',
    role: 'Software Engineer',
    discription:" David brings his expertise as a Software Engineer to our development team. With a strong foundation in algorithms and coding, he thrives on solving intricate technical challenges. David's commitment to writing clean and efficient code ensures the reliability and scalability of our software solutions. His passion for continuous learning and innovation keeps our team at the forefront of technological advancements.",
    image: '/image-holder1.png',
    },
];

const TeamPage = () => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-center p-4">Meet Our Team</h1>
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } gap-4 items-center p-8`}
        >
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="rounded-md h-56 w-64 md:h-72 md:w-80 object-cover border-dashed border-4 border-secondary items-center"
            />
          </div>
          <div className="md:w-1/2 md:px-6">
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <p className="text-gray-600 font-medium ">{member.role}</p>
            <p className="text-gray-600">{member.discription}</p>
            {/* Add more member details if needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamPage;
