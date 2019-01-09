var UserInfo = require('../models/userinfo');

exports.getUserinfos = function (req, res, next) {

    UserInfo.find(function (err, userinfos) {
        if (err) {
            res.send(err);
        }

        res.json(userinfos);
    });
}

exports.CreateUserInfo = function (req,res, next) {

    var file = req.files.file;
    var filename = req.user.fullname + '-' + file.name;
    file.mv('./uploads/profileimage/' + filename, (err) => {
        if(err) throw err;
    });
    var usreinfodata = {
        email: req.user.email,
        user_id: req.user._id,
        fullname: req.user.fullname,
        dob: req.body.dob,
        nationality: req.body.nationality,
        contactno: req.user.contactno,
        emergencycontact: req.body.emergencycontact,
        emergencycontactno: req.body.emergencycontactno,
        permanentaddress: req.body.permanentaddress,
        temporaryaddress: req.body.temporaryaddress,
        gender: req.body.gender,
        religion: req.body.religion,
        citizenshipno: req.body.citizenshipno,
        fathername: req.body.fathername,
        mothername: req.body.mothername,
        familycontactno: req.body.familycontactno,
        status: req.body.status,
        spouse: req.body.spouse,
        childname: req.body.childname,
        bloodGroup: req.body.bloodGroup,
        medicalHistory: req.body.medicalHistory,
         education: req.body.education,
        experience: req.body.experience,
      facebook: req.body.facebook,
      instagram: req.body.instagram,
      twitter: req.body.twitter,
      linkedin: req.body.linkedin,
      file: filename,
      
    }

    

    UserInfo.create(usreinfodata, function (err, userinfo) {
      
        if (err) {
            res.send(err);
        }
            res.json(userinfo)
        });
}

exports.deleteUserinfo = function (req, res, next) {

    UserInfo.remove({
        _id: req.params.userinfo_id
    }, function (err, userinfo) {
        
        res.json('Removed Successfully');
        
    });
}
exports.getUserinfo = function (req, res, next) {

    UserInfo.find({
        user_id: req.user._id
    }, function (err, userinfo) {
        if (err) {
            res.send(err);
        }
        res.json(userinfo);
    });
}

exports.getUserinfobyid = function (req, res, next) {
    UserInfo.findOne(
       {_id:req.params._id}, function (err, userinfo) {
        if (err) {
            res.send(err);
        }
        res.json(userinfo);
    });
}