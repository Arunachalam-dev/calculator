let output=document.getElementById("output");

function display(num){
    output.value+=num;
}

function eqeal(){
    try{
        output.value=eval(output.value);
    }
    catch(erro)
    {
        alert('invalidate mag');
    }
}

function cle(){
    output.value="";
}
function del(){
    output.value=output.value.slice(0,-1);
}