"use client";
import React from "react";
import { WorkExperienceCard } from '@/components/WorkExperienceCard';

export function WorkExperience() {
    return (
    <div className="flex flex-wrap gap-4 mt-4 px-4 md:px-8 lg:px-36">
        <WorkExperienceCard
          company="OpenAI"
          job_title="Research Scientist"
          time_period="Jan 2020 - Present"
          description={[
            "Conducted cutting-edge AI research",
            "Published papers in top conferences",
            "Collaborated with cross-functional teams",
          ]}
          links={[
            { text: "LinkedIn Profile", url: "https://www.linkedin.com/in/username" },
            { text: "Research Papers", url: "https://scholar.google.com/citations?user=username" },
          ]}
          className="w-full md:w-1/2 lg:w-1/3"
        />
        <WorkExperienceCard
          company="OpenAI"
          job_title="Research Scientist"
          time_period="Jan 2020 - Present"
          description={[
            "Conducted cutting-edge AI research",
            "Published papers in top conferences",
            "Collaborated with cross-functional teams",
          ]}
          links={[
            { text: "LinkedIn Profile", url: "https://www.linkedin.com/in/username" },
            { text: "Research Papers", url: "https://scholar.google.com/citations?user=username" },
          ]}
          className="w-full md:w-1/2 lg:w-1/3"
        />
      </div>
    );
};