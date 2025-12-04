import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import ServiceCard from "./Card";
import type { FC } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const About: FC = () => (
  <>
    <motion.div variants={textVariant(0.5)}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("up", "spring", 0.1, 0.1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I'm a passionate Frontend Developer with expertise in Next.js, React.js,
      JavaScript, TypeScript, HTML, and CSS. I create modern, responsive, and
      user-friendly web applications that bring ideas to life. I’m a quick
      learner, detail-oriented, and love collaborating with clients to deliver
      efficient, scalable, and beautiful web solutions. Let’s build something
      amazing together!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} service={service} />
      ))}
    </div>
  </>
);

// Wrap About with SectionWrapper HOC and export default
// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
