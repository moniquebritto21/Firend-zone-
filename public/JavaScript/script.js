// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function hello(){
    const firebaseConfig = {
      apiKey: "AIzaSyDFe4p6hc8OIwyFHka5--hxZi93hHSrBrI",
      authDomain: "friend-zone-c534f.firebaseapp.com",
      databaseURL: "https://friend-zone-c534f-default-rtdb.firebaseio.com",
      projectId: "friend-zone-c534f",
      storageBucket: "friend-zone-c534f.appspot.com",
      messagingSenderId: "617008963286",
      appId: "1:617008963286:web:5ff1b5dd5c9a2041dcb377",
      measurementId: "G-EN149SRLFD"
    };
    
    firebase.initializeApp(firebaseConfig);
      signdata(event);
    
    }
    
    
    function signdata(event){
      
      firebase.database().ref('friend-zone-c534f-default-rtdb/').push({
      KEY VALUE: document.getElementById("email").value,
      KEY VALUE: document.getElementById("password").value,
      KEY VALUE : document.getElementById("username").value
      }), (error) => {
      if (error) {
        console.log(error)// The write failed...
      } else {
        // Data saved successfully!
      }
    });
    
      //lmaooooboi tearsi ask eysah and he aint start ...i'll ask in the gc..i think it' s just to find the link for to post to the firestore real time.but idk which one it is or where to get it 
      //ohh lawdd
    }
     
    
    
    // function signdata(event){
    // var data='';
    
      
    //   var form=document.getElementById('Form')
      
      
    //     var email=document.getElementById('email').value;
    //     data+=`email: ${email} `;
    //      console.log(email);
        
    //     var password=document.getElementById('password').value;
    // data+=`password: ${password} `;
    
    // var username=document.getElementById('username').value;
    //   data+=`username: ${username}`;
    //   console.log(data);
    
    //   postData('https://friend-zone-c534f-default-rtdb.firebaseio.com/',data);
    
    //   // redirectCreate(event);
    // }
    
    
    async function postData(url, data){
      
      event.preventDefault();
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
    