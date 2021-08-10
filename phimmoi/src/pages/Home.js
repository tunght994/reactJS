import React from 'react'
import requests from '../API/requests'
import Carousel from '../components/Carousel'
import Slide from '../components/Slide'


const Home = () => {
    return (
        <div>
            {/* Slider */}
            <Slide fetchURL={requests.fetchTreding} />
            {/* End Slider */}

            {/* Caroursel */}.
            <Carousel title='Phim le' fetchURL={requests.fetchNetFlixOriginals} />
            {/* End Caroursel */}


        </div>
    )
}

export default Home
