import React, { useRef } from 'react'
import { auth } from '../../../firebase/firebase'
import './signup.scss'

function Signup() {

    const emailRef = useRef(null)
    const PasswordRef = useRef(null)

    const register = function (e) {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            PasswordRef.current.value
        ).then ((authRef) => {
            console.log(authRef)
        }).catch((error) => {
            alert(error.message)
        })
            
    }

    const signIn = function (e) {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            PasswordRef.current.value
        ).then ((authRef) => {
            console.log(authRef)
        }).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <div className='signup'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Email' />
                <input ref={PasswordRef} type="password" placeholder='Password' />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span>New to Netflix? </span>
                    <span className='link' onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default Signup
