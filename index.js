let array = [

    ["Group Id", "Project Name"],
    
    ["G6", "Develop a Software for Categorization of cases"],
    
    ["G8", "Develop a Software for Categorization of cases"],
    
    ["G41", "Crowd Sourcing model for preparing large question \
    banks"],
    
    ["G47", "Crowd Sourcing model for preparing large question \
    banks"],
    
    ["G30", "Online project platform for sharing"],
    
    ["G26", "Online project platform for sharing"],
    
    ["G33", "Centralized grievance system portal"],
    
    ["G38", "Centralized grievance system portal"]
    
    ]

let i,j;
let newtd,newtr;
let txt;
let table=document.querySelector(".tab");

for(i=0;i<array.length;i++)
{

    newtr=document.createElement("tr");
    
    for(j=0;j<2;j++){
        newtd=document.createElement("td");
        
        txt=document.createTextNode(array[i][j]);
        newtd.appendChild(txt);
        newtr.appendChild(newtd);
        newtd.classList.add("tdborder");

    }
    table.appendChild(newtr);
}
table.classList.add("tdborder");
console.log(table.classList);