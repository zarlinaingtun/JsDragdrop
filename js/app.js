//UI
const empties=document.querySelectorAll('.empty');
const picdiv=document.querySelector('.fill');

console.log(picdiv);
picdiv.addEventListener('dragstart',dragstart);
picdiv.addEventListener('dragend',dragend);

empties.forEach(empty=>{
    empty.addEventListener('dragover',dragover);
    empty.addEventListener('dragenter',dragenter);
    empty.addEventListener('dragleave',dragleave);
    empty.addEventListener('drop',dragdrop);
    // console.log(empty);

});
// ES6 .can looping object5-specific iterator value
// for(const empty of empties){
//     console.log(empty);
// }
// =>numerable property name of an object
// for(const empty in empties){
//     console.error(empty);
// }

// DRAG START
function dragstart(){
    // console.log('drag start is working');

    // this.classList.add('hold');
    this.className +=" hold";
    setTimeout(()=>{
        this.className="invisible";
    },0);

}

// DRAG END
function dragend(){
    // console.log('drag end is working');
    this.className="fill";
}
// DRAG OVER
function dragover(e){
    e.preventDefault();
    // console.log('drag over is working');    
}
// DRAG ENTER
function dragenter(e){
    e.preventDefault();
    // console.log('drag enter is working'); 
    this.className +=" hovered";
}
// DRAG Leave
function dragleave(e){
    e.preventDefault();
    // console.log('drag leave is working');
    this.className="empty";
}
// DRAG DROP
function dragdrop(){
    // console.lsog('drag drop is working');
    this.className="empty";
    this.appendChild(picdiv);
}
