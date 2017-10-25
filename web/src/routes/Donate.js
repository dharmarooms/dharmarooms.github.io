import React, { Component } from 'react'
import logo from '../logo.png'
import '../App.css'
import { Textfit } from 'react-textfit'
import ReactFontFace from 'react-font-face'
import Button from '../../node_modules/muicss/lib/react/button'


const donate = 49

class Donate extends Component {
  handleClick() {
    window.location.assign('https://www.paypal.me/dharmarooms')
  }

  render() {

    const { header, namaste, mission, total, benefit, names, donateButton } = styles

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Textfit 
            min={2}
            max={25}
            style={header} 
            mode="single"
          >
            #Дхарма 
          </Textfit>
          <Textfit 
            style={ mission } 
            mode="multi"
          >
            Миссия приложения - это проведение света дхармы в мир адхармы и Ваша поддержка позволит уделять нашему общему делу больше времени. <br/>В планах пополнить библиотеку более 700 духовными книгами и перевести на основные языки мира. 
            <br/>Благодаря выбранному цифровому формату эти книги будут существовать не одно поколение духовных искателей.
          </Textfit>
          <Textfit 
            min={3}
            max={16}
            style={total} 
            mode="single"
          >
            Всего собрано средств: {donate} р.
          </Textfit>
          <Textfit 
            min={8}
            max={15}
            style={namaste}
            mode="single"
          >
            Намасте 
          </Textfit>
        </header>
        <div style={{ paddingTop: 20 }}>
          <Button style={donateButton} onClick={this.handleClick}>
            <i class="fa fa-credit-card"></i> Донейшн
          </Button>
        </div>
        <Textfit 
          min={8}
          max={20}
          style={benefit}
          mode="single"
        >
          Благотворители:
        </Textfit>
        <Textfit 
          min={8}
          max={38}
          style={names} 
          mode="multi"
        >
          Гея Камская
        </Textfit>
      </div>
    )
  }
}

const styles = {
  header: {
    fontFamily: 'Alegreya Sans SC',
    color: '#DBD7D2',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  mission: {
    fontFamily: 'AppleSDGothicNeo-Light',
    lineHeight: '14px',
    color: '#DBD7D2',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 5
  },
  total: {
    fontFamily: 'AppleSDGothicNeo-Light',
    lineHeight: '1px',
    color: 'white',
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 15
  },
  namaste: {
    fontfamily: 'applesdgothicneo-light',
    lineheight: '3px',
    color: '#dbd7d2',
    alignitems: 'center', 
    justifycontent: 'center',
    paddingTop: 10
  },
  benefit: {
    fontfamily: 'applesdgothicneo-light',
    lineheight: '3px',
    color: '#474747',
    alignitems: 'center', 
    justifycontent: 'center',
    paddingTop: 15
  },
  names: {
    fontfamily: 'applesdgothicneo-light',
    lineheight: '3px',
    color: '#474747',
    alignitems: 'center', 
    justifycontent: 'center',
    paddingTop: 15
  },
  donateButton: {
    backgroundColor: '#BF813E'
  }
}

let fontConfig = {
  google: [
    'Pangolin',
    'Alegreya Sans SC',
    'Roboto Mono',
  ]
}

export default ReactFontFace(Donate, fontConfig)
