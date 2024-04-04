import { Component } from '@angular/core';

@Component({
  selector: 'app-main',

  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  table:any[]=
  [
    {id:1,Name:"Addidas SportWaer",Category:"المالية",date:"3/2024",result:"100/27"},
    {id:2,Name:"Netflix",Category:"الموارد البشرية",date:"3/2024",result:"100/33"},
    {id:3,Name:"Shopifi Stores",Category:"التسويق",date:"3/2024",result:"100/55"},
    {id:4,Name:"Boostrap Technologies",Category:"المالية",date:"3/2024",result:"100/27"},
    {id:5,Name:"Community First",Category:"المالية",date:"3/2024",result:"100/27"},
    {id:6,Name:"Addidas SportWaer",Category:"المالية",date:"3/2024",result:"100/27"}

  ]
  





   showTable() {
 var tableId=document.getElementById("table")
    var iconsNames=document.getElementsByName("iconsTest")
    iconsNames.forEach((i)=>{

      i.classList.add("d-none")
    })
    tableId?.classList.remove("d-none")
    
 }
  

  hidden(){
    var tableId=document.getElementById("table")
var iconsNames=document.getElementsByName("iconsTest")
iconsNames.forEach((i)=>{

  i.classList.remove("d-none")
})
tableId?.classList.add("d-none")

  }

}
