import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'

const Footer = () => {

    const footerPhimMoi = [
        {
            display: 'Phim chiếu rạp',
            path: '/'
        },
        {
            display: 'Phim lẻ',
            path: '/'
        },
        {
            display: 'Phim bộ',
            path: '/'
        },
        {
            display: 'Phim hành động',
            path: '/'
        },
        {
            display: 'Phim kinh di',
            path: '/'
        },
    ]

    const footerPhimHay = [
        {
            display: 'Phim Mỹ',
            path: '/'
        },
        {
            display: 'Phim Hàn Quốc',
            path: '/'
        },
        {
            display: 'Phim Trung Quốc',
            path: '/'
        },
        {
            display: 'Phim Thái Lan',
            path: '/'
        },
        {
            display: 'Phim Việt Nam',
            path: '/'
        },

    ]

    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    <div>
                        <div className="footer__about">
                            <p>
                                <Link to="/">
                                    <img src='https://phimmoiplus.net/media/images/logo.png' alt="" />
                                </Link>
                            </p>
                            <p>
                                © 2021 Phimmoi.Net
                                Chúng tôi đã trở lại với sứ mệnh mới ,Phimmoizz.net,Phimmoi.net,Phimmoiz.net chỉ còn là những tên miền cũ, hãy truy cập ngay bằng tên miền mới PhimMoiPlus.Net
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Phim mới
                        </div>
                        <div className="footer__content">
                            {
                                footerPhimMoi.map((item , index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <div className="footer__title">
                            Phim hay
                        </div>
                        <div className="footer__content">
                            {
                                footerPhimHay.map((item , index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>

                    <div>
                        <div className="footer__title">
                            Liên hệ quảng cáo
                        </div>
                        <div className="footer__content">
                            <p>Email : <strong>hothanhtung12@gmail.com</strong></p>
                            <p>SDT : <strong>0123456788</strong></p>
                        </div>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
