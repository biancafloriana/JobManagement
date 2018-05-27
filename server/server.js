const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const db = require('../src/app/services/db');
const app = express();
var corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
app.use(cors(corsOptions))

app.listen(8000, () => {
    console.log('Server started!');
  });

  
  app.route('/api/jobs').get((req, res) => {
   // db.create();
    var job3 =  {
        "name": "Programmer2",
        "type": "part-time2",
        "experience": "entry2",
        "domain": "Software2",
        "company": "UbiSfott",
        "applicants": [-1],
        "interestedUsers": [-1],
        "agent" : 1
    }
    
    var job2 =  {
      "name": "Inginer",
      "type": "part-time",
      "experience": "entry",
      "domain": "Software",
      "company": "UbiSoft",
      "applicants": [-1],
      "interestedUsers": [-1],
      "agent" : 1

    }
   /* db.addJob(job2, function(found, obj){
        console.log(obj);
    })
    db.addJob(job3, function(found, obj){
        console.log(obj);
    })
  */
  
 

    db.findAllJobs(function(found,obj){
        console.log(obj);
        res.send(obj);
    
    })
    
    
});

app.route('/api/users').get((req, res) => {


   /* db.create();
    var user1 = {
         "username": "bia",
         "password": "bia",
         "name": "Bianca",
         "contact" : "bianca@mail.com",
         "interests": ["CSS","JAVA","PHP"],
         "interestedJobs": [-1],
         "appliedJobs": [-1] 
    }

    var user2 = {
        "username": "bia2",
        "password": "bia2",
        "name": "Bianca 2",
        "contact" : "bianca@mail.com",
         "interests": ["CSS","JAVASCRIPT","PHP"],
        "interestedJobs": [-1],
        "appliedJobs": [-1] 
   }


    
    db.addUser(user1, function(){
       
    })
    db.addUser(user2, function(){
        
    })*/

    db.findAllUsers(function(found,obj){
        console.log(obj);
        res.send(obj);
    
    })
   
});

app.route('/api/agents').get((req, res) => {

 
     db.findAllAgents(function(found,obj){
         console.log(obj);
         res.send(obj);
     
     })
    
 });


 app.route('/api/agents/:id').get((req, res) => {

    var id = req.params['id'];
 
  
});

app.route('/api/admin/:id').get((req, res) => {

  var id = req.params['id'];

db.findAdmin(id,function(found,obj){
    console.log(obj);
    res.send(obj);
})

});

app.route('/api/users/:id').get((req, res) => {

  var id = req.params['id'];

 // db.insertAdmin();

db.findUser(id,function(found,obj){
    console.log(obj);
    if(found){
    res.send(200,{obj:obj,type:"basic"});
  }
  else{
    db.findAgent(id,function(found,obj){
      console.log(obj,"agent");

      if(found){
      res.send(200,{obj:obj,type:"agent"})}
      else {
        db.findAdmin(id,function(found,obj){
          console.log(obj);
          if(found){
          res.send(200,{obj:obj,type:"admin"});}
          else{res.send(201)};
      })
      }
  })
  }
})

});

 
app.route('/api/jobs/:id/:user').put((req, res) => {

    const job = req.params['id'];
    var user = req.params['user'];
    console.log(job," ", user, " ");

    db.updateJob(job,user,function(found){
          res.send(201,found);
    });
});

app.route('/api/jobs/interested/:id/:user').put((req, res) => {

  const job = req.params['id'];
  var user = req.params['user'];
  console.log(job," ", user, " ");

  db.addInterestedUser(job,user,function(found){
        res.send(201,found);
  });
});

app.use(bodyParser.json());

app.route('/api/users/:user/:id').put((req, res) => {

    const job = req.params['id'];
    var user = req.params['user'];
    console.log(job," ", user, " ");

    db.updateUser(user,job,function(found){
          res.send(201,found);
    });
});
app.route('/api/users/interested/:user/:id').put((req, res) => {

  const job = req.params['id'];
  var user = req.params['user'];
  console.log(job," ", user, " ");

  db.addInterestedJob(user,job,function(found){
        res.send(201,found);
  });
});
app.use(bodyParser.json());

app.route('/api/jobs').post((req, res) => {

   /* var job =  {
        "id": 1,
        "name": "Programmer",
        "type": "part-time",
        "experience": "entry",
        "domain": "Software",
        "company": "UbiSfot",
        "applicants": [1,2],
    }*/
    var job = req.body;
   // console.log(req.body);
  db.addJob(job, function(id){
     job.id = id;
    res.send(201, job);
  })
  
});
app.route('/api/users').post((req, res) => {

     var user = req.body;
    // console.log(req.body);

   db.addUser(user, function(id){
      user.id = id;
     res.send(201, user);
   })
   
 });

 app.route('/api/agents').post((req, res) => {

    var user = req.body;
   // console.log(req.body);

  db.addAgent(user, function(id){
     user.id = id;
    res.send(201, user);
  })
  
});
app.route('/api/notify/:id').post((req, res) => {
  console.log("notify server");
  var user = req.params['id'];
  var message = req.body.message;
  console.log(req.body);
 

db.updateNotifications(user,message, function(id){
   user.id = id;
  res.send(200, user);
})

});

app.route('/api/jobs').put((req, res) => {

  var user = req.body;
   console.log(req.body);
 db.updateJob1(user, function(ok){
   res.send(201, ok);
 })
});
 app.route('/api/users').put((req, res) => {

    var user = req.body;
   // console.log(req.body);
  db.updateUser1(user, function(ok){
    res.send(201, ok);
  })
  
});

app.route('/api/agents').put((req, res) => {

    var user = req.body;
   // console.log(req.body);
  db.updateAgent(user, function(ok){
    res.send(201, ok);
  })
  
});
app.route('/api/jobs/:id').delete((req, res) => {

   
     var job = req.params['id'];
        console.log(job);
        
   db.deleteJob(job, function(ok){
       console.log(ok);
     res.send(201, ok);
   })
   
 });

 app.route('/api/agents/:id').delete((req, res) => {

   
  var job = req.params['id'];
     console.log(job);
     
db.deleteAgent(job, function(ok){
    console.log(ok);
  res.send(201, ok);
})

});

 app.route('/api/users/:id').delete((req, res) => {   
    var user = req.params['id'];
       console.log(user);
       
  db.deleteUser(user, function(ok){
      console.log(ok);
    res.send(201, ok);
  })
  
});
 
app.route('/api/jobs/interested/:id/:user').delete((req, res) => {

  const job = req.params['id'];
  var user = req.params['user'];
  console.log(job,"job J ", user, "user ");

  db.removeInteredtedUser(job,user,function(found){
        res.send(201,found);
  });
});

app.use(bodyParser.json());

app.route('/api/users/interested/:user/:id').delete((req, res) => {

    const job = req.params['id'];
    var user = req.params['user'];
    console.log(job,"job ", user, "user ");

    db.removeInterestedJob(user,job,function(found){
          res.send(201,found);
    });
});







