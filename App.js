// IMPORTS
import { addNewTime } from './utils.js';

// CREATE COMPONENT
const App = () => {
    const [timesArray, setTimesArray] = React.useState([])

    let fetchStart;
    let fetchEnd;
    let responseTime;

    const handleClick = () => {
      fetchStart = Date.now()

      // fetch on click
      fetch('http://localhost:3000/', { mode: 'no-cors'})
        .then(data => console.log('api res: ', data))
        // calc fetch time
        .then(() => {
          fetchEnd = Date.now()
          responseTime = (fetchEnd - fetchStart)

          const updatedArr = addNewTime(timesArray, responseTime)
          
          setTimesArray(updatedArr)
        })

    }

    return (
      React.createElement('div', null, [
        React.createElement('h1', {key: 'h1'}, 'Response Times'),
        React.createElement('div', {key: 'chart-data'}, `Fetch Times Array: ${timesArray}`),
        React.createElement('button', {key: 'fetch-btn', onClick: handleClick}, 'Click')
      ])
    )
}

// RENDER COMPONENT
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
