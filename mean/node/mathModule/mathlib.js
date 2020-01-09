module.exports = function (){
  return {
    add: function(num1, num2) { 
         // add code here
         return num1 + num2;
        },
        multiply: function(num1, num2) {
          // add code here 
          return num1 * num2;
    },
    square: function(num) {
         // add code here 
         return num * num;
    },
    random: function(num1, num2) {
         // add code here
         let min = Math.min(num1, num2);
         let max = Math.max(num1, num2);
         return Math.round(Math.random() * (max - min)) + min;
    }
  }
};

