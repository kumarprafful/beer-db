import React from 'react'

import styles from './pagination.module.scss'

const Pagination = ({ handlePrevious, currentPage, handleNext, totalPages }) => {
    return (
        <>
            <div className={styles.paginationContainer}>
                <button
                    onClick={handlePrevious}
                    className={styles.navButton}
                    title="Previous"
                >
                    &lt;
                </button>
                <p
                    className={styles.pageTag}
                    title="Current Page"
                >
                    Page - {currentPage} of {totalPages}
                </p>
                <button
                    onClick={handleNext}
                    className={styles.navButton}
                    title="Next"
                >
                    &gt;
                </button>
            </div>
        </>
    )
}

export default Pagination