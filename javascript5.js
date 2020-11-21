
let accounts =[["Value Checking","Premier Checking","Premier Money Market",

"Student Plus Checking","Senior Checking","Community Checking","Chip Cards","Overdraft Protection"

],[
    "Saving Accounts","Premier Savings","Senior Savings(62+)","Student plus Savings"
],["Transfer Funds","Person-to-Person","Wire Transfer","China Remittance"],
["Digital Banking", "Mobile Banking","Online Banking","Velo by Iowa Bank "],
[],[],[],[],[]];






       
     // let subsectionIndex =0;  
      
   //  var mainList = document.createElement("div");
   //  mainList.setAttribute("id","sublistitem");
       
    function generateSecondSection(indexnumber)
    {
        //alert(indexnumber);
        let   accountType=accounts[indexnumber];  // 
  var   subSection= document.getElementById("sub2");
 
 var sb= document.getElementById("sublistitem");


if(sb!=null)
{
    sb.remove();
}
var mainList = document.createElement("div");
     mainList.setAttribute("id","sublistitem");

 
  
/**
 * 
 * [Value Checking","Premier Checking","Premier Money Market",

"Student Plus Checking","Senior Checking","Community Checking","Chip Cards","Overdraft Protection"]
for(int i =0;i<accountType.length; i++)
{

}
 */
  for(let ac of accountType)
  {
      let acListItem = document.createElement("div");
      //acListItem.setAttribute("id","subitemlist"+indexnumber);
      acListItem.appendChild(document.createTextNode(ac));
      // acListItem.innerHTML=ac;
      mainList.appendChild(acListItem);
       
  }
  subSection.appendChild(mainList);
    }

    document.getElementById("personal").addEventListener("click", function(){

        document.getElementById("nav1").style.display="block"
        
        generateSecondSection(0);
        
        
        
        })
        document.getElementById("sub1").addEventListener("mouseexit", function(){
            document.getElementById("sub1").style.display="none"
        }) 

document.getElementById("signup").addEventListener( "click",function(){
    document.getElementById("login").style.display="none"
    document.getElementById("signup1").style.display="block"
   


})

document.getElementById("signin").addEventListener("click", function(){

    document.getElementById("signup1").style.display="none"
    document.getElementById("login").style.display="block"
})


/*
document.getElementById("checking").addEventListener("click", function(){
   
    
     document.getElementById("saving1").style.display="none"
    document.getElementById("saving2").style.display="none"


    })

document.getElementById("saving").addEventListener("click", function(){


    document.getElementById("saving1").style.display="block"
    document.getElementById("saving2").style.display="block"
}) */

