const fs = require('fs')
var shell = require('shelljs')

const genTxt = (startData,data = '') => {
  for (let i = 0; i < 24; i++) {
    let myi = i < 10 ? '0' + i : i
    let name = startData + myi + '.txt'
    fs.writeFile(name, data, (err, data) => {
      if (err) throw err
    })
  }
}

const genFile = (name, data)=>{
  if(!name) return
  // if(name.length < 10) {
  //   let a = name.substring(0,7)
  //   name="0000"+a
  //   name = a+name.substring(name.length-4,name.length)
  // }
    name = name + '.txt'
    fs.writeFile(name, data, (err, data) => {
      if (err) throw err
    })
}

function checkLen(mydata,m,n,start){
  if(mydata[m].length > 100){
    return 
  }else{
    let end = start+100
    if(n*1 >= start && n*1 < end ){
      mydata[m].push(x)
    }
  }
  checkLen(mydata,m,n,start+100)
}

const readSource = () => {
	shell.cd('./sourceData')
	let dirs = shell.ls()
	let mydata = {}
	for(let item of dirs){
		console.log(shell.pwd())
		shell.cd('c:/Users/qjq/Desktop/dataProcessJs/sourceData')
		shell.cd(item)
		let files = shell.ls()
		for(let f of files){
		let oldData = fs.readFileSync(f)
		let a = oldData.toString()
		let arr = []
		if(a.includes('\r\n')){
			arr= a.split('\r\n')
		}else{
			arr = a.split('\n')
		}

		for(let x of arr){
			x=x.replace(/(^\s*)|(\s*$)/g,"")
			let len = x.length
			let m = x.substring(len-14,len-4)
			let n = x.substring(len-4,len)
			if(n*1 > 1000){
				continue
			}
			if(!mydata[m]){
				mydata[m]= [];
			}
			if(n*1 >=0 && n*1 <=459){
				mydata[m].push(x)
			}
			
			if(mydata[m].length < 100){
				if(n*1 >=500 && n*1 <600){
					mydata[m].push(x)
				}
			}
			if(mydata[m].length < 100){
				if(n*1 >=600 && n*1 <700){
					mydata[m].push(x)
				}
			}
			if(mydata[m].length < 100){
				if(n*1 >=700 && n*1 <800){
					mydata[m].push(x)
				}
			}
			if(mydata[m].length < 100){
				if(n*1 >=800 && n*1 <900){
					mydata[m].push(x)
				}
			}
			if(mydata[m].length < 100){
				if(n*1 >=900 && n*1 <1000){
					mydata[m].push(x)
				}
			}
		}
	}
}
	shell.cd('c:/Users/qjq/Desktop/dataProcessJs/targetData') 
	for(let key of Object.keys(mydata)){
		let mm = mydata[key].filter(x=> x)
		let data = mm.join('\r')
		// console.log(key)
		genFile(key, data)
	}

}


readSource()