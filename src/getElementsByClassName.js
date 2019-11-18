// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var children = document.body.childNodes;
  if(document.body.className === className)
  	result.push(document.body);

  children.forEach(function(element){
  	if(element.className === className)
  		result.push(element);
  })
  return result;
};
