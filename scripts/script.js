const container=document.querySelector('.container');
for(let i=0;i<16;i++){
    const innerConatiner=document.createElement('div');
    innerConatiner.classList.add('innerContainer');
    container.appendChild(innerConatiner);
    for(let j=0;j<16;j++){
        const box=document.createElement('div');
        box.classList.add('box');
        innerConatiner.appendChild(box);
        box.addEventListener('mouseover',changeColor);
    }
}
let noSquers;
const noSquersBtn=document.querySelector('#noSquers');
noSquersBtn.addEventListener('click',function(){
    noSquers=prompt('Specify No of Squers');
});
function changeColor(e){
    e.target.setAttribute('id','changeColor');
    console.log(e.target.id);
}

