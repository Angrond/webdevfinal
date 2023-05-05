let sajat_obj ={
    project : [],
    }
let objnyelvek ={
    nyelvek : [],
}
var lastid=-1;
function tabla(){
    document.getElementById("bg").innerHTML='<table class="table table-striped-columns" id="tablazat"><thead><h2>Projectek:</h2><hr></thead><tbody id="tabla"><tr><td><h5>Project Neve</h5></td><td><div class="dropdown"><button class="dropbtn" id="nobtn"><h5>Programozási nyelvek</h5></button><div class="dropdown-content" id="ddm"></div></div></td><td><h5>Link</h5></td></tr></tbody></table>'
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
    tabla()
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
function nyelvgombok()
{
    objnyelvek ={
        nyelvek : [],
    }
    fetch("http://127.0.0.1:8000/api/languages/")
    .then(data => data.json())
    .then(adat => {
        for (let i=0; i<adat.length; i++){
            objnyelvek.nyelvek.push(adat[i]);
            }
        document.getElementById("ddm").innerHTML='<button onclick="feltolt()">Mind</button>';
        for(let i=0; i<objnyelvek.nyelvek.length; i++)
        {
            
            document.getElementById("ddm").innerHTML+="<button onclick='keres(&apos;"+objnyelvek.nyelvek[i].name+"&apos;)'>"+objnyelvek.nyelvek[i].name+"</button>"
        };    
        
    })
}
function feltolt()
{
    apitolt();
    nyelvgombok();
}
function keres(nyelv){
    tabla();
    for (let i = 0; i < sajat_obj.project.length; i++) {
        for (let j = 0; j < sajat_obj.project[i].languages.length; j++) {
            if (sajat_obj.project[i].languages[j].name.includes(nyelv)) {
            var a=""
            a=nyelvek(i);
            document.getElementById("tabla").innerHTML+="<tr id='sor'><td onclick='description("+i+")' >"+sajat_obj.project[i].name+"</td><td onclick='description("+i+")'>"+a+"</td><td><a href='"+sajat_obj.project[i].link+"' target='blank_'>Nézd meg</a></td></tr>";
            }
        } 
    }
    nyelvgombok();
}
function description(id){
    if (id==lastid) {
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
        lastid=id;
        }
    }
    else{
        closedesc();
        let tableRef = document.getElementById("tabla");
        let newRow = tableRef.insertRow(id+2);
        newRow.id="desc";
        let newCell = newRow.insertCell(0);
        newCell.colSpan=3;
        let newText = document.createTextNode(sajat_obj.project[id].description);
        newCell.appendChild(newText);
        lastid=id;
    }    
}
function closedesc(){
    try {
        var row = document.getElementById("desc");
        var table = row.parentNode;
        table.deleteRow(row.rowIndex);
    } catch (error) {} 
    lastid=-1;
}