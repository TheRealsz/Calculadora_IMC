function calcular(){
    if(document.getElementById('ageID').value == "" ||
    document.getElementById('hgtID').value =='' ||
    document.getElementById('pesoID').value ==''){
        alert("Preencha todos os campos")
        return
    } else{

        const age = document.getElementById('ageID').value;
        const hgt = parseFloat(document.getElementById('hgtID').value);
        const peso = parseFloat(document.getElementById('pesoID').value);

        const conta = peso / (hgt*hgt)
        const result = conta.toFixed(2)
        console.log(result)
        if (document.getElementById("tool-1").checked){
            if(result <= 18.5){
                document.getElementsByClassName("titulo-result")[0].innerHTML = "Magreza &#128533;" 
                document.getElementById("test").innerHTML = "seu IMC é de " + result + " abaixo de 18.6, ou seja, abaixo do peso ideal!"
            }
            else if(18.6 <= result && result <= 24.9){
                document.getElementsByClassName("titulo-result")[0].innerHTML = "Normal &#128512;"
                document.getElementById("test").innerHTML = "seu IMC é de " + result + " acima de 18.5 e abaixo de 25, ou seja, dentro do peso ideal!"
            }
            else if(25 <= result && result <= 30){
                document.getElementsByClassName("titulo-result")[0].innerHTML = "Sobrepeso &#128533;"
                document.getElementById("test").innerHTML = "seu IMC é de " + result + " acima de 24.9 e abaixo de 30.1, ou seja, um pouco acima do peso ideal!"
            }
            else if(result >= 30.1){
                document.getElementsByClassName("titulo-result")[0].innerHTML = "Obesidade &#128552;"
                document.getElementById("test").innerHTML = "seu IMC é de " + result + " acima de 30, ou seja, muito acima do peso ideal!"
            }
        }    

        else if (document.getElementById("tool-2").checked){
            if(result <= 19.1){
                document.getElementsByClassName("titulo-result")[0].innerHTML = "Magreza &#128533;" 
                document.getElementById("test").innerHTML =  "seu IMC é de " + result + " abaixo de 19.2, ou seja, abaixo do peso ideal!"
            }
            else if(19.2 <= result && result <= 26.8){
                document.getElementsByClassName("titulo-result")[0].innerHTML = "Normal &#128512; "
                document.getElementById("test").innerHTML = "seu IMC é de " + result + " acima de 19.1 e abaixo de 26.9, ou seja, dentro do peso ideal!"
            }
            else if(26.9 <= result && result <= 32.3){
                document.getElementsByClassName("titulo-result")[0].innerHTML = "Sobrepeso &#128533;"
                document.getElementById("test").innerHTML = "seu IMC é de " + result + " acima de 26.8 e abaixo de 32.4, ou seja, um pouco acima do peso ideal!"
            }
            else if(result >= 32.4){
                document.getElementsByClassName("titulo-result")[0].innerHTML = "Obesidade &#128552;"
                document.getElementById("test").innerHTML ="seu IMC é de " + result + " acima de 32.3, ou seja, muito acima do peso ideal!"
            }

        }    

        const borderInResult = document.getElementById('div-test');
        borderInResult.style.display = "block"

        document.getElementById('ageID').value='';
        document.getElementById('hgtID').value='';
        document.getElementById('pesoID').value='';
    }
}