const button=document.getElementById('stopbutton')

let time;
time=setInterval(function(){
    const p=document.getElementById('time')
    const now=new Date()
    let year=now.getFullYear()
    let month=now.getMonth()
    let day=now.getDate()
    let hour=now.getHours()
    let min=now.getMinutes()
    let sec=now.getSeconds()

    p.textContent=`${year}/${month}/${day} ${hour}:${min}:${sec}`
}, 1000)


button.addEventListener('click',function(){
    clearInterval(time)
})