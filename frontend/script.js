let sajat_obj ={
    project : [],
    }
let objnyelvek ={
    nyelvek : [],
}
function nyelvek(i)
{
    let lista="";
    for (let index = 0; index < sajat_obj.project[i].languages.length; index++) {
        lista+=sajat_obj.project[i].languages[index].name+" ";
    };
    return lista;
}
function apitolt()
{
    try { 
        for(let i=0; i<sajat_obj.project.length; i++)
        {
        const element=document.getElementById("sor");
        element.remove();
        }
        } catch (error) {}
        sajat_obj ={
        project : [],
    }
    fetch("http://127.0.0.1:8000/api/projects/")
    .then(data1 => data1.json())
    .then(adat1 => {
        for (let i=0; i<adat1.length; i++){
            sajat_obj.project.push(adat1[i]);
        }
        for(let i=0; i<sajat_obj.project.length; i++)
        {
            var a=""
            a=nyelvek(i);
            document.getElementById("tabla").innerHTML+="<tr id='sor'><td onclick='description("+i+")' >"+sajat_obj.project[i].name+"</td><td onclick='description("+i+")'>"+a+"</td><td><a href='"+sajat_obj.project[i].link+"' target='blank_'>Nézd meg</a></td></tr>";
        };    
    })
}
function feltolt()
{
    closedesc();
    apitolt();
    fetch("http://127.0.0.1:8000/api/languages/")
    .then(data => data.json())
    .then(adat => {
        for (let i=0; i<adat.length; i++){
            objnyelvek.nyelvek.push(adat[i]);
            }
        for(let i=0; i<objnyelvek.length; i++)
        {
            document.getElementById("dropdown-content").innerHTML+="<button onclick='keres()'>"+objnyelvek.nyelvek[i].name+"</button>"
        };    
        console.log(objnyelvek)
    })
}
function keres(){

}
function description(id){
    if(document.getElementById("desc")){
        closedesc();
    }
    else{
    let tableRef = document.getElementById("tabla");
    let newRow = tableRef.insertRow(id+2);
    newRow.id="desc";
    let newCell = newRow.insertCell(0);
    newCell.colSpan=3;
    let newText = document.createTextNode(sajat_obj.project[id].description);
    newCell.appendChild(newText);
    }
}
function closedesc(){
    try {
        var row = document.getElementById("desc");
        var table = row.parentNode;
        table.deleteRow(row.rowIndex);
    } catch (error) {} 
}