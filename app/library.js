module.exports = {
words:function(str)
{
  var inputarray = str.replace("\n"," ").replace("\t"," ").replace("  "," ").split(" ");
  var output= {};
  for(i=0;i<inputarray.length;i++)
  {
    var temp=inputarray[i];
    var count=0;
    if(temp!=null)
    {
      var j = i;
      while(j<inputarray.length)
      {
        if(temp==inputarray[j])
        {
          count++;
          if( i != j)
          {
            inputarray.splice(j,1);
          }
      }
        j++;
      }
      output[inputarray[i]] = count;
    }
  }
 
  return output;
}
}