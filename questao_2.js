function pertenceFibonacci(numero){
  let fibonacci = [0, 1]
  let i = 2

  while(fibonacci[i -1] <= numero){
    fibonacci[i] = fibonacci[i-1]+fibonacci[i-2];
    i++
  }

  if(fibonacci.includes(numero)){
    return `${numero} pertence à sequência de Fibonacci`
  }else{
    return `${numero} não pertence à sequência de Fibonacci`
  }
}

//Teste com número  específico
let numeroTeste = 21
console.log(pertenceFibonacci(numeroTeste))