import React from "react";
import ProjectItem from "./ProjectItem";
import Jlplus from "../public/assets/projects/jlplus.jpg";
import Montana from "../public/assets/projects/montana.jpg";
import Jlblog from "../public/assets/projects/jlblog.jpg";
import Visitbali from "../public/assets/projects/visitbali.jpg";
import Sidestay from "../public/assets/projects/sidestay.jpg";
import Thecook from "../public/assets/projects/thecook.jpg";
import Jobsjl from "../public/assets/projects/jobsjl.jpg";
import Porto from "../public/assets/projects/porto.jpg";
import Memorygame from "../public/assets/projects/memorygame.jpg";
import Jsgaming from "../public/assets/projects/jsgaming.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-10">
      <div className="max-w-[1240px] mx-auto px-2 py-10">
        <p className="uppercase text-xl tracking-widest text-[#044CD0]">
          Projects
        </p>
        <h2 className="py-4"> Projects That I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="JL+ Movie"
            backgroundImg={Jlplus}
            projectUrl="/jlplus"
          />
          <ProjectItem
            title="SideStay"
            backgroundImg={Sidestay}
            projectUrl="/sidestay"
          />
          <ProjectItem
            title="TheCook"
            backgroundImg={Thecook}
            projectUrl="/thecook"
          />
          <ProjectItem
            title="VISITBALI."
            backgroundImg={Visitbali}
            projectUrl="/visitbali"
          />
          <ProjectItem
            title="Montana Car Wash"
            backgroundImg={Montana}
            projectUrl="/montana"
          />
          <ProjectItem
            title="JL Blog"
            backgroundImg={Jlblog}
            projectUrl="/jlblog"
          />
          <ProjectItem
            title="Jobs jl"
            backgroundImg={Jobsjl}
            projectUrl="/jobsjl"
          />
          <ProjectItem
            title="Portofolio"
            backgroundImg={Porto}
            projectUrl="/portofolio"
          />
          <ProjectItem
            title="JS Gaming"
            backgroundImg={Jsgaming}
            projectUrl="/jsgaming"
          />
          <ProjectItem
            title="ABCDEFGAME"
            backgroundImg={Memorygame}
            projectUrl="/memorygame"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
