function espacoBranco(objeto){
    var maskNome = /^[A-z]/;
    if(maskNome.test(objeto.value)){
        return true;
    }
    alert("Campo em Branco")
    return false;
}
function formatoEmail(objeto){
    if(objeto.value.includes("@EMail.com")){
        return true;
    }
    alert("Aluno Nao pertencente a Fatec Taquaritinga");
    return false;
}

function convMaiusculo() {
    let nome = document.getElementById("tNome").value;
    document.getElementById("tNome").value = nome.toUpperCase();
}

function cpf() {
    let tCpf = document.getElementById("tCpf").value, cpfNovo = "";
    for (let x = 0; x <= tCpf.length  ; x++) {
        cpfNovo += tCpf.charAt(x);
        if (x == 2 || x == 5) {
            cpfNovo += ".";
        } else if (x == 8) {
            cpfNovo += "-";
        }
    }
    document.getElementById("tCpf").value = cpfNovo;
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