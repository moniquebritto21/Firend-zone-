



    function signdata(event){
    var data='';
    
      
      var form=document.getElementById('Form')
      
      
        var email=document.getElementById('email').value;
        data+=`email: ${email} `;
         console.log(email);
        
        var password=document.getElementById('password').value;
    data+=`password: ${password} `;
    
    var username=document.getElementById('username').value;
      data+=`username: ${username}`;
      console.log(data);
    
      postData('friend-zone-c534f-default-rtdb.firebaseio.com/',data);
    
      // redirectCreate(event);
    }
    
    
    async function postData(url, data){


        
      try{
         let response = await fetch(
           url, 
           {
                method: 'POST',
                body: JSON.stringify(data),//convert data to JSON string
              headers: { 'Content-Type':'application/json' }// JSON data4
             
           },
         );//1. Send http request and get response
         
         let result = await response.text/json();//2. Get message from response
         console.log(result);//3. Do something with the message
       
       }catch(error){
         console.log(error);//catch and log any errors
      
       }
     
    }
    
    
    function redirectCreate(event){
            location.replace("/HtmlFiles/CreateProfile.html");
    }
    
    function redirectHome(event){
      location.replace("/HtmlFiles/Home.html");
    }   
    