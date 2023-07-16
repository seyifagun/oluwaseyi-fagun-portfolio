import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/contact.module.scss"

function Contact() {
  return (
    <motion.div
      className={styles.contact}
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className={styles.contact__title}>What&apos;s Next?</h2>
      <h2 className={styles.contact__subTitle}>Get In Touch</h2>
      <p className={styles.contact__text}>
        Although I&apos;m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I&apos;ll
        try my best to get back to you!
      </p>
      <div className={styles.contact__cta}>
        <Button link="mailto:fagun.seyi@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
