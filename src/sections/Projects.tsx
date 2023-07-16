import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "../styles/projects.module.scss";
import image from "../../public/image";

const Projects = () => {

  const projectsData = [
    {
      image: image.thumbnail1,
      projectName: "Lighthouse Capital",
      projectLink: "#",
      projectDescription:
        "This is a web application that provides registrar services and expertise on your investments",
      projectTech: [
        "HTML",
        "Jquery",
        "Php",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: image.thumbnail2,
      projectName: "Domestic Workers",
      projectLink: "#",
      projectDescription:
        "This app is helping to digitize and incorporate information technology into the domestic service further folstering security, trust and transparency ",
      projectTech: [
        "Next.Js",
        "NextAuth",
        ".NET",
        "JWT",
        "SWR",
        "SCSS",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    // {
    //   image: "/project3.png",
    //   projectName: "Netflix App",
    //   projectLink: "https://netlify.com",
    //   projectDescription:
    //     "I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
    //   projectTech: [
    //     "React",
    //     "Node.js",
    //     "Firebase",
    //     "MongoDB",
    //     "Express",
    //     "Redux Toolkit",
    //   ],
    //   projectExternalLinks: {
    //     github: "",
    //     externalLink: "",
    //   },
    // },
  ];
  return (
    <div className={styles.projects} id="work">
      <motion.div
        className={styles.title}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className={styles.projects__container}>
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className={styles.project}
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className={styles.project__image}>
                  <div className={styles.project__image_overlay}></div>
                  <div className={styles.project__image_container}>
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className={styles.project__info}>
                  <p className={styles.project__info_overline}>Featured Project</p>
                  <h3 className={styles.project__info_title}>{projectName}</h3>
                  <div className={styles.project__info_description}>
                    <p>{projectDescription}</p>
                  </div>
                  <ul className={styles.project__info_techList}>
                    {projectTech.map((tech) => (
                      <li className={styles.project__info_techList_item} key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className={styles.project__info_links}>
                    {/* <li className={styles.project__info_links_item}>
                      <Link
                        href={projectExternalLinks.github}
                        className={styles.project__info_links_item_link}
                      >
                        <FiGithub />
                      </Link>
                    </li> */}
                    <li className={styles.project_info_links_item}>
                      <Link
                        href={projectExternalLinks.externalLink}
                        className={styles.project__info_links_item_link}
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;