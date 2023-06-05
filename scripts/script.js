function generateGrid(number){
    const container=document.querySelector('.container');
    for(let i=0;i<number;i++){
        const innerConatiner=document.createElement('div');
        innerConatiner.classList.add('innerContainer');
        container.appendChild(innerConatiner);
        for(let j=0;j<number;j++){
            const box=document.createElement('div');
            box.classList.add('box');
            box.style.cssText=`width:${(320/number)}px;height:${(320/number)}px;`;
            innerConatiner.appendChild(box);
            box.addEventListener('mouseover',changeColor);
        }
    }
    }

function changeColor(e){
    e.target.setAttribute('id','changeColor');
}
generateGrid(16);
let no=Array.from(document.querySelectorAll('.box'));
let noSquers;
const container=document.querySelector('.container');
const noSquersBtn=document.querySelector('#noSquers');
noSquersBtn.addEventListener('click',function(){
    noSquers=+prompt('Specify No of Squers');
    if(noSquers>100){
        return ;
    }
    else if (noSquers==256){
        return;
    }
    else{
        const innerContainer=document.querySelector('.innerContainer');
        container.textContent="";
        generateGrid(noSquers);
    }
});


