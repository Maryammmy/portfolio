import { motion } from "framer-motion";
import { styles } from "../../styles";
import { testimonials } from "../../constants";
import TestimonialCard from "./Card";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

// eslint-disable-next-line react-refresh/only-export-components
const Testimonial = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant(0.5)}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            index={index}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Testimonial, "");
