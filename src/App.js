import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './_App.scss';
import Header from './COMPONENTS/header/Header';
import SideBar from './COMPONENTS/sideBar/SideBar';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen';
function App() {

  const [sideBar , setSideBar] = useState(false)

  const sideBarFunc = ()=> setSideBar(val => !val)

  return (
    <div className="App">
         {/*  <Header sideBarFunc={sideBarFunc}  />
          <div className="app_container border border-info" >
            <SideBar sideBar={sideBar} sideBarFunc={sideBarFunc} />
            <Container fluid className='app__main border border-warning' >
              <HomeScreen />
            </Container>
          </div> */}

          <LoginScreen />

    </div>
  );
}

export default App;
