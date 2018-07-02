import React from 'react'
import ReactDOM from 'react-dom'
import counterReducer from './reducer'
import {createStore} from 'redux'

const store = createStore(counterReducer)

class Statistiikka extends React.Component {

  constructor(props) {
    super(props)
  }

  zeroClick () {
    store.dispatch({type: 'ZERO'})
  }

  render () {
    const palautteita = store.getState()

    if (!palautteita.good && !palautteita.ok && !palautteita.bad) {
      return (
        <div>
          <h2>statistiikka</h2>
          <div>ei yhtään palautetta annettu</div>
        </div>
      )
    }

    return (
      <div>
        <h2>statistiikka</h2>
        <table>
          <tbody>
            <tr>
              <td>hyvä</td>
              <td>{palautteita.good}</td>
            </tr>
            <tr>
              <td>neutraali</td>
              <td>{palautteita.ok}</td>
            </tr>
            <tr>
              <td>huono</td>
              <td>{palautteita.bad}</td>
            </tr>
            <tr>
              <td>keskiarvo</td>
              <td></td>
            </tr>
            <tr>
              <td>positiivisia</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <button onClick={this.zeroClick}>nollaa tilasto</button>
      </div >
    )
  }
}

class App extends React.Component {
  klik = (nappi) => () => {
    store.dispatch({ type: nappi})
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)