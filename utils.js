export const addNewTime = (timesArray, time) => {
  if(typeof timesArray === 'undefined') return;

  const copyArray = [...timesArray]

  // add new time to array if length is less than 10
  if(copyArray.length < 10) return [...copyArray, time]

  // greater than 10, remove first item, add new item to end
  copyArray.shift()
  return [...copyArray, time]
}
