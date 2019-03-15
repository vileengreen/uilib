#!/usr/bin/env node
// console.log("当前的版本号",process.env.npm_package_version)
var fs = require('fs')
var packageJSON = require('./package.json');
var version = packageJSON.version;

var options = process.argv;
var type = null;
var newVersion = null;

for(let i=0;i<options.length;i++){
    if(options[i].indexOf('type') > -1){
        type = options[i].split("=")[1]
    }else if(options[i].indexOf('version')){
        newVersion = options[i].split("=")[1];
    }
}

if(newVersion){
    version = newVersion;
}else{
    version = handleType(version,type); 
}


function handleType(oldVersion,type){
    var oldversionArr = oldVersion.split(".");
    // //版本号第一位 如 1.2.3 则为1
     var firstNum = Number(oldversionArr[0]);
     var secondNum = Number(oldversionArr[1]);
     var thirdNum = Number(oldversionArr[2]);
    if(type== "changerelease"){
        firstNum+=1;
    }else if(type == "release"){
        secondNum +=1;
    }else if(type == "hotfix"){
        thirdNum+=1;
    }else {
        thirdNum +=1;
    }
    
    return firstNum +"."+secondNum+"."+thirdNum
}

if(version){
    packageJSON.version = version;
    fs.writeFileSync('package.json',JSON.stringify(packageJSON,null,2))
}

