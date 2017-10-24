import React, { Component } from 'react'
import logo from '../logo.png'
import '../App.css'
import { Textfit } from 'react-textfit'
import { Link } from 'react-router-dom'

const styles = {
  header: {
    fontFamily: 'Alegreya Sans SC',
    color: '#474747',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 30
  }
}

class Home extends Component {
  render() {
    const { header } = styles
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Link to='/' style={{ fontSize: 40 }}><i style={{color: '#BF813E'}} className='fa fa-fw fa-home' /></Link>
            <Link to='/donate' style={{ fontSize: 35 }}><i style={{color: '#BF813E'}} className='fa fa-fw fa-heart' /></Link>
          </div>
        </header>
        <Textfit 
          min={2}
          max={30}
          style={header} 
          mode="single"
        >
          Cooming soon ... 
        </Textfit>
      </div>
    )
  }
}

export default Home 
