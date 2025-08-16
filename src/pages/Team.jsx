'use client';
import React, { useState, useEffect } from 'react';
import { getMembers } from '@/api/team';
import FadeInSection from '@/components/common/FadeInSection';

export default function TeamPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await getMembers();
        // Sort members by their number field in ascending order
        const sortedMembers = response.data.sort((a, b) => {
          // Handle cases where number might be undefined or null
          const numA = a.number || 0;
          const numB = b.number || 0;
          return numA - numB;
        });
        setMembers(sortedMembers);
      } catch (error) {
        console.error('Error fetching members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // Helper function to get image source
  const getImageSrc = (image) => {
    if (!image) return '/student.png'; // Default placeholder
    if (image.startsWith('data:')) return image; // Base64 image
    return '/student.png'; // Fallback
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-main mx-auto"></div>
          <p className="mt-4 text-lg">Loading team members...</p>
        </div>
      </div>
    );
  }

  if (members.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            No Team Members Found
          </h1>
          <p className="text-lg text-gray-600">
            Team members will be displayed here once they are added.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="md:text-4xl text-3xl font-semibold font-title text-center mt-10 uppercase">Meet Our Officers</h1>
      {members.map((member, index) => (
        <FadeInSection key={member.number || member._id} delay={index * 0.1}>
          <div
            className={`flex flex-col rounded-lg mx-4 my-4 md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } gap-4 items-center p-8`}
          >
            <div className="md:w-1/2 flex justify-center">
              <img
                src={getImageSrc(member.image)}
                alt={member.name || 'Team Member'}
                width={400}
                height={400}
                className="object-center rounded-full h-64 w-64 md:h-80 md:w-80 object-cover border-dashed border-4 border-third items-center"
              />
            </div>
            <div className="md:w-1/2 md:px-6 text-center md:text-start bg-gradient-to-r from-third to-gray-200 py-2 px-2 rounded-xl">
              <h2 className="md:text-2xl text-xl font-title font-semibold">{member.name ?? ''}</h2>
              <p className="text-gray-600 font-subTitle font-medium">{member.role ?? ''}</p>
              <p className="text-gray-600 font-subTitle font-medium">{(member.major ?? '') + (member.track ? ` (${member.track})` : '')}</p>
              <p className="text-black font-body font-base">{member.description ?? ''}</p>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
}