function maskCpf(){
    let cpf = document.getElementById("tCpf").value, mascara =  "";
    for(let x = 0; x < cpf.length; x++){
        mascara += cpf.charAt(x);
        if(x == 2 || x == 5){
            mascara += ".";
        }else if(x == 8){
            mascara += "-";
        }

    }
    document.getElementById("tCpf").value = mascara;
}

function espacoBranco(objeto){
    var maskNome = /^[A-z]/;
    if(maskNome.test(objeto.value)){
        return true;
    }
    alert("Campo em Branco")
    return false;
}
//includes obriga o usuario ter que colocar o @fatectq.edu.br
function formatoEmail(objeto){
    if(objeto.value.includes("@fatectq.edu.br")){
        return true;
    }
    alert("Aluno Nao pertencente a Fatec Taquaritinga");
    return false;
}


function formatoCpf(objeto){
    let maskCpf = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    if(maskCpf.test(objeto.value)){
        return true;
    }
    alert("numero inválido")
    return false;
}

function validar(){
    let n = document.getElementById("tNome");
    let e = document.getElementById("tEmail");
    let c = document.getElementById("tCpf")
    if(espacoBranco(n) != true){
        return false;
    }else if(formatoEmail(e) != true){
        return false;
    }else if(formatoEmail(e) != true){
        return false;
    }else if(formatoCpf(c) != true){
        return false
    }
}