import React, { useEffect  } from 'react';
import './app.scss';
import Home from '../src/page/home/Home'
import Login from '../src/page/login/Login'
import Profile from '../src/components/form/profile/Profile'
import { login , logout, selectUser } from '../src/features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { auth } from './firebase/firebase';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
          // Login
          console.log(userAuth)
          dispatch(login ({
            uid: userAuth.uid,
            email: userAuth.email,
          }))
      }else {
          // Logout
          dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path='/profile'>
              <Profile />

            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        )
        }
      </Router>
    </div>
  );
}

export default App;
