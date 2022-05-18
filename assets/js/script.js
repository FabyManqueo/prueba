$(function () {
    /* Algoritmo para sumar numeros pares desde el cero.
      1- Se recibe el valor ingresado por el usuario en la variable numero
      2- Se inicializa la variable resultado que almacenara la suma
      3-  Se ejecuta el ciclo for, imprimiendo la variable resultado y luego se suma 2
          */
    $("#btn-uno").click(function(evento){
        evento.preventDefault();
        let numero=$("#txt-ejercicio1").val();
        let resultado=0;
        $("#cuerpo-tabla").html("")
        for (let index = 1; index <= numero; index += 1) {
            $('#cuerpo-tabla').append(`
        <tr> 
          <td>${resultado}</td>
          
        </tr>`);
          resultado=resultado+2
        }   

    })

    /* Algoritmo para sumar numeros pares sin incluir el cero.
      1- Se recibe el valor ingresado por el usuario en la variable numero
      2- Se inicializa la variable resultado que almacenara la suma
      3-  Se ejecuta el ciclo for, incremento en 2 la variable resultado y luego imprimo
          */
    $("#btn-dos").click(function(evento){
        evento.preventDefault();
        let numero=$("#txt-ejercicio2").val();
        let resultado=0;
        $("#cuerpo-tabla").html("")
        for (let index = 1; index <= numero; index += 1) {
            resultado=resultado+2
            $('#cuerpo-tabla').append(`
        <tr> 
          <td>${resultado}</td>
          
        </tr>`);
        }   
    })
    
    /* Algoritmo para sumar numeros impares desde el cero.
      1- Se recibe el valor ingresado por el usuario en la variable numero
      2- Se inicializa la variable resultado que almacenara la suma y la variable modulo que almacenar el resto
      3-  Se ejecuta el ciclo for 
      4- se realiza el calculo del modulo
      5- Se verifica si modulo es igual a uno, entonces es impar 
      6- si es impar se suma la variable resultado mas el index
      7- Se imprime el valor de resultado
          */
    $("#btn-tres").click(function(evento){
        evento.preventDefault();
        let numero=$("#txt-ejercicio3").val();
        let resultado=0;
        let modulo=0;
        $("#cuerpo-tabla").html("")
        for (let index = 1; index <= numero; index += 1) {
            modulo=index%2
            if (modulo==1){
            resultado=resultado+index
            } 
       }    
        $('#cuerpo-tabla').append(`
        <tr> 
          <td>${resultado}</td>
        </tr>`);
    })
    
    /* Algoritmo para sumar numeros impares dentro de un intervalo.
      1- Se recibe el valor minimo y maximo ingresado por el usuario en la variable minimo y maximo respectivamente
      2- Se inicializa la variable resultado, diferencia que almacenara la suma de ambos ciclos y la variable modulo que almacenar el resto
      3-  Se ejecuta el primer ciclo for para obtener el valor desde el indice 1 hasta el valor minimo
      4- se realiza el calculo del modulo
      5- Se verifica si modulo es igual a uno, entonces es impar 
      6- si es impar se suma la variable diferencia mas el index
      3-  Se ejecuta el segundo ciclo for para obtener el valor desde el indice 1 hasta el valor maximo
      4- se realiza el calculo del modulo
      5- Se verifica si modulo es igual a uno, entonces es impar 
      6- si es impar se suma la variable resultado mas el index
      7- Se imprime el valor de resultado-diferncia
          */

    $("#btn-cuatro").click(function(evento){
        evento.preventDefault();
        let minimo=$("#txt-minimo").val();
        let maximo=$("#txt-maximo").val();
        let resultado=0;
        let diferencia=0;
        let modulo=0;
       
        $("#cuerpo-tabla").html("")
        for (let index = 1; index <= minimo; index += 1) {
          modulo=index%2
          if (modulo==1){
          diferencia=diferencia+index
          } 
        }

        for ( let index = 1 ; index <= maximo; index += 1) {
            modulo=index%2
            if (modulo==1){
               resultado=resultado+index
            } 
        }  
           
        $('#cuerpo-tabla').append(`
        <tr> 
          <td>${resultado-diferencia}</td>
        </tr>`);
    })
    
    /* Algoritmo para calcular secuencia de Fibonacci .
      1- Se recibe el valor ingresado por el usuario en la variable numero
      2- Se declara una variable de tipo arreglo para almacenar la suma
      3-  Se inicializa el arreglo con indice 0 y 1
      4- Se imprime el arreglo[0] y arreglo[1]
      5- Se verifica si modulo es igual a uno, entonces es impar antes de iniciar el ciclo for
      6- Se inicia el ciclo for
      7- Se comienza a iterar y se almacena en el arreglo[index] la suma de los valores 
      8- Se imprime el arreglo con el valor del indice actual
          */
    $("#btn-cinco").click(function(evento){
        evento.preventDefault();
        let numero=$("#txt-ejercicio5").val();
        let arreglo=[];
        arreglo[0]=0;
        arreglo[1]=1;
        $("#cuerpo-tabla").html("")
        $('#cuerpo-tabla').append(`<tr>
                <td>${arreglo[0]}</td>
                </tr>
        $('#cuerpo-tabla').append(<tr><td>${arreglo[1]}</td></tr>`)
        for (let index = 2; index <= numero; index += 1) {
           arreglo[index]= arreglo[index-2]+arreglo[index-1];
            
            $('#cuerpo-tabla').append(`
        <tr> 
          <td>${arreglo[index]}</td>
          
        </tr>`);
        }
    })
})