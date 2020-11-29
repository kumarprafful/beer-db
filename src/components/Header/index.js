import React from 'react'
import styles from './header.module.scss'

const Header = ({ handleSearch }) => {
    return (
        <div className={styles.header}>
            <div>
                <span className={styles.logo}>
                    Pitcher
                </span>
            </div>

            <div className={styles.search}>
                <input
                    onChange={handleSearch}
                    placeholder="Search..."
                />
            </div>
        </div>
    )
}

export default Header