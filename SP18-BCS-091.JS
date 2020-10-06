var Index1;
function myFunction() {
    var table = document.getElementById("mytable");
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    cell1.innerHTML = document.getElementById("name").value;
    cell2.innerHTML = Gender1();
    cell3.innerHTML = document.getElementById("age").value;
    cell4.innerHTML = document.getElementById("city").value;
    cell5.innerHTML = "<button class='update' onclick='updaterow()'>Update</button> / <button class='remove' onclick='deleteRow(this)'>Remove</button>" 
   
    document.getElementById("name"). value=""
    document.getElementById("Gender1").checked=false;
    document.getElementById("Gender2").checked=false
    document.getElementById("age").value="";
    document.getElementById("city").value="Select an option"

    

}
function myfunction2(){
    document.getElementById("name"). value=""
    document.getElementById("Gender1").checked=false;
    document.getElementById("Gender2").checked=false
    document.getElementById("age").value="";
    document.getElementById("city").value="Select an option"
}

function Gender1(){
    
    if(document.getElementById("Gender1").checked==true)
    {
       var var1= document.getElementById("Gender1").value
        return var1
    } 
    else if(document.getElementById("Gender2").checked==true){
        var var2= document.getElementById("Gender2").value
        return var2
    }
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("mytable").deleteRow(i);
  }
function updaterow(){
    var table= document.getElementById("mytable");
    for(var i=0; i<table.rows.length; i++) {
        table.rows[i].onclick = function() {
        Index1 = this.rowIndex;
        document.getElementById("name").value=this.cells[0].innerHTML
        // Gender1()=this.cells[1].innerHTML
        document.getElementById("age").value=this.cells[2].innerHTML
        document.getElementById("city").value=this.cells[3].innerHTML
    }
}
}
function updatedata(){
    var table= document.getElementById("mytable");
    table.rows[Index1].cells[0].innerHTML = document.getElementById("name").value
    table.rows[Index1].cells[1].innerHTML = Gender1()
    table.rows[Index1].cells[2].innerHTML = document.getElementById("age").value
    table.rows[Index1].cells[3].innerHTML = document.getElementById("city").value

}