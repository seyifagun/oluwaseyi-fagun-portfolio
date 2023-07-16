import React, {useState, useEffect} from 'react'
import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import Logo from '@/components/logo';
import Button from '@/components/Button';
import {GiHamburgerMenu} from "react-icons/gi";
import {CgClose} from "react-icons/cg";
import {motion} from "framer-motion"

type NavlinksType = {
    name?: string,
    link?: string;
    number?: string | number
}

const Navbar:React.FC = () => {

    const [navbarVisible, setNavbarVisible] = useState(false);
    const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);

    const sectionLinks:NavlinksType[] = [
        { number: "01.", name: "About", link: "/#about" },
        { number: "02.", name: "Experience", link: "/#experience" },
        { number: "03.", name: "Work", link: "/#work" },
        { number: "04.", name: "Contact", link: "/#contact"}
    ];

    function scrollFunction() {
        window.pageYOffset > 100 ? setNavbarVisible(true) : setNavbarVisible(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction)
    }, [])

  return (
    <>
        <nav id={styles.nav}>
            <div className={`${styles.wrapper} ${navbarVisible ? styles.blurNav : null}`}>
                <motion.div className={styles.brand}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                        duration:0.3,
                        ease:"easeInOut"
                    }}
                >
                    <Link href="#">
                        <Logo />
                    </Link>
                </motion.div>
                <motion.div 
                    className={styles.responsiveNav}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                        duration:0.3,
                        ease:"easeInOut"
                    }}
                >
                    {responsiveNavVisible ? (
                         <CgClose
                         style={{color:"#e1e1e1"}}
                         color='red'
                            onClick={(e) => {
                            e.stopPropagation();
                            setResponsiveNavVisible(false);
                         }}
                       />
                        ) : (
                       <GiHamburgerMenu
                            style={{color:"#e1e1e1"}}
                            onClick={(e) => {
                            e.stopPropagation();
                            setResponsiveNavVisible(true);
                         }}
                       />)
                    }
                </motion.div>
                <div className={`${styles.navitems} ${responsiveNavVisible && styles.responsivenav}`}>
                    <ul className={styles.navitemsList}>
                        {sectionLinks?.map((x, index) => (
                            <li key={index} className={styles.navitemsList__item}>
                                <span>{x.number}</span>
                                <Link className={styles.navitemsList__item_link} href={`${x.link}`}>{x.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.navitemsButton}>
                        <Button text="Resume" link="#resume"/>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar