import Button from "./components/Button";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // const name='hardik';
  const [name, setName] = useState("");
  const [curr_player, setcurr_player] = useState("X");
  // const gameArray=new Array(9).fill(0);
  const [gameArray, setGameArray] = useState(new Array(9).fill(0));
  console.log(gameArray);
  function nextPlayer(position) {
    const updatedGameArray = [...gameArray]; // Create a copy of the gameArray


    updatedGameArray[position] = curr_player;

    setGameArray(updatedGameArray);

    if (curr_player === "X") setcurr_player((curr_player) => "O");
    else setcurr_player((curr_player) => "X");
  }

  useEffect(() => {
    function checkWinner() {
      for (let i = 0; i < 9; i += 3) {
        if (
          gameArray[i] !== 0 &&
          gameArray[i] === gameArray[i + 1] &&
          gameArray[i + 1] === gameArray[i + 2]
        ) {
          setName(gameArray[i]);
          return;
        }
      }
      for (let i = 0; i < 3; i++) {
        if (
          gameArray[i] !== 0 &&
          gameArray[i] === gameArray[i + 3] &&
          gameArray[i + 3] === gameArray[i + 6]
        ) {
          setName(gameArray[i]);
          return;
        }
      }
      if (
        gameArray[0] !== 0 &&
        gameArray[0] === gameArray[4] &&
        gameArray[4] === gameArray[8]
      ) {
        setName(gameArray[0]);
        return;
      }
      if (
        gameArray[2] !== 0 &&
        gameArray[2] === gameArray[4] &&
        gameArray[4] === gameArray[6]
      ) {
        setName(gameArray[2]);
        return;
      }
    }
    checkWinner();
  }, [curr_player]);

  return (
    <div className="App">
      <h3>Winner is:{name}</h3>
      
      <h3>Next player is {curr_player}</h3>
      <div className="row">
        <Button currPlayer={curr_player} nextPlayer={nextPlayer} position="0" name={name}/>
        <Button currPlayer={curr_player} nextPlayer={nextPlayer} position="1" name={name}/>
        <Button currPlayer={curr_player} nextPlayer={nextPlayer} position="2" name={name}/>
      </div>
      <div className="row">
        <Button currPlayer={curr_player} nextPlayer={nextPlayer} position="3" name={name}/>
        <Button currPlayer={curr_player} nextPlayer={nextPlayer} position="4" name={name}/>
        <Button currPlayer={curr_player} nextPlayer={nextPlayer} position="5" name={name}/>
      </div>
      <div className="row">
        <Button currPlayer={curr_player} nextPlayer={nextPlayer} position="6" name={name}/>
        <Button currPlayer={curr_player} nextPlayer={nextPlayer} position="7" name={name}/>
        <Button currPlayer={curr_player} nextPlayer={nextPlayer} position="8" name={name}/>
      </div>
    </div>
  );
}

export default App;
