// OBJECT DESTUCTURING JSON API

const course = {
    courseName: 'JavaScript',
    coursePrice: 999,
    courseInstructor: "Yuvraj Singh"
}

//now to access the proprties we use to do:
console.log(course.courseInstructor);

// but a better way to access the properties is to use destructuring

const {courseInstructor: instructor} = course; 
    // here we are using destructuring to extract the courseInstructor property from the course object and assigning it to a new variable called instructor

console.log("The course instructor is: ", instructor); // output will be Yuvraj Singh
