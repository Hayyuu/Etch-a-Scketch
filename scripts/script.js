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
            if(statusDefault){
                box.addEventListener('mouseover',changeColor);
            }
            else{
                box.addEventListener('mouseover',changeToRandomColor);
            }
        }
    }
    }

function changeColor(e){
    e.target.setAttribute('id','changeColor');
}
function changeToRandomColor(e){
    const box=e.target;
    let rgb1,rgb2,rgb3;
    rgb1=((Math.random()*1000 +25)/4);
    rgb2=((Math.random()*1000 +25)/4);
    rgb3=((Math.random()*1000 +25)/4);
    box.style.backgroundColor=`rgb(${rgb1},${rgb2},${rgb3})`
    
    // box.removeAttribute('id');
    // console.log(box);
    // console.log(box.style.backgroundColor);
    // box.addEventListener('mouseover',function(){
    // box.style.background=`rgb(${rgb1},${rgb2},${rgb3})`;
    // });
}
let statusDefault=true;
generateGrid(16);
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
const randomColor=document.querySelector('#rColor');
randomColor.addEventListener('click',function(){
    statusDefault=false;
    container.textContent="";
    let size=noSquers?noSquers:16;
    generateGrid(size);
});

