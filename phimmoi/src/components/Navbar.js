import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const mainNav = [
        {
            display: 'PHIMMOI',
            path: '/'
        },
        {
            display: 'THỂ LOẠI',
            path: '/'
        },
        {
            display: 'QUỐC GIA',
            path: '/'
        },
        {
            display: 'PHIM LẺ',
            path: '/'
        },
        {
            display: 'PHIM BỘ',
            path: '/'
        },
        {
            display: 'NĂM PHÁT HÀNH',
            path: '/'
        },
        {
            display: 'PHIM CHIẾU RẠP',
            path: '/'
        },
        {
            display: 'TRAILER',
            path: '/'
        },
        {
            display: 'PHIM HOT',
            path: '/'
        },
        {
            display: 'PHIM HD',
            path: '/'
        },
    ]
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__content">
                    {
                        mainNav.map((item , index) => (
                            <Link key={index} to={item.path}>
                                <span>{item.display}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
