import React from 'react'
import styles from './style.module.scss';
import { RiSunLine, RiSearchLine } from 'react-icons/ri';

export default function Search() {
  return (
    <>
        <div className={styles.search}>
            <input type="text" placeholder='Pesquisar cachorro' />
            <input type="submit" value="Ver Cartas" />
            <RiSearchLine size={26} />
        </div>
        <RiSunLine size={36} />
    </>
  )
}
