import React from 'react'
import './home.scss'
import Nav from '../../components/nav/Nav'
import Banner from '../../components/banner/Banner'
import Row from '../../components/row/Row'
import requests from '../../API/request'

function Home() {
    return (       
        <div className='home'>
            <Nav />

            <Banner />

            <Row
                title = 'NETFLIX ORIGINALS'
                fetchURL = {requests.fetchNetFlixOriginals}
                isLargeRow
            />
             <Row title = 'Treding Now' fetchURL = {requests.fetchTreding}/>
             <Row title = 'Top Rated' fetchURL = {requests.fetchTopRated}/>
             <Row title = 'Action Movies' fetchURL = {requests.fetchActionMovies}/>
             <Row title = 'Comedy Movies' fetchURL = {requests.fetchComedyMovies}/>
             <Row title = 'Horro Movies' fetchURL = {requests.fetchHorroMovies}/>
             <Row title = 'Romantic Movies' fetchURL = {requests.fetchRomanticMovies}/>
             <Row title = 'Documen taries' fetchURL = {requests.fetchDocumentaries}/>
        </div>
    )
}

export default Home
