let obj = {
      key: "string"}
      function objChecker() {
    
         let value = obj.key;

        if (typeof value == typeof "Suraj"){
        return `The value is ${value}` 
        } else if (typeof value == typeof 4){
            return `The value is ${value}`
        } else if (typeof value == typeof true){
            return `The value is ${value}`
        }else{
            return 'The value is undefined'
        }
    }
      console.log(objChecker())
    
    //Write a conditional that will check the value of one property in an object and return a message. Using string interpolation, the message should take the type of the property and return 'The value is ${type}'. For instance, if sampleObject.sampleKey is a string, it return'The value is a string'.  If sampleObject.sampleKey is a number, it will console.log 'The value is a number'.  Make sure your conditional works for strings, numbers, and booleans. Use the object above

  module.exports = objChecker