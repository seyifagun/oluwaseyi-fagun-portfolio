import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import styles from "../styles/about.module.scss";
import image from "../../public/image";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className={styles.about}
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className={styles.title}>
        <h2>About Me</h2>
      </div>
      <div className={styles.about__grid}>
        <div className={styles.about__grid_info}>
          <p className={styles.about__grid_info_text}>
            Holla! My name is Seyi, and I am passionate about creating
            digital content for the web. My interest in web development was
            sparked in 2021 when I created my first project called ProptEase, a
            real estate app built using NextJS and .NET
          </p>
          <p className={styles.about__grid_info_text}>
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients and exceed their
            expectations at{" "}
            <Link href="#" className="link" target="_blank">
              Melo Dev.
            </Link>
          </p>

          <br/><br/>
          <p className={styles.about__grid_info_text}>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className={styles.about__grid_info_list}>
            <li  className={styles.about__grid_info_list_item}>React</li>
            <li  className={styles.about__grid_info_list_item}>Next.js</li>
            <li  className={styles.about__grid_info_list_item}>Typescript</li>
            <li className={styles.about__grid_info_list_item}>Redux Toolkit</li>
            <li className={styles.about__grid_info_list_item}>CSS</li>
          </ul>
        </div>
        <div className={styles.about__grid_photo}>
          <div className={styles.overlay} />
          <div className={styles.overlay__border} />
          <div className={styles.about__grid_photo_container}>
            <Image src={image.seyiImg} alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;