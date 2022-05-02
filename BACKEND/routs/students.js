const router = require("express").Router();
//const { Router } = require("express");
let Student = require("../models/Student");

//Inserting data to the collection
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student added..");
    }).catch((err)=>{
        console.log(err.message);
    })
})

//getting all data from collection
router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err.message);
    })
})

//updating the data 
router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{name,age,gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{
        res.status(200).send({status:"Student updated"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Data upadte is not succes"})
    })

})

//deleting the data from collection
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Data deleted succesfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Data delete is failed",error: err.message});
    })
})

//getting data from one student
router.route("/get/:id").get(async(req,res)=>{
    let userId = req.body.id;
    const user = await Student.findById(id).then(()=>{
        res.status(200).send({status:"User fetched..",user: user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Data fetched is failed",error: err.message})
    })
})

module.exports = router;
















