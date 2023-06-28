import './App.css';
import { useState, useEffect } from 'react';

function App2() {
    const name = 'hardik';
    const [curr_player, setcurr_player] = useState('X')

    function nextPlayer() {
        if (curr_player === 'X') setcurr_player((curr_player) => 'O');
        else setcurr_player((curr_player) => 'X');

        //     // console.log("in next player function",curr_player)
        //     // return 1;
    }
    function Button() {
        const [value, setvalue] = useState(null);
        const [count, setCount] = useState(0);

        function updateValue() {
            nextPlayer();
            setCount((count) => (count + 1));
            setvalue('any' + curr_player);

            console.log('back in update value function')
            console.log("update value called", "current player is", curr_player, "value is", value, count);

        }

        // useEffect(() => {
        //   console.log("Updated value:", value);
        //   console.log("Updated count:", count);
        // }, [value, count]);

        return <button onClick={updateValue}>{value}{count} </button>
    }

    return (
        <div className="App">
            <h3>Winner is:{name}</h3>
            <h3>Next player is {curr_player}</h3>
            <div className='row1'>
                {/* <button onClick={nextPlayer}>{value}</button> */}
                <Button />
                <Button />
                <Button />
            </div>
            <div className='row2'>
                <Button />
                <Button />
                <Button />
            </div>
            <div className='row3'>
                <Button />
                <Button />
                <Button />
            </div>

        </div>
    );
}



export default App2;