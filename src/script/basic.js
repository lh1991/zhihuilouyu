
//右上角时间刷新(一分钟一次)
updateTime()
function updateTime(){
  let time = new Date()
  document.querySelector('.date').innerText=time.getDate()+'/'+(time.getMonth()+1)+'/'+time.getFullYear()
  document.querySelector('.ms').innerText=time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()
  setTimeout(updateTime,  1000)
}
