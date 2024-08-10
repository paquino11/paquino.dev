import React from 'react';
import { Intro } from '@/components/Intro';
import { TechStack } from '@/components/TechStack';
import { WorkExperience } from '@/components/WorkExperience';
import SocialMedia from '@/components/SocialMedia';
import Footer
 from '@/components/Footer';
export default function Home() {
  return (
    <div className="home-page">
      <Intro />
      <SocialMedia/>
      <TechStack/>
      <WorkExperience />
      <Footer/>
    </div>
  );
}
