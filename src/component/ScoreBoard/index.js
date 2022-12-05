import './index.css'

export const ScoreBoard = props => {
  const {score} = props
  return (
    <div className="score-board-container">
      <div>
        {/* <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p> */}
        <h1>Rock Paper Scissors</h1>
      </div>
      <div className="score-board">
        <p>Score</p>
        <p>{score}</p>
      </div>
    </div>
  )
}
export default ScoreBoard
