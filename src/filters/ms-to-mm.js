const filter = {}

function convertMsToMm (ms){
  const min = Math.floor(ms/60000);
  const sec = (( ms%60000/1000).toFixed(0))
  let duration = '';
  sec > 10 ? duration = `${min}:${sec}` : duration = `${min}:0${sec}`;
  return duration;
}

filter.install = function(Vue){
  Vue.filter('msToMm', (val) => {
    return convertMsToMm(val);
  });
}

export default filter;
