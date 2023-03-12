let count =0;
function buttonClicked(){
    ++count;
    console.log('butten clicked ${count}');
    changeColor();

}

function changeColor(){
    console.log(count);
}