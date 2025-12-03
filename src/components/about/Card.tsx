import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../../utils/motion";
import type { FC } from "react";
import type { Service } from "../../interfaces/constants";
import Image from "../ui/Image";

interface IProps {
  service: Service;
  index: number;
}
const ServiceCard: FC<IProps> = ({ service, index }) => {
  const { icon, title } = service;
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image
            imageUrl={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
export default ServiceCard;
