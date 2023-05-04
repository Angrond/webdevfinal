let sajat_obj ={
    project : [],
    }
function feltolt()
{
    api();
    document.getElementById("bod").innerHTML+="<p>a</p>";
}
function nyelvek(i)
{
    lista="";
    for (let index = 0; index < sajat_obj.project[i].languages.length; index++) {
        nyelvek+=sajat_obj.project[i].languages[index]+" "
        
    };
    return lista;
}
function api()
{
    fetch("http://127.0.0.1:8000/api/projects/")
    .then(data => data.json())
    .then(adat => {
        for (let i=0; i<adat.length; i++){
            sajat_obj.project.push(adat[i]);
            }
        for(let i=0; i<sajat_obj.project.length; i++)
        {
            var a=""
            a=nyelvek(i);
            document.getElementById("tabla").innerHTML+="<tr><td onclick='description("+i+")'>"+sajat_obj.project[i].name+"</td><td onclick='description("+i+")'>"+
            a 
            +"</td><td><a href='"+sajat_obj.project[i].link+"'>"+sajat_obj.project[i].link+"</a></td></tr>";
        };    
    })
}

function description(id){
    if(document.getElementById("desc")){
        
        var row = document.getElementById("desc");
        var table = row.parentNode;
        
        table.deleteRow(row.rowIndex);
    }
    else{
    let tableRef = document.getElementById("tabla");
    
    let newRow = tableRef.insertRow(id+2);
    newRow.id="desc";
    let newCell = newRow.insertCell(0);
    let newText = document.createTextNode(sajat_obj.project[id].description);
    newCell.appendChild(newText);
    }
    
}