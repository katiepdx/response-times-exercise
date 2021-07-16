export const addNewTime = (timesArray, time) => {
  // add new time to array if length is less than 10
  if(timesArray.length < 9) timesArray.push(time)
  // great than 10, remove first item, add new item to end
  if(timesArray.length >= 10) {
    timesArray.shift()
    timesArray.push(time)
  }
}
