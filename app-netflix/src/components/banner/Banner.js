import React, { useEffect, useState } from 'react';
import './banner.scss';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import requests from '../../API/request';
import axios from '../../API/axios'

function Banner() {
    const [movie, setMovives] = useState([])
    const baseURL = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetFlixOriginals)
            setMovives(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ])
            return request
        }
        fetchData()
    },[])
    // console.log(movie)


    const truncate = function (str , idx){
        return str?.length > idx ? str.substr(0 , idx - 1) + '....' : str
    }
    return (
        <div className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
                backgroundPosition: 'center center'
            }}>

            <div className="banner__container-text">
                <h1>{movie?.name || movie?.original_name}</h1>
                <p>
                    {truncate(movie?.overview, 160)}
                </p>
                <div className="banner__container-text-btn">
                    <button className='play'>
                        <PlayArrowIcon className='btn-icon' />
                        Phát
                    </button>
                    <button className='info'>
                        <ErrorOutlineIcon className='btn-icon' />
                        Thông tin khác
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Banner
