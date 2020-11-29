import React from 'react'

import styles from './beerList.module.scss'

const BeerList = ({ paginatedBeerData, beerImages, getImage }) => {
    return (
        <>
            <div className={styles.beerList}>
                {
                    paginatedBeerData && beerImages
                        ?
                        paginatedBeerData.length > 0
                            ?
                            paginatedBeerData.map((item, index) => (
                                <div className={styles.listItem} key={item.id}>
                                    <div className={styles.thumbnail}>
                                        <img
                                            src={getImage(index)}
                                            alt={item.name}
                                        />
                                    </div>

                                    <div className={styles.listItemText}>
                                        {item.name && <h3>{item.name}</h3>}
                                        {item.style && <p>{item.style}</p>}
                                        {
                                            item.abv &&
                                            <p
                                                className={styles.secondary}
                                            >
                                                {item.abv} Alcohol by volume
                                            </p>
                                        }
                                        {
                                            item.ibu
                                            &&
                                            <p
                                                className={styles.secondary}
                                                title="International Bitterness Unit"
                                            >
                                                {item.ibu} IBU
                                            </p>
                                        }
                                        {
                                            item.ounces &&
                                            <p
                                                className={styles.secondary}
                                            >
                                                {item.ounces} ounces
                                            </p>
                                        }
                                    </div>
                                </div>
                            ))
                            : <h1>No data to be shown</h1>
                        : <em>Loading...</em>
                }
            </div>
        </>
    )
}

export default BeerList