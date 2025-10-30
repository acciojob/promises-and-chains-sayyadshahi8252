//your JS code here. If required.
function submitform(event) {
	event.preventDefault(); 
   let name=document.getElementById("name").value.trim();
   let age=document.getElementById("age").value.trim();
	if(name==="" || age===""){
		alert("Please enter valid details")
		return ;
	}
	let agePromise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>=18){
				resolve(`Welcome, ${name}. You can vote.`);
			}else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		},4000)
	})
	agePromise
	.then((message)=>alert(message))
	.catch((error)=>alert(error))
}