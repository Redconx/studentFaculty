var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
var port= process.env.PORT||2410;
const customers = [
    {
      custId: 1,
      name: "ABC",
      password: "abc1234",
      role: "admin",
      email: "abc@gmail.com"
    },
    {
      custId: 2,
      name: "Willie",
      password: "willie1234",
      role: "student",
      email: "willie@gmail.com"
    },
    {
      custId: 3,
      name: "Jack",
      password: "jack1234",
      role: "faculty",
      email: "jack@gmail.com"
    },
    {
      custId: 4,
      name: "James",
      password: "james1234",
      role: "student",
      email: "james@gmail.com"
    },
    {
      custId: 5,
      name: "Harry",
      password: "harry1234",
      role: "faculty",
      email: "harry@gmail.com"
    },
    {
      custId: 6,
      name: "Tia",
      password: "tia1234",
      role: "student",
      email: "tia@gmail.com"
    },
    {
      custId: 7,
      name: "Aditya",
      password: "aditya123",
      role: "faculty",
      email: "aditya@gmail.com"
    },
    {
      custId: 8,
      name: "Sonu",
      password: "sonu1234",
      role: "student",
      email: "sonu@gmail.com"
    },
    {
      custId: 9,
      name: "Ellie",
      password: "ellie1234",
      role: "student",
      email: "ellie@gmail.com"
    },
    {
      custId: 10,
      name: "Gia",
      password: "gia1234",
      role: "faculty",
      email: "gia@gmail.com"
    }
  ];
const  courses = [
    {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack"],
      students: ["Sam"]
    },
    {
      courseId: 2,
      name: "JAVASCRIPT",
      code: "JS124",
      description: "Intoduction to javascript",
      faculty: ["Aditya"],
      students: ["James", "Joy", "Monu", "Rita"]
    },
    {
      courseId: 3,
      name: "REACT",
      code: "RCT56",
      description: "React Javascript library",
      faculty: ["Jack", "Gia"],
      students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
      courseId: 4,
      name: "BOOTSTRAP",
      code: "BS297",
      description: "Bootstrap Designing Framework",
      faculty: [],
      students: ["James", "Tia", "Ellie"]
    },
    {
      courseId: 5,
      name: "CSS",
      code: "CS365",
      description: "Basic stylesheet language",
      faculty: [],
      students: ["James", "Rita", "Monica"]
    },
    {
      courseId: 6,
      name: "REST AND MICROSERVICES",
      code: "RM392",
      description: "Introduction to Microservices",
      faculty: [],
      students: ["Sam"]
    },
    {
      courseId: 7,
      name: "NODE",
      code: "ND725",
      description: "Introduction to Node",
      faculty: ["Sonia"],
      students: ["Saransh", "Shrey", "Monica"]
    }
  ];
