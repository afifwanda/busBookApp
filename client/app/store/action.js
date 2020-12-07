export const getSchedule = (id) => {
  return async dispatch => {
    const result = await fetch(`https://bdbusticket.firebaseio.com/buses/${id}.json`)
    const scheduleResult = await result.json()
    console.log(scheduleResult,'ini result')
    dispatch({
      type:"GET_SCHEDULE",
      payload:{
        scheduleList: scheduleResult
      }
    })
  }
}