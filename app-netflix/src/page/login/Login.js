import React, { useState } from 'react'
import './login.scss'
import Signup from '../../components/form/signup/Signup'
function Login() {

    const [signIn, setSingIn] = useState(false)


    return (

        <div className='login'>
            <div className="login__background">
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <button
                    onClick={() => setSingIn(true)}
                    className="login__button">
                    Sign In
                </button>

                <div className="login__gradient"></div>

                <div className="login__body">
                    {signIn ? (
                        <Signup />
                    ) : (
                        <>
                            <h1>Unlimited movies, TV shows, and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                            <div className="login__input">
                                <form>
                                    <input type="text" placeholder='Email Address' />
                                    <button
                                        onClick={() => setSingIn(true)}
                                        className='login__getStarted'>
                                        GET STARTED
                                    </button>
                                </form>
                            </div>

                        </>

                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
