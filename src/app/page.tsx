import React from 'react';
import { Intro } from '@/components/Intro';
import { TechStack } from '@/components/TechStack';
import { WorkExperience } from '@/components/WorkExperience';

export default function Home() {
  return (
    <div className="home-page">
      <Intro />
      <TechStack/>
      {/* <WorkExperience /> */}
    </div>
  );
}
