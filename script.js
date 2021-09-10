function inc() 
{
    document.getElementById('demoInput').stepUp();
}
function add()
{
    var text1 = document.getElementById("number1").value;
    var text2 = document.getElementById("number2").value;
    var answer = Number(text1) + Number(text2);
    document.getElementById("Sum").value = answer;
}
function prime()
{
    var i,flag=0,number;
    number = Number(document.getElementById("number").value);

    for(i=2; i <= number/2; i++)
    {
        if(number%i == 0)
        {
            flag = 1;
            break;
        }
    }
    if(flag == 0)
    {
        document.getElementById("Result").value = "Yes";
    }
    else
    {
        document.getElementById("Result").value = "No";
    }
}

var y = Math.floor(Math.random() * 10 + 1);

function guess()
{
    var x = document.getElementById("Guess").value;

    if(x<1 || x>10)
        alert("Please enter a number between 1 and 10");
    
    if(x == y)
    {    
        document.getElementById("Checker").value = "Yes";
    }
    else
    {    
        document.getElementById("Checker").value = "No";
    }
}