'use strict';

function BinarioADecimal(num) { 
   let dec = 0;
   let aux = 0;
   let aux2 = num.length;

   for(let i = 0; i < num.length; i++){
      --aux2;
      if(num[i] != 0){
         aux = Math.pow(2, aux2);
        dec = dec + aux;
      }
   }
   return dec;
}

function DecimalABinario(num) {
   let binario = '';
   
   while (num / 2 > 0) {
      binario = num % 2 + binario;
      num = Math.floor(num / 2)
   }

   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
