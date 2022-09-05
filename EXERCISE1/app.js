/******************************
 * Objetivo: Exibir o sistema de notas
 * Autor: Bianca Correia
 ******************************/

const {exit} = require('process');
var readline = require('readline');
const { average } = require = ('./module/note');


var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('SEJA BEM-VINDO(A) A UNIVERSIDADE OXFORD')


//Couse name 
entradaDados.question('Course Name: ', function(nameCourse){
    let course = nameCourse;
    //Validation and error message
    if(course == ''){
        console.log('Please, enter the course name!');
        exit();
    }
    
    //Name discipline
    entradaDados.question('Discipline name: ', function(nameDiscipline){
        let discipline = nameDiscipline;
        //Validation and error message
        if(discipline == ''){
            console.log('Please, enter the discplina name!');
            exit();
        }

        //Teacher´s name
        entradaDados.question('Teacher´s name: ', function(teacherName){
            let teacher = teacherName;
            //Validation and error message
            if(teacher == ''){
                console.log('Please, enter the teacher´s name!');
                exit();
            };

            //Gender of the Teacher´s
            entradaDados.question('What is the gender of the teacher´s?, Female(F) or Male(M): ', function(typeTeacher){
                let genderTeacher = typeTeacher;
                
                //Validation and error message
                if(genderTeacher == ''){
                    console.log('Please, enter the gender of the teacher´s!');
                    exit();
                };

                //Name student
                entradaDados.question('Student´s name: ', function(nameStudent){
                    let student = nameStudent;

                    //Validation and error message
                    if(student == ''){
                        console.log('Please, enter the student´s name!');
                        exit();
                    };

                    //Gender of the Student´s
                    entradaDados.question('What is the gender of the student´s?, Female(F) or Male(M): ', function(typeStudent){
                        let genderStudent = typeStudent;    

                        //Validation and error message
                        if(genderStudent == ''){
                            console.log('Please, enter the gender of the student´s!')
                            exit();
                        };

                        entradaDados.question('Note 1: ', function(number1){
                            let note1 = number1;

                            entradaDados.question('Note 2: ', function(number2){
                                let note2 = number2;

                                entradaDados.question('Note 3: ', function(number3){
                                    let note3 = number3;

                                    entradaDados.question('Note 4: ', function(number4){
                                        let note4 = number4;

                                        let totalAverage = average(note1, note2, note3, note4);
                                        
                                        if (totalAverage != false){
                                            console.log(totalAverage);

                                            let studentStatus = validationStatus (totalAverage)
                                            console.log (studentStatus)

                                            if(studentStatus == 'Exam!'){
                                                entradaDados.question('What is your exam grade? ', function(noteExam){

                                                    let examStudent = exam(noteExam, totalAverage)
                                                    console.log(examStudent);

                                                    let validationExam = examValidation(validationExam);
                                                    console.log(validationExam);
                                                });
                                            };

                                            reportStudent(course, discipline, studentStatus, totalAverage, averageExam, note1, note2, note3, note4, noteExam, nameStudent, genderStudent, teacherName, genderTeacher)


                                        }
                                    });
                                });
                                
                            });
                        });
                    });
                });
            });
        });
    });
});