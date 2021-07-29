import React, { useEffect, useState } from 'react'
import './nav.scss'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useHistory } from 'react-router-dom';

function Nav() {
    const [show , handleShow] = useState(false)
    const history = useHistory()

    const trigger = function (){
        window.addEventListener('scroll' , () => {
            if (window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
    }

    useEffect(() => {
        window.addEventListener('scroll' , trigger)
            return () => window.removeEventListener('scroll' , trigger)
    },[])

    return (
        <div className={`nav ${show  && 'black'}`}>
            <div className="nav__left">
                <img 
                    onClick={() => history.push('/')}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" 
                    alt="" 
                />
                <ul className="nav__left-list">
                    <li className="nav__left-list-item active">Trang chủ</li>
                    <li className="nav__left-list-item">Phim T.hình</li>
                    <li className="nav__left-list-item">Phim</li>
                    <li className="nav__left-list-item">Mới & Phổ biến</li>
                    <li className="nav__left-list-item">Danh sách của tôi</li>
                </ul>
            </div>
            <div className="nav__right">
                <div className="nav__right-search">
                    <input type="text" placeholder='Phim,diễn viên,thể loại' className=''></input>
                    <SearchIcon className="nav__right-icon" />

                </div>
                <NotificationsIcon className="nav__right-icon"/>
                <img
                    onClick={() => history.push('/profile')}
                    src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABa3G3Ccfp2MvxnUizjVXibXsJceqOvD2Wy7Oxrzl6QuUGVXQGGSt1Z_wWGmI5ZgIYF9nkUcfZJuOe-qtmzY-p_o.png?r=fa1" 
                    alt="" 
                />
                <ArrowDropDownIcon className="nav__right-down"/>
            </div>
        </div>
    )
}

export default Nav
