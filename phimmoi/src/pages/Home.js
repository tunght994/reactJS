import React from 'react'
import requests from '../API/requests'
import Slide from '../components/Slide'


const Home = () => {
    return (
        <div>
            <Slide 
                fetchURL = {requests.fetchTreding}
            />
        </div>
    )
}

export default Home
