var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


exports.create = function (callback) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.dropCollection("users", function(err, res) {
          if (err) throw err;
          console.log("Collection created!");
          db.close();
        });
      });
};

exports.createDb = function(callback){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
      });
}

exports.addAgent = function (obj, callback) {
    MongoClient.connect(url, function (err, db) {
        var dbo = db.db("mydb");
        if (err) throw err;
        dbo.collection("agents").insertOne(obj, function (err, res) {
            if (err) throw err;
           // res.result.insertedId;
            db.close();
            callback( res.result.insertedId);
        });
    });
};
exports.addJob = function (obj, callback) {
    MongoClient.connect(url, function (err, db) {
        var dbo = db.db("mydb");
        if (err) throw err;
        dbo.collection("jobs").insertOne(obj, function (err, res) {
            if (err) throw err;
           // res.result.insertedId;
            db.close();
            callback( res.result.insertedId);
        });
    });
};

exports.addUser = function (obj, callback) {
    MongoClient.connect(url, function (err, db) {
        var dbo = db.db("mydb");
        if (err) throw err;
        dbo.collection("users").insertOne(obj, function (err, res) {
            if (err) throw err;
            db.close();
            callback();
        });
    });
};

exports.deleteJob = function(id, callback ){
    var foundJob = false;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
       var query = {"name" : id};
       console.log(query);
        dbo.collection("jobs").deleteOne(query,function (err, res) {
            if (err) throw err;
            foundJob = res.result.n;
          console.log();
            db.close();
            //asda
            callback(foundJob);
        });
    });
};

exports.deleteUser = function(id, callback ){
    var foundJob = false;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
      // var query = {_id :  require('mongodb').ObjectId(id)};
      // console.log(query);
        dbo.collection("users").deleteOne({username :  id},function (err, res) {
            if (err) throw err;
            foundJob = res.result.n;
          console.log();
            db.close();
            //asda
            callback(foundJob);
        });
    });
};

exports.deleteAgent = function(id, callback ){
    var foundJob = false;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
      // var query = {_id :  require('mongodb').ObjectId(id)};
       //console.log(query);
        dbo.collection("agents").deleteOne({username :  id},function (err, res) {
            if (err) throw err;
            foundJob = res.result.n;
          console.log();
            db.close();
            //asda
            callback(foundJob);
        });
    });
};
exports.findJob = function(id, callback ){
    var foundJob = false;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = { id: id};
        dbo.collection("jobs").find(query).toArray(function(err, result) {
            console.log(result);
            if (err) throw err;
            foundJob = ((result.length != 0) ? true : false);
            db.close();
            //asda
            callback(foundJob, result[0]);
        });
    });
};

exports.findAgent = function(username, callback ){
    var foundJob = false;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = { username: username};
        dbo.collection("agents").find(query).toArray(function(err, result) {
            console.log(result);
            if (err) throw err;
            foundJob = ((result.length != 0) ? true : false);
            db.close();
            //asda
            callback(foundJob, result[0]);
        });
    });
};

exports.findAdmin = function(username, callback ){
    var foundJob = false;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var query = { username: username};
        dbo.collection("admin").find(query).toArray(function(err, result) {
            console.log(result);
            if (err) throw err;
            foundJob = ((result.length != 0) ? true : false);
            db.close();
            //asda
            callback(foundJob, result[0]);
        });
    });
};

exports.findUser = function(username, callback ){

   
    var foundJob = false;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        console.log(username);
        var query = { username: username};
        dbo.collection("users").find(query).toArray(function(err, result) {
            console.log(result);
            if (err) throw err;
            foundJob = ((result.length != 0) ? true : false);
            db.close();
            //asda
            callback(foundJob, result[0]);
        });
    });
};

exports.insertAdmin = function(){

   
   
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //console.log(username);
        var query = { username: "admin",password:"admin"};
        dbo.collection("admin").insertOne(query,function(err, result) {
            console.log(result);
            if (err) throw err;
            foundJob = ((result.length != 0) ? true : false);
            db.close();
            //asda
        });
    });
};











exports.findAllAgents = function( callback ){
    var foundJob = false;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
      
        dbo.collection("agents").find({}).toArray(function(err, result) {
            console.log(result);
            if (err) throw err;
            foundJob = ((result.length != 0) ? true : false);
            db.close();
            //asda
            callback(foundJob, result);
        });
    });
}
exports.findAllJobs = function( callback ){
    var foundJob = false;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
      
        dbo.collection("jobs").find({}).toArray(function(err, result) {
            console.log(result);
            if (err) throw err;
            foundJob = ((result.length != 0) ? true : false);
            db.close();
            //asda
            callback(foundJob, result);
        });
    });
};

exports.findAllUsers = function( callback ){
    var foundJob = false;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
      
        dbo.collection("users").find({}).toArray(function(err, result) {
            console.log(result);
            if (err) throw err;
            foundJob = ((result.length != 0) ? true : false);
            db.close();
            //asda
            callback(foundJob, result);
        });
    });
};

