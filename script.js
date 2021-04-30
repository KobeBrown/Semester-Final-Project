function validate(){
  var mainMenu=document.body.querySelector(".mainmenu");
  var userInput=document.body.querySelector(".userinput");
  var nextMenu=document.body.querySelector(".nextmenu");
  var username=document.body.querySelector(".username").value;
  var password=document.body.querySelector(".password").value;
   
  if(username==="cool"&&password=="password"){
     mainMenu.innerHTML="";
     userInput.innerHTML="";
     writeStuff(pages[0].content);
     for (i=0; i<pages.length; i++){
       new pageMaker(pages[i]);
     }
   }else if(username!=="cool"){
     mainMenu.innerHTML="Username Incorrect";
   }else if(password!=="password"){
     mainMenu.innerHTML="Password Incorrect";
   }
  
}

document.body.querySelector(".validate").addEventListener("click", function(){ validate();
})

var pages =[
  {
    title:"Grade View"
  },
  {
    title:"Add Grade",
  }
  ]

var nextMenu=document.body.querySelector(".nextmenu");
var display=document.body.querySelector(".display");
var nav= document.body.querySelector(".nav");
var makenote=document.body.querySelector(".makenote");
var list=document.body.querySelector(".list");
var listEle=document.body.querySelector(".list2");

function pageMaker(pg){
 this.button=document.createElement("button")
 this.button.addEventListener("click", function(){ writeStuff(pg.content, pg.title);
})
this.button.innerHTML=pg.title;
nav.appendChild(this.button);
}

function writeStuff(stuff, pg){
  if(pg!=="Add Grade"){
    display.innerHTML="";
    renderList();
  }else{
    listEle.innerHTML="";
    addNote()
  }
}

var checkNumber=/^[0-9]+$/;


function addNote(){
  display.innerHTML=""
  var makebutton=document.createElement("button");
  makebutton.innerHTML="Add Note";
  makebutton.addEventListener("click", function(){ submit();
  })
  display.appendChild(makebutton);
  var makenote=document.createElement("input");
  makenote.placeholder="Student Name"
  var makeimp=document.createElement("input");
  makeimp.placeholder="Student Grade (0-100)"
  function submit(){
    var text=(makenote).value;
    var imp=(makeimp).value;
    document.body.querySelector(".list2").innerHTML="";
    document.body.querySelector(".list2").innerHTML="Error: Not enough characters in Name"
 if (imp.length<0){
    document.body.querySelector(".list2").innerHTML="";
    document.body.querySelector(".list2").innerHTML="Error: Not enough characters in Grade"
  }else if(checkNumber.test(imp)&&text.length>0){
    document.body.querySelector(".list2").innerHTML=""
    list.push(text);
    list2.push(imp);
    display.innerHTML="";
    renderList();
  }else if(checkNumber.test(imp)==false){
    document.body.querySelector(".list2").innerHTML="";
    document.body.querySelector(".list2").innerHTML="Error:Not inputed correclty."
  }else{
    document.body.querySelector(".list2").innerHTML="";
    document.body.querySelector(".list2").innerHTML="Error: Not enough characters in Name."
  }
}
display.appendChild(makenote);
display.appendChild(makeimp);
}

var list=[" "];

var list2=[" "];

function renderList(){
  var listEle=document.body.querySelector(".list");
  listEle.innerHTML="";
  
  for(var i=0; i<list.length; i++){
    var element=document.createElement("div");
    element.innerHTML=list[i]+ " "+list2[i];
    listEle.appendChild(element);
  }
}