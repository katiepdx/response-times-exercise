// IMPORTS
import { addNewTime } from './utils.js';

// CREATE COMPONENT
const App = () => {
    const [timesArray, setTimesArray] = React.useState([])
    const [stopToggle, setStopToggle] = React.useState(false)

    let fetchStart;
    let fetchEnd;
    let responseTime;

    // SET TIME INTERVAL - makes fetch every second
    const fetchInterval = setTimeout(() => {      
      fetchStart = Date.now()
      
      fetch('http://localhost:3000/', { mode: 'no-cors'})
        .then(data => console.log('api res: ', data))
        .then(() => {
          // calc fetch time
          fetchEnd = Date.now()
          responseTime = (fetchEnd - fetchStart)
          
          const updatedArr = addNewTime(timesArray, responseTime)
          
          setTimesArray(updatedArr)
        });
  
    }, 1000)
    
    // START/STOP fetch interval
    if(stopToggle === false) fetchInterval
    if(stopToggle === true) clearInterval(fetchInterval) 
    
    // TOGGLE start/top
    const handleClick = () => setStopToggle(!stopToggle)

    return (
      React.createElement('div', null, [
        React.createElement('h1', {key: 'h1'}, 'Response Times'),
        React.createElement('div', {key: 'chart-data'}, `Fetch Times Array: ${timesArray}`),
        React.createElement('button', {key: 'stop-btn', onClick: handleClick}, 'Start/Stop')
      ])
    )
}

// RENDER COMPONENT
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
