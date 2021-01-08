alert("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
alert("   >>>>  Fuel Calculator BR <<<< ");
alert("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");


while(true){
  
    
    var valor1 = Number.parseFloat(prompt("Digite o valor da ÁLCOOL: " ));
    var valor2 = Number.parseFloat(prompt("Digite o valor do GASOLINA: "));

    var calc = parseFloat(valor1/valor2)*100;

    alert("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");
    alert("PERCENTUAL = " + calc.toFixed(2),"%");


    if (calc.toFixed(2)  < 70 ){
      alert(">> É mais vantajoso o abastecimento com ÁLCOOL\n");

    }
    else if(calc.toFixed(2) > 70 ){
      alert(">> É mais vantajoso o abastecimento com GASOLINA\n");

    }
    else {
      alert(">> Tanto faz a forma de abastecimento, ambos formas atingem a mesma relação de consumo")
    }
    
    
    alert("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨");

    resp = prompt("Deseja realizar outro cálculo [S/N]: ");
    
    console.clear();

  if (resp == 'N' || resp == 'n'){
    alert("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    alert("            >> OBRIGADO <<  ")
    alert("        >> PROGRAMA FINALIZADO << ")
    alert("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    break;
  }

}