"use client";
import React from "react";
import { WorkExperienceCard } from '@/components/WorkExperienceCard';

export function WorkExperience() {
    return (
    <div className="flex flex-wrap gap-4 mt-4 px-4 md:px-8 lg:px-36">
        <WorkExperienceCard
          company="Ecarx Group"
          companyIcon="/ecarx-logo.png" // Path to the company icon in the public folder
          job_title="Software Engineer"
          time_period="March 2023 - Present"
          description={[
            "Created a cloud testing framework to automatize testing processes using Python, FastAPI and Docker.",
            "Built GitLab CI/CD pipelines to automate code integration, testing, and deployment.",
            "Added features and fixed bugs in Automotive Android OSP Ecarx code.",
          ]}
          links={[
            { text: "Ecarx Group Website", url: "https://www.ecarxgroup.com/" },
          ]}
          className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex-grow"
        />
        <WorkExperienceCard
          company="Fast Resume AI"
          companyIcon="/fast-resume-ai-logo.png"
          job_title="Start Up Founder"
          time_period="July 2024 - August 2024"
          description={[
            "Designed and built this AI tool to help users to find a job in software engineering.",
            "Implemented AI agents APIs with Fast API, Langchain, OpenAI API, Docker and AWS EC2.",
            "Designed the website page using NextJS, Typescript, Tailwind and deployed on Vercel.",
            "Implemented and design PostgreSQL DB, user auth and serverless functions using Supabase",
            "Integrated with Stripe for payments, Crisp for customer support and Resend for email sending automation.",
            "Implemented CI/CD pipelines for automation deployments, testing and integration processes using Github Actions."
          ]}
          links={[
            { text: "Fast Resume AI", url: "https://www.fast-resume-ai.com/" },
          ]}
          className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex-grow"
        />
        <WorkExperienceCard
          company="Europe Connected by Talents"
          companyIcon="/europe-connected-logo.png"
          job_title="Co-Founder and Software Engineer"
          time_period="Feb 2024 - Present"
          description={[
            "Initiated this project to help people to find jobs in Sweden, providing support on finding housing, handle legal documents, provide language course.",
            "Designed and develop the website, using NextJS, Typescript, Tailwind deployed on Vercel.",
            "Designed a MySQL DB, used Prisma ORM and deployed on Railway."
          ]}
          links={[
            { text: "Europe Connected by Talents Website", url: "https://www.euroctalents.com/" },
          ]}
          className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex-grow"
        />
        <WorkExperienceCard
          company="Melocaixil"
          companyIcon="/melocaixil.png"
          job_title="Freelancer"
          time_period="September 2024"
          description={[
            "Designed and developed a web application to manage work orders, clients, and employees using NextJS, Typescript and deployed on Vercel",
            "Designed and implemented a PostgreSQL database architecture to efficiently handle and store application data, ensuring data integrity and optimal performance.",
            "Implemented and integrated role-based access control policies to assign appropriate permissions and access levels to different user roles.",
          ]}
          links={[
            // { text: "Ecarx Group Website", url: "https://www.ecarxgroup.com/" },
          ]}
          className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex-grow"
        />
        <WorkExperienceCard
          company="Accenture"
          companyIcon="/accenture-logo.png"
          job_title="Software Developer"
          time_period="Jan 2020 - Present"
          description={[
            "Implemented and designed RESTful APIs in FastAPI.",
            "Designed and optimized data with MongoDB.",
            "Implemented CI/CD pipelines for automation deployments, testing and integration processes using GitLab CI/CD."
          ]}
          links={[
            { text: "Accenture Website", url: "https://www.accenture.com" },
          ]}
          className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex-grow"
        />
      </div>
    );
};
