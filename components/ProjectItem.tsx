import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Items = {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
};

const ProjectItem = ({ title, backgroundImg, projectUrl }: Items) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#044CD0] to-[#3f6ec6]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <Link href={projectUrl}>
          <p className="text-center mt-2 py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
