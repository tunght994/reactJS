import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

import Navbar from './Navbar'


const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__content__logo">
                        <img src="https://phimmoiplus.net/media/images/logo.png" alt="" />
                    </div>
                    <div className="header__content__search">
                        <input type="text" placeholder="Tìm: tên phim"/>
                        <SearchOutlined className='header__content__search__icon'/>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Header
