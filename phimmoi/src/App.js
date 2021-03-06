
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './routes/Routes'



const App = () => {
  return (
      <BrowserRouter>
        <Route render={props => (
            <div>
              <Header {...props} />
              <div className="container">
                <div className="main">
                    <Routes />
                </div>
              </div>
              <Footer />
            </div>
        )}/>
      </BrowserRouter>
  );
}

export default App;
