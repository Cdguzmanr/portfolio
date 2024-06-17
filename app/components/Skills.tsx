"use client"

import React, { useEffect, useRef } from 'react';

// logos:
import { CsharpOriginal, PythonOriginalWordmark, CplusplusOriginal, AzuresqldatabaseOriginal, Html5OriginalWordmark, Css3OriginalWordmark, JavaOriginalWordmark, JavascriptOriginal, PhpOriginal, 
  UnityOriginalWordmark, AndroidstudioOriginalWordmark, 
  VisualstudioOriginalWordmark, VscodePlainWordmark, GitOriginalWordmark, AzuredevopsOriginal, GithubOriginalWordmark, BitbucketOriginalWordmark, MicrosoftsqlserverOriginalWordmark, GooglecloudOriginalWordmark, AzureOriginalWordmark,
  ReactOriginalWordmark, TailwindcssPlainWordmark, NodejsOriginalWordmark, TypescriptOriginal } from 'devicons-react';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInLeft');
        } else {
          entry.target.classList.remove('animate-fadeInLeft');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      logos: [CsharpOriginal, PythonOriginalWordmark, CplusplusOriginal, JavascriptOriginal, PhpOriginal, TypescriptOriginal, JavaOriginalWordmark, Html5OriginalWordmark, Css3OriginalWordmark]
    },
    {
      category: "Frameworks & Libraries",
      logos: [ReactOriginalWordmark, NodejsOriginalWordmark, TailwindcssPlainWordmark]
    },
    {
      category: "Tools & IDEs",
      logos: [VisualstudioOriginalWordmark, VscodePlainWordmark, AndroidstudioOriginalWordmark, GitOriginalWordmark, AzuredevopsOriginal, GithubOriginalWordmark, BitbucketOriginalWordmark]
    },  
    {
      category: "Platforms & Databases",
      logos: [UnityOriginalWordmark, AzureOriginalWordmark, MicrosoftsqlserverOriginalWordmark, AzuresqldatabaseOriginal]
    }
  ];

  return (

    <section ref={sectionRef} className="bg-white text-gray-800 py-10 px-5 md:px-20 transition-opacity duration-500 opacity-0">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        
        {skills.map((skillGroup, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-lg bg-gray-100 ${index % 2 === 0 ? "animate-fadeInLeft" : "animate-fadeInRight"}`}>
            <h3 className="text-2xl font-semibold mb-5 text-center">{skillGroup.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
              {skillGroup.logos.map((Logo, logoIndex) => (
                <div key={logoIndex} className="flex flex-col items-center">
                  <Logo size="4rem" className="transition transform hover:scale-125 hover:text-indigo-500"/>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
