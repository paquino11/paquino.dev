"use client";
import React from "react";


export function Intro() {
    return (
        <div className="intro-card">
            <div>
                <h1 className="text-4xl intro-card-welcome">sup guys</h1>
            </div>
            <div className="intro-card-body">
                <p className="text-base body-md">i&apos;m a software engineer obsessed with building and learning new stuff (mostly backend and AI, you can notice by this portfolio frontend is not my best skill ;) long live aceternityUI and prompt engineering.</p>
                <p className="text-base body-md">currently focused on building AI products with open-source frameworks LangGraph, crewAI, and LLamaIndex (yes, I&apos;m not stuck to only one :)), CI/CD pipelines, AI automation, and AI agents using paid LLMs, please sponsor me OpenAI and Anthropic, since I don&apos;t have enough computer power to run Llama 3.1 405B :(</p>
                <p className="text-base body-md">i am always open to new work opportunities or consulting related to gen AI applications, full-stack dev or automation. To get in touch with me quickly, you can send me an email.</p>
                <div className="flex flex-row gap-[4px]">
                    <p className="text-base body-md">email:</p>
                    <a href="mailto:pedroaquinose@gmail.com" className="text-base body-md underline">pedroaquinose (at) gmail (dot) com</a>
                </div>
                {/* <div className="flex flex-row">
                    <a target="_blank" className="intro-card-email underline" href="https://www.paquino.dev/Pedro_Aquino_Resume.pdf" rel="noreferrer">
                        <p className="text-base body-md">resume</p>
                    </a>
                </div> */}
            </div>
        </div>
    );
}