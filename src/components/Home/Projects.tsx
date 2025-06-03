"use client";

import { useState } from "react";
import Image from "next/image";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";
import { Description } from "../ui/Description";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "SHOW ALL" },
    { id: "construction", name: "CONSTRUCTION" },
    { id: "renovation", name: "RENOVATION" },
    { id: "plumbing", name: "PLUMBING" },
    { id: "flooring", name: "FLOORING" },
  ];

  const projects = [
    {
      id: 1,
      title: "Project Title",
      description: "Duis aute irure dolor in reprehenderi",
      category: "construction",
      image: "/images/home/projects/work-1.jpeg",
      featured: false,
    },
    {
      id: 2,
      title: "Residential Building",
      description: "Modern residential construction project",
      category: "construction",
      image: "/images/home/projects/work-2.jpeg",
      featured: false,
    },
    {
      id: 3,
      title: "Heavy Machinery",
      description: "Construction equipment in action",
      category: "construction",
      image: "/images/home/projects/work-3.jpeg",
      featured: false,
    },
    {
      id: 4,
      title: "Floor Installation",
      description: "Professional flooring services",
      category: "flooring",
      image: "/images/home/projects/work-4.jpeg",
      featured: false,
    },
    {
      id: 5,
      title: "Crane Operations",
      description: "High-rise construction work",
      category: "construction",
      image: "/images/home/projects/work-5.jpeg",
      featured: false,
    },
    {
      id: 6,
      title: "Site Development",
      description: "Large scale construction project",
      category: "construction",
      image: "/images/home/projects/work-3.jpeg",
      featured: false,
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="padding">
      <div className="main_container">
        <div className="text-center mb-[48px] md:mb-[64px]">
          <Subtitle>OUR BEST WORKS</Subtitle>
          <Title>Our Recent Project</Title>
          <Description>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for lorem ipsum will
            uncover many web sites.
          </Description>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-[32px] md:mb-[48px]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-[24px] py-[8px] font-medium transition-colors ${
                activeCategory === category.id
                  ? "text-white bg-dark"
                  : "bg-gray-100 text-dark hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                />

                {/* Overlay */}
                <div className="absolute bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>

                {/* Project Info Overlay*/}
                {/* {(project.featured || false) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {project.description}
                    </p>
                  </div>
                )} */}

                {/* Hover overlay */}
                {!project.featured && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {project.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
