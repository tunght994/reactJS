import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Image
import Marvel from '../asess/img/Tuyen-Tap-Marvel.jpg'
import tuyenTapDC from '../asess/img/Tuyen-Tap-DC.jpg'
import coTrangTQ from '../asess/img/Co-Trang-Trung-Quoc.jpg'
import phim18 from '../asess/img/phim18e.jpg'

const Carousel = ({ title, fetchURL }) => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            console.log(request.data.results)

        }

        fetchData()
    }, [fetchURL])

    return (
        <div className='carousel'>
            <div className="container">
                <div className="carousel__content">
                    <div className="carousel__content__baner">
                        <Link to='/'>
                            <img src={Marvel} alt="" />
                        </Link>
                        <Link to='/'>
                            <img src={tuyenTapDC} alt="" />
                        </Link>
                        <Link to='/'>
                            <img src={coTrangTQ} alt="" />
                        </Link>
                        <Link to='/'>
                            <img src={phim18} alt="" />
                        </Link>
                    </div>
                    <div className="carousel__content__list">
                        <h5>{title}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
