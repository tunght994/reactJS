import React, { useEffect, useRef, useState } from 'react'
import axios from '../API/axios'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Slide = ({ fetchURL }) => {

    const [movies, setMovies] = useState([])
    const [slideNumber, setSlideNumber] = useState(0)

    const listRef = useRef()
    const baseURL = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            // console.log(request)
            return request
        }
        fetchData()
    }, [fetchURL])

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 110
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${320 + distance}px)`
        }
        if (direction === 'right' && slideNumber < 9) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-320 + distance}px)`
        }
    }

    const trande = (str , index) => {
        return str?.length > index ? str.substr(0 , index - 1) + '...' : str
    }

    return (
        <div className="slide">
            <div className="container">
                <div className="slide__title">
                Hãy ở nhà và truy cập PhimMoiPlus.Net để xem phim, hạn chế ra ngoài. PhimMoi chúc mọi người luôn khỏe mạnh nhất là anh chị em ở TPHCM
                </div>
                <div className="slide__content" >
                    <LeftOutlined className='slide__content__icon slide__content__icon__left' onClick={() => handleClick('left')} />
                    <div className="slide__content__wrapper" ref={listRef}>
                        {
                            movies.map((movie , index) => (
                                <Link to={index}>
                                    <div className="slide__content__list">
                                        <img
                                            src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
                                            alt={movie.title}
                                        />
                                        <div className="slide__content__list__title">
                                            <h4>{trande(movie.title,20)}</h4>
                                            <p>{trande(movie.overview,20)}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }

                    </div>
                    <RightOutlined className='slide__content__icon slide__content__icon__right' onClick={() => handleClick('right')} />
                </div>
            </div>
        </div>
    )
}

export default Slide
