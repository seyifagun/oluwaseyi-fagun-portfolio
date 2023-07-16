import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "../styles/socialIcons.module.scss";

type Proptype = {
    name: string,
    link: string,
    icon: React.JSX.Element
}

const SocialIcons = () => {

  const socialLinks:Proptype[] = [
    // {
    //   name: "Youtube",
    //   icon: <FiYoutube />,
    //   link: "https://www.youtube.com/KishanSheth21/",
    // },
    // {
    //   name: "Instagram",
    //   icon: <FiInstagram />,
    //   link: "https://instagram.com/koolkishansheth",
    // },
    { 
        name: "Github", 
        icon: <FiGithub />, 
        link: "https://github.com/seyifagun" 
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/seyi-fagun-769928142/",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/czar_VI",
    },
  ];
  return (
    <motion.div
      className={styles.socialicons}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className={styles.socialicons__list}>
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className={styles.socialicons__list_item}>
            <Link
              href={link}
              className={styles.socialicons__list_item_link}
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;