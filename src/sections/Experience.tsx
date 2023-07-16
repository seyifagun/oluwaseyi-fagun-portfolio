import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/experience.module.scss";

type ExperienceType = {
    name?: string,
    role?: string,
    url: string,
    end?: string,
    start?: string,
    shortDescription?: {}[]
}

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences:ExperienceType[] = [
    {
      name: "247Travels",
      role: "UI Creation with Next.js, Data binding, Api Integration, Maintenance",
      url: "https://www.247travels.com",
      start: "January 2022",
      end: "Present",
      shortDescription: [
        "I had experience working on a large codebase utilizing Kibana and Elasticsearch.",
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
        "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
    {
      name: "Lighthouse Capital",
      role: "UI Creation with html & CSS, Data binding in php and jquery, Maintenance",
      url: "https://www.lighthousecapital.ng",
      start: "June 2022",
      end: "Present",
      shortDescription: [
        "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
        "Over time, I have developed and shared over 50 projects using React on my channel.",
        "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
      ],
    },
    {
      name: "Growth Hacking Africa",
      role: "UI Creation with Next.js, Data binding, Api Integration, Maintenance",
      url: "https://www.growthhackingafrica.com.ng",
      start: "November 2019",
      end: "November 2020",
      shortDescription: [
        "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
        "Additionally, I secured sponsorships from reputable brands to support our events.",
        "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
      ],
    },
    {
      name: "3AGlobal",
      role: "UI Creation with html & CSS, Data binding in php and jquery, Maintenance   ",
      url: "https://www.3aglobal.com",
      start: "November 2019",
      end: "November 2020",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      name: "Peacefulsky Travel",
      role: "UI Creation with Next.js, Data binding, Api Integration, Maintenance",
      url: "https://www.peacefulskytravel.com/",
      start: "November 2019",
      end: "November 2020",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      name: "Domestic Worker",
      role: "UI Creation with Next.js, Data binding, Api Integration, Maintenance",
      url: "https://www.domesticworker.africa/",
      start: "November 2018",
      end: "November 2021",
      shortDescription: [
        "While still a student, I founded a web hosting company that offered affordable hosting services.",
        "With over 300 customers, the business thrived until I graduated and sold it to another company.",
      ],
    },
  ];
  return (
    <motion.div
      className={styles.experience}
      id="experience"
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
        <h2>Live Projects Worked On</h2>
      </div>
      <div className={styles.container}>
        <ul className={styles.expSlider}>
          <div className="underline" />
          {experiences.map((experience, index) => {
            return (
              <li
                className={`${styles.expSlider__item} ${
                  index === selected} && ${styles.expSlider__item_selected}
                }`}
                onClick={() => setSelected(index)}
                key={experience.name}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.expDetails}>
          <div className={styles.expDetails__position}>
            <h3>
              <span>{experiences[selected].role}</span>
              <span className={styles.expDetails__position_company}>
                &nbsp;:&nbsp;
                <Link href={experiences[selected].url} className="link">
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className={styles.expDetails__range}>
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className={styles.expDetails__list}>
              {experiences[selected].shortDescription?.map(
                (description:any, index:any) => (
                  <li key={index} className={styles.expDetails__list_item}>
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
