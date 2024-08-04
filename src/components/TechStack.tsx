"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TechStack() {
  return (
    <Card>
      <CardTitle>Some of the tools I&apos;m using</CardTitle>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <motion.div
        className="flex flex-row flex-shrink-0 justify-center items-center gap-2 sm:hidden"
        animate={{ x: ["10%", "50%", "-50%", "10%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <Container className="circle-3">
          <PythonLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <DockerLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <AWSLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <GitlabLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <LangchainLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <LlammaIndexLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <ClaudeLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <OpenAILogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <TypeScriptLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <ReactLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <NextJSLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <PostgresqlLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <MongoDBLogo className="h-8 w-8 text-white" />
        </Container>
      </motion.div>
      <div className="hidden sm:flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="circle-3">
          <PythonLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <DockerLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <AWSLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <GitlabLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <LangchainLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <LlammaIndexLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <ClaudeLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <OpenAILogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <TypeScriptLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <ReactLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <NextJSLogo className="h-8 w-8 text-white" />
        </Container>
        <Container className="circle-3">
          <PostgresqlLogo className="h-8 w-8 :text-white" />
        </Container>
        <Container className="circle-3">
          <MongoDBLogo className="h-8 w-8 text-white" />
        </Container>
      </div>
    </div>
  );
};

export const Card = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "max-w-5xl w-full mx-auto p-6 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)] group",
          className
        )}
      >
        {children}
      </div>
    );
  };
  

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
    className,
    children,
    showGradient = false,
  }: {
    className?: string;
    children: React.ReactNode;
    showGradient?: boolean;
  }) => {
    return (
      <div
        className={cn(
          "h-[9rem] md:h-[9rem] rounded-xl z-40 flex items-center justify-center",
          className,
          showGradient &&
            "bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
        )}
      >
        {children}
      </div>
    );
  };

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const TypeScriptLogo = ({ className }: { className?: string }) => {
    return (
      <img src="/typescript-official-svgrepo-com.svg" alt="TypeScript Logo" className={className} />
    );
  };

export const PythonLogo = ({ className }: { className?: string }) => {
    return (
        <img src="/python-svgrepo-com.svg" alt="Python Logo" className={className} />
    );
};
  
export const DockerLogo = ({ className }: { className?: string }) => {
    return (
        <img src="/docker-svgrepo-com.svg" alt="Docker Logo" className={className} />
    );
};

export const SupabaseLogo = ({ className }: { className?: string }) => {
    return (
        <img src="/supabase-logo-icon.svg" alt="Supabase Logo" className={className} />
    );
};

export const AWSLogo = ({ className }: { className?: string }) => {
    return (
        <img src="/aws-svgrepo-com.svg" alt="AWS Logo" className={className} />
    );
};

export const NextJSLogo = ({ className }: { className?: string }) => {
    return (
        <img src="/next-dot-js-svgrepo-com.svg" alt="NextJS Logo" className={className} />
    );
};

export const LangchainLogo = ({ className }: { className?: string }) => {
    return (
        <img src="/langchain-seeklogo.svg" alt="Langchain Logo" className={className} />
    );
};

export const GitlabLogo = ({ className }: { className?: string }) => {
    return (
        <img src="gitlab-svgrepo-com.svg" alt="Gitlab Logo" className={className} />
    );
};

export const ReactLogo = ({ className }: { className?: string }) => {
    return (
        <img src="react-svgrepo-com.svg" alt="React Logo" className={className} />
    );
};

export const PostgresqlLogo = ({ className }: { className?: string }) => {
    return (
        <img src="postgresql-svgrepo-com.svg" alt="PostgreSQL Logo" className={className} />
    );
};

export const MongoDBLogo = ({ className }: { className?: string }) => {
    return (
        <img src="mongo-svgrepo-com.svg" alt="MongoDB Logo" className={className} />
    );
};

export const LlammaIndexLogo = ({ className }: { className?: string }) => {
    return (
        <img src="LlamaSquareBlack.svg" alt="LlammaIndex Logo" className={className} />
    );
};

export const ClaudeLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 512"
      className={className}
    >
      <rect fill="#CC9B7A" width="512" height="512" rx="104.187" ry="105.042" />
      <path
        fill="#1F1F1E"
        fillRule="nonzero"
        d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"
      />
    </svg>
  );
};
export const OpenAILogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

