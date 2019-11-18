// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = [];
  var keysArr=[]; 
  var resultedArray = [];
   // if(isNaN(obj) || obj === Infinity )
   // 	return null + "";

   if(typeof obj === 'boolean' || typeof obj === 'number' || obj === null)
   	return obj + "";

   else if(typeof obj === 'string'){
   	return '"' + obj + '"';
   }
   else if(Array.isArray(obj)){
   	if (obj.length === 0) {
   		return '[]'
   	}
   	else obj.forEach(function(element){
      result.push(stringifyJSON(element));
   	})
    return '[' + result + ']';
   }
   else if (typeof obj === 'object') {
       var keys = Object.keys(obj);
       keys.forEach(function(element){
       	var key = '"' + element +'":';
       	var val = obj[element];
         if( val instanceof Function || typeof val === undefined  )
            {
            	resultedArray.push('');

         }else if(typeof val === "string"){
         	resultedArray.push(key + '"' + val + '"');
         }else if(typeof val === 'boolean' || typeof val === 'number' || val === null){
   	        resultedArray.push(key + val);
   	     }else if(val instanceof Object){
   	     	resultedArray.push(key + stringifyJSON(val));
   	     }

       });
       return '{'  + resultedArray + '}'

   }

 
};


/*
var obj = {first : 'abobker',last : 'Elaghel'};
var arr = Object.keys(obj);
console.log(arr);
*/