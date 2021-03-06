import React, { Component } from 'react'
import logo from '../logo.png'
import '../App.css'
import { Textfit } from 'react-textfit'
import ReactFontFace from 'react-font-face'
//import Button from '../../node_modules/muicss/lib/react/button'



class Donate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '100'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {

    const donate = 147

    const { header, namaste, mission, total } = styles
    console.log('state', this.state.value)

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
            {[`Всего собрано средств: ${donate} \u20bd`]}
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
        <div style={{ paddingTop: 15 }}>
          <form onSubmit={this.handleSubmit} style={{ borderTopColor: '#ededed', borderTopWidth:1, alignSelf: 'center', fontSize: 20 }}>
            <select style={{ width: 100 }} value={this.state.value} onChange={this.handleChange}>
              <option value="100">{'100 \u20bd'}</option>
              <option value="300">{'300 \u20bd'}</option>
              <option value="500">{'500 \u20bd'}</option>
              <option value="1000">{'1000 \u20bd'}</option>
              <option value="1500">{'1500 \u20bd'}</option>
              <option value="3000">{'3000 \u20bd'}</option>
            </select>
          </form>
        </div>
        <div style={{ paddingTop: 15 }}>
          <iframe title='Донейшн' src={`https://money.yandex.ru/quickpay/button-widget?targets=%D0%94%D0%BE%D0%BD%D0%B5%D0%B9%D1%88%D0%BD&default-sum=${this.state.value}&button-text=11&any-card-payment-type=on&button-size=m&button-color=orange&successURL=&quickpay=small&account=410014557155872&`} width="194" height="36" frameBorder="0" allowTransparency="true" scrolling="no"></iframe>
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
