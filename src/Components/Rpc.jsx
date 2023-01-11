// import './Rpc.css';
import React, {useState, useEffect} from 'react';

const Rpc = () => {
    const [userChoice, setUserChoice] = useState('rock')
    const [compChoice, setCompChoice] = useState('rock')
    const [userPoints, setUserPoints] = useState(0)
    const [compPoints, setCompPoints] = useState(0)
    const [turnResult, setTurnResult] = useState(null)
    const [result, setResult] = useState('Let\'s see who wins')
    const [gameOver, setGameOver] = useState(false)

    const choices = ['rock','paper', 'scissors']

    const handleOnClick = (choice) => {
      if (gameOver) {
        window.alert("Game Over! Restart To Play Again!")
      }
      else{
        setUserChoice(choice)
        generateCompChoice()
      }
    }

    const generateCompChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() *choices.length )]
        console.log(randomChoice)
        setCompChoice(randomChoice)
    }

    const reset = () => {
        window.location.reload()
    }
    
    useEffect(() =>{

        const comboMoves = userChoice + compChoice 
        if (userPoints <=4 && compPoints <=4) {
            if(comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper') {
            const updatedUserPoints = userPoints + 1;
            setUserPoints(updatedUserPoints)
            setTurnResult('User got the point')
            if (updatedUserPoints === 5) {
                setGameOver(true)
                setResult('User Wins !')
            }
            }

            if (comboMoves === 'scissorsrock' || comboMoves === 'rockpaper' || comboMoves === 'paperscissors') {
            const updatedCompPoints = compPoints + 1;
            setCompPoints(updatedCompPoints)
            setTurnResult('Computer got the point')
            if (updatedCompPoints === 5) {
                setGameOver(true)
                setResult('Computer Wins !')
            }
            }

            if (comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors') {
            setTurnResult('No one got a point.')
            }
        }
    }, [userChoice, compChoice])
    return (
    <>
    <div className='text-white text-center h-[115vh] font-sans'>
      <h1 className="heading text-5xl">Rock Paper Scissors</h1>
      
      <div className="score h-[20vh] flex justify-around items-center">
        <h1 className='text-3xl'>User Points: {userPoints}</h1>
        <h1 className='text-3xl'>Computer Points: {compPoints}</h1>
      </div>

      <div className="choice h-[25vh] flex justify-center">
        <div className="choice-user">
          {/* <img src={`../images/${userChoice}.png`} alt="userhand" id='user' className="user-hand"/> */}
          <img src={`https://github.com/pranish0-0/projects/blob/main/public/images/${userChoice}.png?raw=true'`} alt="userhand" id='user' className="user-hand"/>
          <p>{userChoice}</p>
        </div>
        <div className="choice-comp">
          <img src={`https://github.com/pranish0-0/projects/blob/main/public/images/${compChoice}.png?raw=true'`} alt="compthand" id='com' className="comp-hand" />
          <p>{compChoice}</p>
        </div>
      </div>

      <div children="button-div">
        {choices.map((choice, index) =>
          <button className='button' key={index} onClick={() => handleOnClick(choice)}>
            {choice}
          </button>
        )}
      </div>

      <div className="result p-12 ">
        <h1 className='text-3xl w-full'>Turn Result: {turnResult}</h1>
        <h1 className='text-3xl'>Final Result: {result}</h1>
      </div>

      <div className="button-div flex justify-center p-5">
        {gameOver ? <button className='button w-36 h-12 text-xl items-center justify-around bg-[rgba(255,127,80)] border rounded-md m-2' onClick={() => reset()}>Restart Game ?</button> : <button></button>}
      </div>

    </div>
    </>
    )
}

export default Rpc