exports.updateJob = function (idJob,idUser, callback) {
    var modified;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        console.log("job: ", idJob ," user:", idUser )
                dbo.collection("jobs").updateOne({_id: require('mongodb').ObjectId(idJob)},{$addToSet: {applicants: idUser}},function (err, res) {
                    if (err) throw err;
                    modified = ((res.result.nModified == 0) ? false : true);
                    console.log(res.result.nModified);
                    db.close();
                    callback(modified);
                 });
    });

};

exports.addInterestedUser = function (idJob,idUser, callback) {
    var modified;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        //console.log("job: ", idJob ," user:", idUser )
                dbo.collection("jobs").updateOne({_id: require('mongodb').ObjectId(idJob)},{$addToSet: {interestedUsers: idUser}},function (err, res) {
                    if (err) throw err;
                    modified = ((res.result.nModified == 0) ? false : true);
                    console.log(res.result.nModified);
                    db.close();
                    callback(modified);
                 });
    });

};

exports.removeInteredtedUser = function (idJob,idUser, callback) {
    var modified;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        //console.log("job: ", idJob ," user:", idUser )
                dbo.collection("jobs").updateOne({_id: require('mongodb').ObjectId(idJob)},{$pull: {interestedUsers: idUser}},function (err, res) {
                    if (err) throw err;
                    modified = ((res.result.nModified == 0) ? false : true);
                    console.log(res.result.nModified);
                    db.close();
                    callback(modified);
                 });
    });

};

exports.updateUser = function (user,job, callback) {
    var modified;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        console.log("job: ", job ," user:", user )
                dbo.collection("users").updateOne({_id: require('mongodb').ObjectId(user)},{$addToSet: {appliedJobs: job}},function (err, res) {
                    if (err) throw err;
                    modified = ((res.result.nModified == 0) ? false : true);
                    console.log(res.result.nModified);
                    db.close();
                    callback(modified);
                 });
    });

};


exports.removeInterestedJob = function (user,job, callback) {
    var modified;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        console.log("job user: ", job ," user user:", user )
                dbo.collection("users").updateOne({_id: require('mongodb').ObjectId(user)},{$pull: {appliedJobs: job}},function (err, res) {
                    if (err) throw err;
                    modified = ((res.result.nModified == 0) ? false : true);
                    console.log(res.result.nModified);
                    db.close();
                    callback(modified);
                 });
    });

};

exports.addInterestedJob = function (user,job, callback) {
    var modified;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        console.log("job: ", job ," user:", user )
                dbo.collection("users").updateOne({_id: require('mongodb').ObjectId(user)},{$addToSet: {interestedJobs: job}},function (err, res) {
                    if (err) throw err;
                    modified = ((res.result.nModified == 0) ? false : true);
                    console.log(res.result.nModified);
                    db.close();
                    callback(modified);
                 });
    });

};

exports.updateUser1 = function (user, callback) {
    var modified;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
            var user2 ={ 
            name: user.name,
            username: user.username,
            password: user.password,
            interests: user.interests,
            contact: user.contact,
            notifications: user.notifications }
        console.log(" user:", user2 )
       // console.log(" user0:", user )
        console.log(user.id);
                dbo.collection("users").updateOne({_id: require('mongodb').ObjectId(user.id)}, { $set: user2 },function (err, res) {
                    if (err) throw err;
                    modified = ((res.result.nModified == 0) ? false : true);
                    console.log(res.result.nModified);
                    db.close();
                    callback(modified);
                 });
    });

};
exports.updateAgent = function (user, callback) {
    var modified;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
            var user2 ={ 
            username: user.username,
            password: user.password,
            jobs : user.jobs
           }
        console.log(" user:", user )
                dbo.collection("agents").updateOne({_id: require('mongodb').ObjectId(user._id)}, { $set: user2 },function (err, res) {
                    if (err) throw err;
                    modified = ((res.result.nModified == 0) ? false : true);
                    console.log(res.result.nModified);
                    db.close();
                    callback(modified);
                 });
    });

};

exports.updateJob1 = function (job, callback) {
    var modified;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var job2 =  {
            "name": job.name,
            "type": job.type,
            "experience": job.experience,
            "domain": job.domain,
            "company": job.company,
            "applicants": job.applicants,
            "interestedUsers": job.interestedUsers,
            "agent" : job.agent
      
          }
       // console.log(" user:", job )
                dbo.collection("jobs").updateOne({_id: require('mongodb').ObjectId(job._id)}, { $set: job2 },function (err, res) {
                    if (err) throw err;
                    modified = ((res.result.nModified == 0) ? false : true);
                    console.log(res.result.nModified);
                    db.close();
                    callback(modified);
                 });
    });

};


exports.updateNotifications = function (user,message, callback) {
    var modified;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

       // console.log("job: ", job ," user:", user )
                dbo.collection("users").updateOne({_id: require('mongodb').ObjectId(user)},{$addToSet: {notifications: message}},function (err, res) {
                    if (err) throw err;
                    modified = ((res.result.nModified == 0) ? false : true);
                    console.log(res.result.nModified);
                    db.close();
                    callback(modified);
                 });
    });

};


