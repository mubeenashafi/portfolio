function sendmail(){
    var params={
        name: document.getElementById("name").value,
      email:document.getElementById("email").value,
       message:document.getElementById("message").value,
    
    }
    const serviceID ="service_5gosbiq";
   const templateID="template_ox440bu"
    email.js.send(serviceID, templateID,params)
    .then(res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your message sent successfully")
    })
    .catch(err=>console.assert(err));};