let  faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
  ];
 const classes = [
    {
      classId: 1,
      course: "REACT",
      time: "07:45",
      endTime: "08:45",
      topic: "Redux",
      facultyName: "Jack"
    },
    {
      classId: 2,
      course: "ANGULAR",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Jack"
    },
    {
      classId: 3,
      course: "JAVASCRIPT",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Aditya"
    }
  ];
 let  students = [
    {
      id: 16,
      name: "Willie",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "NODE"]
    },
    {
      id: 15,
      name: "Tia",
      dob: "30-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 14,
      name: "Apoorv",
      dob: "31-August-1998",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 13,
      name: "Joy",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 12,
      name: "Rachel",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 11,
      name: "Monica",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["CSS", "NODE"]
    },
    {
      id: 10,
      name: "Monu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 9,
      name: "Sonu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["REACT"]
    },
    {
      id: 8,
      name: "Raima",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["REACT"]
    },
    {
      id: 7,
      name: "Rita",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
    {
      id: 5,
      name: "Saransh",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: ["NODE"]
    },
    {
      id: 4,
      name: "Sanya",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 3,
      name: "James",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
      id: 2,
      name: "Sam",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
      id: 1,
      name: "Ellie",
      dob: "12-June-1992",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["BOOTSTRAP"]
    }
  ];


  app.post("/login",function(req,res){
    let email=req.body.email
    let password=req.body.password

    let customer=customers.find(ele=>ele.email===email&&ele.password===password)
    // console.log(customer);
    let custReq= customer?{name:customer.name,email:customer.email,role:customer.role}:{}
    if(!customer)res.status(401).send("Login Failed")
    else res.send(custReq)
  })


 app.post("/register",function(req,res){
    let name=req.body.name
    let email=req.body.email
    let password=req.body.password
    let role=req.body.role
    let newId=customers.length > 0 ? customers[customers.length-1].custId+1 : 1
    console.log({newId});
    let custToBeAdded={name,email,password,role:role.toLowerCase(),custId:newId}
    console.log({custToBeAdded});
    customers.push(custToBeAdded)
    if(role==="Student"){
        let stu={id:students[0].id+1,name,dob: "",gender: "",about: "",courses: []}
        students.unshift(stu)
    }
    if(role==="Faculty"){
        let fac={id:faculties[0].id+1,name,courses:[]}
        faculties.unshift(fac)
    }
    console.log(students);
    let custRes={name,role,email}
    res.send(custRes)
 })

 app.get("/getStudentNames",function(req,res){
    let studentNames=students.map(ele=>ele.name)
    res.send(studentNames)
 })
 app.get("/getFacultyNames",function(req,res){
    let facNames=faculties.map(ele=>ele.name)
    res.send(facNames)
 })
 app.get("/getCourses",function(req,res){
    res.send(courses)
 })

 app.put("/putCourse",function(req,res){
    let body=req.body
    let index=courses.findIndex(ele=>ele.courseId===body.courseId)
    courses[index]=body
  console.log(body);
    // pushing course details in student array
    // name and studentarray are in body
    students=students.map(ele=>{
      if(body.students.findIndex(st=>st===ele.name)>=0){
        if(!ele.courses.includes(body.name))
          ele.courses.push(body.name)
          return ele
      }else {return ele}
    })
    // push course details in faculty array
    faculties=faculties.map(ele=>{
      if(body.faculty.findIndex(fc=>fc===ele.name)>=0){
        if(!ele.courses.includes(body.name))
          ele.courses.push(body.name)
          return ele
      }else {return ele}
    })



    res.send(body)
 })

 app.get("/getFaculties",function(req,res){
    let course=req.query.course
    let list=faculties
    if(course){
        course=course.split(",")
        list=list.filter(ele=>ele.courses.findIndex(crs=>course.findIndex(cr=>cr===crs)>=0)>=0)
    }
    console.log(list);
    let resArr=pagination(list,parseInt(req.query.page))

    res.json({
        page: parseInt(req.query.page),
        items: resArr,
        totalItems: resArr.length,
        totalNum: list.length
      });

 })
 app.get("/getStudents",function(req,res){
    let course=req.query.course
    let list=students
    if(course){
        course=course.split(",")
        list=list.filter(ele=>ele.courses.findIndex(crs=>course.findIndex(cr=>cr===crs)>=0)>=0)
    }
    console.log(list);
    let resArr=pagination(list,parseInt(req.query.page))

    res.json({
        page: parseInt(req.query.page),
        items: resArr,
        totalItems: resArr.length,
        totalNum: list.length
      });

 })

 app.post("/postStudentDetails",function(req,res){
    let body=req.body
    console.log({body});
    let index=students.findIndex(ele=>ele.name===body.name)
    console.log({index});
    if(index<0)res.send("student Not Found")
    students[index].dob=body.dob
    students[index].gender=body.gender
    students[index].about=body.about
    res.send(students[index])
 })

 app.get("/getStudentDetails/:name",function(req,res){
    let name=req.params.name
    let resArr=students.find(ele=>ele.name===name)
    if(resArr)res.send(resArr)
    else res.sendStatus(500)
    
 })
 app.get("/getStudentCourse/:name",function(req,res){
    let name=req.params.name
    console.log(name);
    console.log(courses);
    let resArr=courses.filter(ele=>ele.students.findIndex(st=>st===name)>=0)
    let resArr1=resArr.map(ele=>{
    return    {courseId:ele.courseId,name:ele.name,code:ele.code,description:ele.description}
    })
    if(resArr)res.send(resArr1)
    else res.sendStatus(500)
 })
 app.get("/getStudentClass/:name",function(req,res){
    let name=req.params.name
    let courseArr=students.find(ele=>ele.name===name).courses
console.log(courseArr);
    let resArr=classes.filter(ele=>courseArr.findIndex(cr=>cr===ele.course)>=0)
    if(resArr)res.send(resArr)
    else res.sendStatus(500)
 })


//----------------api for faculty----------------//
 app.get("/getFacultyCourse/:name",function(req,res){
    let name=req.params.name
    console.log(name);
    let resArr=courses.filter(ele=>ele.faculty.includes(name))
    console.log(resArr);
    let resArr1=resArr.map(ele=>{
        return    {courseId:ele.courseId,name:ele.name,code:ele.code,description:ele.description}
        })
        if(resArr)res.send(resArr1)
        else res.sendStatus(500)
 })
 app.get("/getFacultyClass/:name",function(req,res){
    let name=req.params.name
    console.log(name);
    let resArr=classes.filter(ele=>ele.facultyName===name)
    console.log(resArr);
   
        if(resArr)res.send(resArr)
        else res.sendStatus(500)
 })

 app.post("/postClass",function(req,res){
    let body=req.body
    let newId=classes.length > 0 ? classes[classes.length-1].classId+1:1
    body={...body,classId:newId}
    classes.push(body)
    res.send(body)
 })

 app.put("/postClass/:classId",function(req,res){
    let classId=+req.params.classId
    let body=req.body
    body={...body,classId}
    let index=classes.findIndex(ele=>ele.classId===classId)
    classes[index]=body
    res.send(classes)
 })

function pagination(obj, page) {
  var resArr = obj;
  resArr = resArr.slice(page * 3 - 3, page * 3);
  return resArr;
}
  app.listen(port, () => console.log(`Node app listening on port ${port}!`));