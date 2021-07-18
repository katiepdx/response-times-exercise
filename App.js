// IMPORTS
import { addNewTime, drawChart } from './utils.js';

// CREATE COMPONENT
const App = () => {
    const [timesArray, setTimesArray] = React.useState([])
    const [stopToggle, setStopToggle] = React.useState(false)

    let fetchStart;
    let fetchEnd;
    let responseTime;

    // GET UPDATED CHART DATA when timesArray updates
    React.useEffect(() => {
      // DRAW CHART with fetch times
      drawChart(timesArray)
    }, [timesArray])

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
      React.createElement('div', {className: 'App'}, [
        // TITLE
        React.createElement('h1', {key: 'h1'}, 'Response Times'),

        // CHART 
        React.createElement('canvas', {key: 'canvas-chart', id: 'chart', height: '200px', width: '500px'}, null),
        // Chart values & labels
        React.createElement('div', {className: 'label-wrapper'}, [
          React.createElement('section', {key: 'chart-x-values', className: 'chart-x-values'}, [
            timesArray.map((time, index) => React.createElement('p', {key: `x-val-${index}`, className: 'x-values'}, time))
          ]),
        ]),
        React.createElement('div', {key: 'x-label', className: 'x-label'}, 'Fetch Times in ms'),

        // START/STOP btn
        React.createElement('button', {key: 'stop-btn', onClick: handleClick}, 'Start/Stop')
      ])
    )
}

// RENDER COMPONENT
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
