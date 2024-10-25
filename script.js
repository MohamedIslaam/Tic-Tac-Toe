const box=document.getElementsByClassName("boxs");
const res=document.querySelector("h1");
const turn=document.querySelector("h2");
const plr1=document.getElementById("plr1");
const plr2=document.getElementById("plr2");
const btn=document.getElementById("reset");
let plr=["X","O"];
let ch=0;
let win=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let x=[]
let o=[]

function winfun(lis){
    let res = win.some(combination => 
    combination.every(index => lis.includes(index))
    );
    return res;
}


function col() {
    plr1.style.backgroundColor = "#213139"; // Both players turn gray
    plr2.style.backgroundColor = "#213139";
}

function alwin(){
    if(winfun(x)){
        res.innerHTML="X wins";
        col()
    }else if(winfun(o)){
        // alert("o wins");
        res.innerHTML="O wins";
        col()
    }
}


for(let i=0;i<box.length;i++){
    box[i].addEventListener('click',()=>{
        if(box[i].innerHTML == "X" || box[i].innerHTML == "O"){
            res.innerHTML=`Mark ${plr[ch]} in other place`;
        }
        else{
            res.innerHTML="";
            box[i].innerHTML=plr[ch];
            plr[ch]=="X"?x.push(i):o.push(i)
            ch=1-ch
            if(plr[ch]=="X"){
                plr1.style.backgroundColor="#3a5664"
                plr2.style.backgroundColor="#213139"
            }else{
                plr1.style.backgroundColor="#213139"
                plr2.style.backgroundColor="#3a5664"
            }
            alwin()
        }
    });
}

btn.addEventListener('click',()=>{
    location.reload()
})