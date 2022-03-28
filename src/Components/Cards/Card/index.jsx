import React from 'react'
import styles from './style.module.scss';

export default function Card(props) {
  return (
      <>
         <div className={styles.card} style={{backgroundImage: `url(${props.bg})`}}>
           <h3>{props.name}</h3>
         </div>
      </>
   
  )
}
