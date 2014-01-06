var Route=function(){
  var re = /([a-z0-9]{8}(?:-[a-z0-9]{4}){3}-[a-z0-9]{12}\.(?:(jpg|png|mp4)))/i;
  var params={};
  var that=this;
  var _extrackFileName=function(value){
    var match=re.exec(value);
    return match?match[1]:null;
  };

  //判断是否是正确的URL
  var _isValidRoute=function(url){
  	 return true;
  };

  //获取到所有的params
  var _addParameterData=function(url){
  	 var paramsection=url.split('?')[1];
     if(typeof(paramsection)=='undefined')
      return;
    
  	 params=paramsection.split('&');

  	 for(var i=0;i<params.length;i++){
  	 
  	 	var paramArray=params[i].split('=');
  	 	params[paramArray[0]]=paramArray[1];

  	  }
   }
   //修改URL以便可以找到对应的文件
   var _process=function(req,res){
       var url=req.url,fileName;
       console.log(url);
       _isValidRoute(url);
       
       fileName=_extrackFileName(url);
       
       _addParameterData(url);

       return {
       	fileName:fileName,
       	params:params
       };
   };   
   return {
   	Process:_process
   };
}();

module.exports=Route;