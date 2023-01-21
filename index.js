//*DZ #1

class Student{
    studentName = 'Student Name';
    studentAge = 'Student Age';
    studentFaculty = 'Student Faculty';
    
    constructor(studentName, studentAge, studentFaculty) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentFaculty = studentFaculty;
        
    }
}

class MedicalStudent extends Student{
    studentSpecialization = 'Student Specialization';

    constructor(studentName, studentAge, studentFaculty, studentSpecialization) {
        super(studentName, studentAge, studentFaculty);
        this.studentSpecialization = studentSpecialization;
    };

    displayInfo(){
        return("Student Name: " + this.studentName + " Student Age: " 
        + this.studentAge + " Student Faculty: " + this.studentFaculty 
        + " Student Specialization: " + this.studentSpecialization);
    };
}

const studentOne = new MedicalStudent ('Alex', '23', 'General medicine', 'Cadreologist');
const studentTwo = new MedicalStudent ('Bob', '29', 'Dentistry', 'Implant surgeon');
const studentThree = new MedicalStudent ('Milena', '19', 'Pharmacy', 'Druggist');

console.group();
console.log(studentOne.displayInfo());
console.log(studentTwo.displayInfo());
console.log(studentThree.displayInfo());
console.groupEnd();

//*DZ-2

const frenchFoods = ['apple', 'lemon'];
const Foods = ['milk', 'sugar', ...frenchFoods];

console.log('foods==>', Foods);
