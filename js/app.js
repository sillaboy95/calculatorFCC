var arr = ["0"]
var str = "0";
var keepTrack= ["0"]
 $("#display").text(str)
 
 var nums=["1", "2", "3", "4","5", "6", "7", "8", "9"]
 var operators=["*", "+", "/"]
 var operatorsWithMinus = ["*", "+", "/", "-"]
 var result="";
var test = "test"
 
 function minusFunction() {
   keepTrack=[""]
   if (result!=="") {
    arr=[result]
    keepTrack=[result]
    str=result
    result=""
  }
  if (arr[arr.length-1]==="-") {
  arr.pop();
  
  arr.push(event.target.value);
  
  str=arr.join('');
  $("#display").text(str)
  } else if (str==="0") {
    arr.pop()
    str=arr.join('')
    $("#display").text(str)
  } else {
    arr.push(event.target.value)
         str=arr.join('')
         $("#display").text(str)
  }
 }
 
function ACfunction() {
   arr = ["0"]
   keepTrack=["0"]
   str=arr.join('')
   $("#display").text(str)
 }

function numsFunction() {
   if (result!=="") {
     result=""
     arr=["0"]
     keepTrack=["0"]
     str="0"
   }
   if (str==="0") {
         arr.pop()
         keepTrack.pop()
         arr.push(event.target.value)
     keepTrack.push(event.target.value)
         str=arr.join('')
         $("#display").text(str)
     } else{
         arr.push(event.target.value)
       keepTrack.push(event.target.value)
         str=arr.join('')
         $("#display").text(str)
       }
}

function operatorsFunction() {
  keepTrack=[""]
  if (result!=="") {
    arr=[result]
    str=result
    result=""
  } 
  if (operators.includes(arr[arr.length-2])&&arr[arr.length-1]==="-") {
    arr.pop();
    arr.pop();
  arr.push(event.target.value);
  str=arr.join('');
  $("#display").text(str)
  }
  
 else if (operatorsWithMinus.includes(arr[arr.length-1])) {
  arr.pop();
  arr.push(event.target.value);
  str=arr.join('');
  $("#display").text(str)
  } else if (str==="0") {
    arr.pop()
    arr.push(event.target.value)
    str=arr.join('')
    $("#display").text(str)
  } else {
    arr.push(event.target.value)
         str=arr.join('')
         $("#display").text(str)
  }
}

function equalFunction() {
  result=eval(str);
  $("#display").text(result)
  
  
}

function zeroFunction() {
  if (result!=="") {
     result=""
     arr=["0"]
     keepTrack=["0"]
     str="0"
   }
   if (arr[arr.length-1]==="0" && operators.includes(arr[arr.length-2])) {
     arr.pop()
     keepTrack.pop();
         arr.push(event.target.value)
     keepTrack.push(event.target.value)
         str=arr.join('')
         $("#display").text(str)
   }
  else if (str==="0") {
         arr.pop()
    keepTrack.pop();
         arr.push(event.target.value)
    keepTrack.push(event.target.value)
         str=arr.join('')
         $("#display").text(str)
     } else{
         arr.push(event.target.value)
       keepTrack.push(event.target.value)
         str=arr.join('')
         $("#display").text(str)
       }
}

function dotFunction() {
  if (result!=="") {
     result=""
     arr=["0"]
     keepTrack=["0"]
     str="0"
   }
  if (!keepTrack.includes(".")&&keepTrack!==[""]&&!operatorsWithMinus.includes(arr[arr.length-1])) {
    arr.push(event.target.value)
       keepTrack.push(event.target.value)
         str=arr.join('')
         $("#display").text(str)
  }
}

  
$("button").on("click", function(event){
        
       if(event.target.value==="AC"){
         ACfunction();
       } 
       else if(nums.includes(event.target.value)) {
         numsFunction();
    }  else if(operators.includes(event.target.value)) {
      operatorsFunction();
    }
      else if(event.target.value==="=") {
        equalFunction();
      }
      else if(event.target.value==="0") {
        zeroFunction();
      }
      else if(event.target.value==="-") {
        minusFunction();
      }
      else if(event.target.value===".") {
        dotFunction();
      }
    });





console.log($("#display").text()===str)
