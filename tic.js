let counter=0;
let entries=[];
let decided=false;

const entry=(id)=>{
   if(decided===true)
    return;

    if(document.getElementById(id).textContent){
        return alert("please choose another field")
    }
    counter++;
    if(counter%2==0){
        document.getElementById(id).innerHTML="O";
    }
    else if(counter%2!==0){
        document.getElementById(id).innerHTML="X";
    }
    determinewinner();
}
const determinewinner=()=>{
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ];
for(i=0;i<9;i++){
    let c="column"+(i+1);
 entries[i]=document.getElementById(c).innerHTML; 
}
if(counter==9)   
{
    window.location.href = "./khichdi.html";
}
for(const [a, b, c] of win){
if(entries[a] && entries[a] === entries[b] && entries[b] === entries[c]) {
    decided=true;
    if(entries[a]=="X"){ window.location.href = "./winner1.html"; }
    if(entries[a]=="O"){ window.location.href = "./winner2.html"; }
}}}
const restart=()=>{
    window.location.href = "./tic.html";
}