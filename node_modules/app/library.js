module.exports = {
 
 computeAverage: function(num1,num2,num3) {
   var average = 0;
   average= (num1+num2+num3)/3;
   return average;
 },
 
 findMinMax: function(inputarray) {
	var min = inputarray[0];
	var max=inputarray[0];
	for(i=0;i<inputarray.length;i++)
	{
	  if(inputarray[i]<min)
	  {
	    min=inputarray[i];
	  }
	  if(inputarray[i]>max)
	  {
	    max=inputarray[i];
	  }
	}
	var outputarray=[min,max];
	return outputarray;
},

 computeFactorial: function(num) {
   var factorial = 1;


   return factorial; 
 },

 convertTempCtoF: function(cTemp) {
   var fTemp = 0;
   fTemp=(9/5*cTemp)-32;
   return fTemp; 
 },

 convertTempFtoC: function(fTemp) {
   var cTemp = 0;
   cTemp=(5/9*(fTemp-32))
   return cTemp; 
 }

}