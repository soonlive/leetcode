/**
 * Created by Xin on 2022/3/1.
 */


const intervals = {
  'year': 31536000,
  'month': 2592000,
  'day': 86400,
  'hour': 3600,
  'minute': 60,
  'second': 1,
};


function timeSince(date){
  let deltaSeconds = Math.floor((Date.now()- date.getTime()))/1000;

  let intervalKey =  Object.keys(intervals).find((key) => {
    return intervals[key] < deltaSeconds;
  });


}
