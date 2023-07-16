import Link from 'next/link';
import React from 'react';
import styles from "../styles/button.module.scss";

interface Prop {
    text?: string;
    link?: string;
}

const Button:React.FC<Prop> = ({text, link}) => {
  return (
    <Link href={`${link}`} className={styles.btn}>
        {text}
    </Link>
  )
}

export default Button