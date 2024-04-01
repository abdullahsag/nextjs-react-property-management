"use client";
import React, {useEffect} from 'react'
import styles from './About.module.css'

export default function About() {

  const [leftPos, setLeftPos] = React.useState('');
  const [topPos, setTopPos] = React.useState('');

  const onLigtGridMouseMove = (e) => {
    setLeftPos(`${e.clientX}px`);
    setTopPos(`${e.clientY}px`);
  }

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      const { innerWidth: width, innerHeight: height } = window;

      let left = Math.ceil(Math.random() * innerWidth) - 250;
      let top = Math.ceil(Math.random() * innerHeight) - 250;
      console.log(top, left)
      setLeftPos(`${left}px`);
      setTopPos(`${top}px`);
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div className={styles.container}>
        <div id={styles.hexgrid} onMouseMove={(e) => {onLigtGridMouseMove(e)}}>
            <div className={styles.light} style={{left: leftPos, top:topPos}}></div>
            <div className={styles.grid}></div>
          </div>
      </div>
    </div>
  )
}
