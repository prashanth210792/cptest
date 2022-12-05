import './index.css'
import {Rules} from '../Rules'

export const ResultContainer = props => {
  const {choicesList, systemChoice, yourChoice, restartGame, winDetail} = props
  //   console.log(choicesList)
  const yours = choicesList.filter(each => each.id === yourChoice)
  const systems = choicesList.filter(each => each.id === systemChoice)

  const playAgain = () => {
    restartGame()
  }
  //   console.log(yours)
  return (
    <>
      <div className="result-logos">
        <div>
          <p>YOU</p>
          <img src={yours[0].imageUrl} alt="img" />
        </div>
        <div>
          <p>OPPONENT</p>
          <img src={systems[0].imageUrl} alt="img" />
        </div>
        <div>
          <h1>{winDetail}</h1>
          <button type="button" onClick={playAgain}>
            PLAY AGAIN
          </button>
        </div>
      </div>
      <Rules />
    </>
  )
}
export default ResultContainer
