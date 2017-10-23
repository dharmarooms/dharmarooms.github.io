import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'

const styles = {
  mission: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 15,
    lineHeight: '14px',
    color: '#DBD7D2',
    alignItems: 'center', justifyContent: 'center'
  },
  total: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 16,
    lineHeight: '1px',
    color: 'white',
    alignItems: 'center', justifyContent: 'center'
  },
  namaste: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 16,
    lineHeight: '3px',
    color: '#DBD7D2',
    alignItems: 'center', justifyContent: 'center'
  }
}

const donate = 49

class App extends Component {
  render() {
    const { namaste, mission, total } = styles
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">#Дхарма</h1>
          <p style={mission}> 
            Миссия приложения - это проведение света дхармы в мир адхармы и Ваша поддержка позволит уделять нашему общему делу больше времени. <br/>В планах пополнить библиотеку более 700 духовными книгами и перевести на все языки мира. 
            <br/>Благодаря выбранному цифровому формату эти книги будут существовать не одно поколение духовных искателей.
          </p>
          <p style={total}> 
            Всего собрано средств: {donate} р.
          </p>
          <p style={namaste}> 
            Намасте 
          </p>
          
        </header>
        <iframe title="Донейшн" src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%94%D0%BE%D0%BD%D0%B5%D0%B9%D1%88%D0%BD&targets-hint=&default-sum=&button-text=11&payment-type-choice=on&hint=&successURL=&quickpay=shop&account=410015631248809" width="350" height="198" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
      </div>
    )
  }
}

export default App
