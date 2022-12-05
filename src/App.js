import './App.css'
import {Component} from 'react'
import {ScoreBoard} from './component/ScoreBoard'
import {ResultContainer} from './component/ResultContainer'
import {Rules} from './component/Rules'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton ',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

class App extends Component {
  state = {
    score: 0,
    systemChoice: '',
    yourChoice: '',
    displayResult: false,
    winDetail: '',
  }

  componentDidMount() {
    this.randomItem()
  }

  randomItem = () => {
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    console.log(randomNumber)
    this.setState({systemChoice: choicesList[randomNumber].id})
  }

  selectedOption = event => {
    const {systemChoice, score} = this.state
    const selectedChoice = event.target.id
    console.log(selectedChoice)
    // const selectedChoice = event.target.id

    // switch (selectedChoice){
    //     case ("ROCK"){

    //     }
    // }
    if (selectedChoice === systemChoice) {
      this.setState({
        yourChoice: selectedChoice,
        winDetail: 'IT IS DRAW',
      })
    } else if (selectedChoice === 'ROCK') {
      if (systemChoice === 'SCISSORS') {
        this.setState({
          score: score + 1,
          winDetail: 'YOU WON',
        })
      } else {
        this.setState({
          score: score - 1,
          winDetail: 'YOU LOSE',
        })
      }
    } else if (selectedChoice === 'SCISSORS') {
      if (systemChoice === 'PAPER') {
        this.setState({
          score: score + 1,
          winDetail: 'YOU WON',
        })
      } else {
        this.setState({
          score: score - 1,
          winDetail: 'YOU LOSE',
        })
      }
    } else if (selectedChoice === 'PAPER') {
      if (systemChoice === 'ROCK') {
        this.setState({
          score: score + 1,
          winDetail: 'YOU WON',
        })
      } else {
        this.setState({
          score: score - 1,
          winDetail: 'YOU LOSE',
        })
      }
    }
    // console.log(selectedChoiceitem)
    this.setState({yourChoice: selectedChoice, displayResult: true})
  }

  restartGame = () => {
    this.setState({displayResult: false}, this.randomItem)
  }

  render() {
    const {
      score,
      yourChoice,
      systemChoice,
      displayResult,
      winDetail,
    } = this.state
    // console.log(systemChoice)
    // console.log(yourChoice)
    return (
      <div className="bg-container">
        <ScoreBoard score={score} />
        {displayResult ? (
          <ResultContainer
            choicesList={choicesList}
            systemChoice={systemChoice}
            yourChoice={yourChoice}
            restartGame={this.restartGame}
            winDetail={winDetail}
          />
        ) : (
          <>
            <ul className="ul-container">
              {choicesList.map(each => (
                <button
                  className="btn-element"
                  key={each.id}
                  type="button"
                  data-testid={each.testId}
                  //   id={each.id}
                  //   id="ggg"
                  //   onClick={this.selectedOption}
                >
                  <img
                    // data-testid={each.testId}
                    src={each.imageUrl}
                    alt={each.id}
                    // type="button"
                    id={each.id}
                    onClick={this.selectedOption}
                  />
                </button>
              ))}
            </ul>
          </>
        )}
        <Rules />
      </div>
    )
  }
}

export default App
