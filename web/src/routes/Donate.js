import React, { Component } from 'react'
import logo from '../logo.png'
import '../App.css'
import { Textfit } from 'react-textfit'
import ReactFontFace from 'react-font-face'
//import Button from '../../node_modules/muicss/lib/react/button'

const donate = 49

class Donate extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {

    const { header, namaste, mission, total } = styles

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
        <div style={{ paddingTop: 36 }}>
          <input
            style={{height: 30, width: 160, borderColor: 'gray', borderWidth: 1 }}
            type="number" pattern="[0-9]*" inputMode="numeric"
            value={this.state.cost}
            placeholder=' введите сумму'
            onChange={this.handleChange} 
          />
        </div>
        <div style={{ paddingTop: 5 }}>
          <iframe title='Донейшн' src={`https://money.yandex.ru/quickpay/button-widget?targets=%D0%94%D0%BE%D0%BD%D0%B5%D0%B9%D1%88%D0%BD&default-sum=${this.state.value}&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&successURL=&quickpay=small&account=410015631248809&`} width="184" height="36" frameBorder="0" allowTransparency="true" scrolling="no"></iframe>
        </div>
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
}

let fontConfig = {
  google: [
    'Pangolin',
    'Alegreya Sans SC',
    'Roboto Mono',
  ]
}

export default ReactFontFace(Donate, fontConfig)
