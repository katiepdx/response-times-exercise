// IMPORTS
import { addNewTime } from './utils.js';

// CREATE COMPONENT
class App extends React.Component {
  render() {
    // FETCH TIMES
    const fetchStart = Date.now()
    let fetchEnd;
    let responseTime;

    // RESPONSE DATA
    // TODO: set back to empty array
    const timesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // API FETCH
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(data => console.log('api res: ', data))
      // calc fetch time
      .then(() => {
        fetchEnd = Date.now()
        responseTime = fetchEnd - fetchStart
        addNewTime(timesArray, responseTime)
        console.log(timesArray)
      })

    return (
      React.createElement('div', null, [
        React.createElement('div', {key: 'chart-data'}, `Fetch Times Array: ${timesArray}`),
        React.createElement('button', {key: 'fetch-btn'}, 'Click')
      ])
    )
  }
}

// RENDER COMPONENT
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
