export const subjectValidation = (date, stringified) => {
  let s = (date === 1) ? stringified : `${stringified}s`;
  return `${date} ${s} ago`;
};

export const unixToDate = (time, detailed) =>{
  let date = new Date(time),
      year = date.getUTCFullYear(),
      month = date.getUTCMonth() + 1,
      day = date.getUTCDate(),
      hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds();

  if(detailed){
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  else {
    switch (true) {
      case (time <= 10000): return "just now";
      case (time <= 60000): return subjectValidation(seconds, 'second');
      case (time <= 3600000): return subjectValidation(minutes, 'minute');
      case (time <= 86400000): return subjectValidation(hours, 'hour');
      case (time <= 2678400000): return subjectValidation(day, 'day');
      case (time <= 32140800000): return subjectValidation(month, 'month');
      default: return subjectValidation(year, 'year');
    }
  }
};

export const timeDifference = (timeWhenCreated, detailed) =>{
  let timeNow = +new Date();
  let difference = timeNow - timeWhenCreated;

  if(detailed) return unixToDate(timeWhenCreated, detailed);
  return unixToDate(difference, detailed);
};
