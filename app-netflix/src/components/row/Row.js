import axios from '../../API/axios'
import React, { useEffect, useState } from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './row.scss'

function Row({ title, fetchURL, isLargeRow = false }) {

    const baseURL = 'https://image.tmdb.org/t/p/original'

    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            // console.log(request.data.results)
            return request
        }
        fetchData()
    }, [fetchURL])

    // console.log(movies)

    return (
        <div className="row">
            <h2 className='title'>{title}</h2>
                <div className="row__posters wrapper">
                <ChevronLeftIcon className='sliderArrow left'/>
                    {movies.map(movie =>
                        <img
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )}
                <ChevronRightIcon className='sliderArrow right'/>
                </div>

        </div>
    )
}

export default Row
