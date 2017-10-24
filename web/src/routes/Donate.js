import React, { Component } from 'react'
import logo from '../logo.png'
import '../App.css'
import { Textfit } from 'react-textfit'
import ReactFontFace from 'react-font-face'

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
}

const donate = 49

class Donate extends Component {
  render() {

    const { header, namaste, mission, total, benefit, names } = styles

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
        <iframe title='Донейшн' src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%94%D0%BE%D0%BD%D0%B5%D0%B9%D1%88%D0%BD&targets-hint=&default-sum=&button-text=14&payment-type-choice=on&comment=on&hint=%D0%98%D0%BC%D1%8F%20%D0%BF%D0%BE%20%D0%B6%D0%B5%D0%BB%D0%B0%D0%BD%D0%B8%D1%8E&successURL=&quickpay=shop&account=410015631248809" width="325" height="270" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
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

let fontConfig = {
  google: [
    'Pangolin',
    'Alegreya Sans SC',
    'Roboto Mono',
  ]
}

export default ReactFontFace(Donate, fontConfig)
