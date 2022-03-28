import React from 'react'
import Logo from './Logo'
import Search from './Search'
import styles from './style.module.scss';

export default function Header() {
  return (
    <div id="Header">
      <div className="container">
        <div className="row">
          <div className={styles.col}>
              <Logo />
              <Search />
          </div>
        </div>
      </div>
    </div>
  )
}
