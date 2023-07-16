import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/email.module.scss";

function Email() {
  return (
    <motion.div
      className={styles.email}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <a href="mailto:fagun.seyi@gmail.com" className={styles.email__link}>
        fagun.seyi@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;