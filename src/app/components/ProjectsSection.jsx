"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTags from './ProjectTags';
import { motion } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "Invetory System",
        description: "A sample of inventory system",
        image: "./images/invent.jpg",
        tag: ["All","Web"],
        gitUrl: "https://github.com/ReachkaS/Inventory_System",
        previewUrl: "https://reachkas.github.io/Inventory_System/"
    },
    {
      id: 2,
      title: "Porfolio",
      description: "Showcase my background",
      image: "./images/portfo.jpg",
      tag: ["All","Web"],
      gitUrl: "/",
      previewUrl: "/"
      },
      {
      id: 3,
      title: "Restuarant",
      description: "Project of my first website build",
      image: "./images/restau.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/ReachkaS/my-Restuarant",
      previewUrl: "https://reachkas.github.io/my-Restuarant/"
      },
      {
      id: 4,
      title: "Heritage of Cambodia",
      description: "Traditional Dance, instrument, Lbok Tor, La khon",
      image: "./images/ps1.jpg",
      tag: ["All","Graphic Design"],
      gitUrl: "/",
      previewUrl: "./images/ps1.jpg"
      },
      {
      id: 5,
      title: "Proud to be Cambodia",
      description: "Beautiful culture making Cambodia poeple proudfulness",
      image: "./images/ps7.jpg",
      tag: ["All", "Graphic Design"],
      gitUrl: "/",
      previewUrl: "./images/ps7.JPG"
      },
      {
      id: 6,
      title: "Mood Coffee",
      description: "A mock up of Logo that present a modern kind of cafe",
      image: "./images/ps2.jpg",
      tag: ["All","Graphic Design"],
      gitUrl: "/",
      previewUrl: "./images/ps2.jpg"
      },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTags = (newTag) => {
        setTag(newTag); 
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <>
            <h2 className='text-[#2f4156] text-center text-4xl font-bold mt-4 mb-5' id="projects">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center">
                <ProjectTags onClick={handleTags} name="All" isPending={tag === "All"} />
                <ProjectTags onClick={handleTags} name="Web" isPending={tag === "Web"} />
                <ProjectTags onClick={handleTags} name="Graphic Design" isPending={tag === "Graphic Design"} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 '>
                {filteredProjects.map((project) => (
                    <motion.div 
                        key={project.id} 
                        variants={cardVariants} 
                        initial="hidden" 
                        animate="visible"
                    >
                        <ProjectCard 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image} 
                            tag={project.tag} 
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default ProjectsSection;