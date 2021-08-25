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

        const result = peso / (hgt*hgt)
        console.log(result)
  
        if(result < 18.5){
            console.log('magreza')
        }
        else if(18.5 < result < 24.9){
            console.log('normal')
        }
        else if(24.9 < result < 30){
            console.log('sobrepeso')
        }
        else if(result > 30){
            console.log('obesidade')
        }

        document.getElementById('ageID').value='';
        document.getElementById('hgtID').value='';
        document.getElementById('pesoID').value='';
    }
}