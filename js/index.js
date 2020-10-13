
function test()
{
    var userInp = document.getElementById("userInp").value;
    var result = 0;
   for(var i = 0 ; i < 12 ; i++)
   {
       result  += Number(userInp);
       console.log(result );
   }
    
}

var userAge;
userAge = prompt("enter your Age :");
console.log(userAge);