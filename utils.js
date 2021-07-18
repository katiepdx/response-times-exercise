export const addNewTime = (timesArray, time) => {
  if(typeof timesArray === 'undefined') return;

  const copyArray = [...timesArray]

  // add new time to array if length is less than 10
  if(copyArray.length < 10) return [...copyArray, time]

  // greater than 10, remove first item, add new item to end
  copyArray.shift()
  return [...copyArray, time]
}

export const drawChart = (timesArray) => {
    // GET CANVAS
    const canvas = document.getElementById('chart')
    const ctx = canvas.getContext('2d')
    
    // BARS
    // (first) bar position
    let x = 5;
    // bar width 
    let width = 40;
    // bar color
    ctx.fillStyle = '#484349';
    
    // ITERATE OVER DISPLAY TIMES + BARS
    timesArray.map(time => {
      // bar height
      const height = time;
      // fill a rectangle with the height of the value
      // left x start, y start, bar width, bar height
      ctx.fillRect(x, canvas.height - height, width, height)
  
      // NEXT BAR
      x = x + width + 10
    })
}
