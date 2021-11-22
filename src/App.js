import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Appointment from './components/Appointments/Appointment';
import Header from './screens/Header/Header';
// import HeaderNarbar from './screens/Header/HeaderNarbar';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFD700'
      },
      secondary: {
        main: '#FFFFFF'
      }
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/product' element={<Appointment />}/>
        </Routes>
      </div>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
