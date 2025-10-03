"use client";
import { Button } from "./ui/button";

import { ImageWithFallback } from "./fallback/ImageWithFallback";
import { Badge } from "./ui/badge";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Ancestropedia- Build your family tree",
      description:
        "A genealogy platform that lets users explore, build, and preserve their family heritage. Features interactive family trees, seamless navigation, and engaging visuals to make discovering ancestral connections intuitive and enjoyable.",
      liveLink: "https://ancestropedia.com",
      image: "/ancestropedia.png",
      tags: ["UI/UX Design", "App Design", "Product Design"],
    },
    {
      id: 2,
      title: "Ancestropedia – Admin Management System",
      description:
        "A comprehensive admin dashboard for Ancestropedia, allowing super admins and executive admins to manage the platform dynamically. Features include token management, user management, cloud storage oversight, and business analytics, providing full control over the platform’s operations.",
      image: "/ancestropedia-admin.png",
      tags: [
        "UI/UX Design",
        "App Design",
        "Wireframe",
        "SaaS Application Design",
      ],
    },
    {
      id: 4,
      title: "Leadsmart - Lead Management SAAS Web App",
      description:
        "A SaaS lead management platform for automotive sales teams, enabling sales executives to update tasks while managers can track, visualize, and efficiently manage team assignments through an intuitive interface.",
      image: "/leadSmart.png",
      tags: ["UI/UX Design", "Web Design", "Wireframe"],
    },
    {
      id: 3,
      title: "Classic Volt- OTT App for classic movies",
      description:
        "An OTT platform for classic Bollywood movies, designed for middle-aged and older audiences. Delivers a nostalgic cinematic experience with intuitive navigation, curated classics, and a user-friendly interface that brings timeless films to life",
      image: "/classic-volt.png",
      tags: ["UI/UX Design", "App Design", "Wireframe"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl">
              My <span className="text-yellow-400">Latest Projects</span>
            </h2>
          </div>
          <a href="https://www.behance.net/gauravkushwaha19" target="_blank">
            <Button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black mt-4 sm:mt-0">
              View All Projects
              <span className="ml-2">→</span>
            </Button>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="snap-start flex flex-col justify-between group cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.behance.net/gauravkushwaha19",
                  "_blank"
                )
              }
            >
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg mr-2 font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      {project.title}
                    </h3>
                    {project?.liveLink && (
                      <div className="flex items-center justify-center py-1">
                        <a
                          href={project.liveLink}
                          className="text-center text-nowrap text-[10px] font-semibold bg-yellow-400 hover:bg-yellow-500 text-black transition-colors px-[6px] py-[2px] rounded-[2px] "
                        >
                          View Live
                        </a>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
