var myarray = [];
function myfun() {
    sno = document.getElementById("in1").value,
        namem = document.getElementById("in2").value,
        pmark = document.getElementById("in3").value;
    cmark = document.getElementById("in4").value;

    // document.getElementById("demo").innerHTML=sno;
    let myobj = {
        sno: sno,
        myname: namem,
        mathm: pmark,
        science: cmark
    };

    myarray.push(myobj);
    // document.getElementById("demo").innerHTML=myarray;

    mystore();

}

function mystore() {
    myarray.sort(function(a,b){ return b.mathm - a.mathm;});
    let datastring = JSON.stringify(myarray);
    localStorage.setItem("mylocaldata", datastring);
}
// mystore();

function getdatalocal(){
    let mygetdata=localStorage.getItem('mylocaldata');
    // console.log("strig- ",mygetdata);
    let alldata=JSON.parse(mygetdata);
    // console.log("obj- ",alldata);

    alldata.forEach((i,index) => {
        document.getElementById("tbody").innerHTML +=
      `<tr>
        <td>${index+1}</td> 
         <td>${i.sno}</td> 
         <td>${i.myname}</td>
         <td>${i.mathm}</td>
         <td>${i.science}</td>  
        
        
     </tr>`;
    });
}
getdatalocal();