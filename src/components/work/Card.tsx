import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Tilt } from "react-tilt";
import type { Project } from "../../interfaces/constants";
import Image from "../ui/Image";

interface IProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: IProps) => {
  const { name, description, tags, image, source_code_link } = project;
  return (
    <motion.a
      href={source_code_link}
      target="_blank"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            imageUrl={image}
            alt="project_image"
            className="w-full h-full rounded-2xl"
          />

          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                imageUrl={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.a>
  );
};
export default ProjectCard;
