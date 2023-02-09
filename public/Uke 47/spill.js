// let time = new Date().getTime()
console.log(time);
let bodyEl = document.querySelector("body")
let new_time;
let old_time;

function click(){
    if (new_time){
old_time = new_time
new_time = new Date().getTime()
console.log(new_time-old_time)
}else{new_time = new Date().getTime()}

}

addEventListener(bodyEl,click)