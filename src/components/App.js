import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import BeerList from './BeerList'

import styles from './app.module.scss'
import Pagination from './Pagination'

const App = () => {
    const [data, setData] = useState()
    const [beerData, setBeerData] = useState()
    const [beerImages, setBeerImages] = useState()
    const [paginatedBeerData, setPaginatedBeerData] = useState()

    const [currentPage, setCurrentPage] = useState(1)

    const setDataToBeShown = (data) => {
        setBeerData(data)
        setPaginatedBeerData(data.slice(0, 20))
    }

    const fetchBeerDetails = async () => {
        const URL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json'
        const headers = {
            'Content-Type': 'application/json',
        }
        try {
            const response = await axios.get(
                URL,
                { headers }
            )
            setData(response.data)
            setDataToBeShown(response.data)
        }
        catch (error) {
            throw error
        }
    }

    const fetchBeerImages = async () => {
        const URL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json'
        const headers = {
            'Content-Type': 'application/json',
        }
        try {
            const response = await axios.get(
                URL,
                { headers }
            )
            setBeerImages(response.data)
        }
        catch (error) {
            throw error
        }
    }


    useEffect(() => {
        fetchBeerDetails()
        fetchBeerImages()
    }, [])

    const getImage = (index) => {
        const i = index % 5
        return beerImages[i].image
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            const nextPage = ((currentPage - 1) * 20) - 20

            setPaginatedBeerData(beerData.slice(nextPage, (currentPage - 1) * 20))
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (Math.ceil(beerData.length / 20) >= currentPage + 1) {
            const nextPage = ((currentPage + 1) * 20) - 20

            setPaginatedBeerData(beerData.slice(nextPage, (currentPage + 1) * Math.min(20, beerData.length - ((currentPage * 20) - 20))))
            setCurrentPage(currentPage + 1)
        }
    }

    const handleSearch = (e) => {
        const value = e.target.value

        const searchedData = data.filter(el => el.name.toLowerCase().includes(value.toLowerCase()))
        setDataToBeShown(searchedData)
        setCurrentPage(1)
    }

    return (
        <>
            <div className={styles.container}>
                <Header
                    handleSearch={handleSearch}
                />
                <BeerList
                    paginatedBeerData={paginatedBeerData}
                    beerImages={beerImages}
                    getImage={getImage}
                />

                {
                    paginatedBeerData && paginatedBeerData.length > 0 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(beerData.length / 20)}
                            handlePrevious={handlePrevious}
                            handleNext={handleNext}
                        />
                    )
                }
            </div>
        </>
    )
}

export default App;
