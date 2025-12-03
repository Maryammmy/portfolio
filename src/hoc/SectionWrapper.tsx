import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import type { ComponentType, FC } from "react";

// HOC: takes a component and returns a new component wrapped in a motion section
export function SectionWrapper<T extends object>(
  WrappedComponent: ComponentType<T>,
  idName: string
): FC<T> {
  const WrappedWithSection: FC<T> = (props) => (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      <WrappedComponent {...props} />
    </motion.section>
  );

  // Give a displayName so Fast Refresh recognizes it
  WrappedWithSection.displayName = `SectionWrapper(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WrappedWithSection;
}

