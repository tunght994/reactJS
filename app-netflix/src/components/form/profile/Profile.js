import React from 'react'
import './profile.scss'
import Nav from '../../nav/Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'
import { auth } from '../../../firebase/firebase'

function Profile() {

    const user = useSelector(selectUser)

    return (
        <div className="profile">
            <Nav />
            <div className="profile__body">
                <h1>Edit Profile</h1>
                <div className="profile__info">
                    <img
                        src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABa3G3Ccfp2MvxnUizjVXibXsJceqOvD2Wy7Oxrzl6QuUGVXQGGSt1Z_wWGmI5ZgIYF9nkUcfZJuOe-qtmzY-p_o.png?r=fa1"
                        alt=""
                    />
                    <div className="profile__details">
                        <h2>{user.email}</h2>
                        <div className="profile__plans">
                            <h3>Plans</h3>
                            <button
                                onClick={() => auth.signOut()}
                                className="profile__signout">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
