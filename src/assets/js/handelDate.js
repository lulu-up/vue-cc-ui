export function getYMD(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
     return {
        year, month, day
     }
}

export const getDayCountOfMonth = function(year, month) {
    if (month === 3 || month === 5 || month === 8 || month === 10) {
      return 30;
    }
  
    if (month === 1) {
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    }
  
    return 31;
  };