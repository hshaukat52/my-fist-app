function myFunction() {
    var table = document.getElementById("mytable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    cell1.innerHTML = document.getElementById("name").value;
    cell2.innerHTML = Gender1();
    cell3.innerHTML = document.getElementById("age").value;
    cell4.innerHTML = document.getElementById("city").value;
    //cell5.innerHTML = <a href="home">Update</a>;
   
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