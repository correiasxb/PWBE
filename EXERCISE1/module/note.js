const {exit}  = require("process");

const average = function(note1, note2, note3, note4){
    let number1 = note1;
    let number2 = note2;
    let number3 = note3;
    let number4 = note4;
    let studentStatus;
    let average;
    let noteExam;
    let erro = false;
    let validationStatus;

    //validation off all completed grades
    if(number1 == ''|| number2 == ''|| number3 == ''|| number4 == ''){
        console.log('Please, enter all the notes');
        erro = true;
    }else if(number1 < 0 || number1 > 100 ||(number2 > 100)|| (number3 < 0 || number3 > 100)|| (number4 < 0|| number4 >100)){
        console.log('ERROR, please enter grades between 0 to 100')
        erro = true;
    }else{
        average = (parseFloat(number1) + parseFloat(number2) + parseFloat(number3) + parseFloat(number4))/4;
    }
    if(erro){
        return false;
    }else{
        return average
    }
}
const validationStatus = function(average){
    if(average >= 70){
        studentStatus = 'APPROVED'
    }else if(average < 50){
        studentStatus = 'DISAPRROVED'
    }else if(average >= 50 || average <= 69){
        studentStatus = 'EXAM'
    }
    return studentStatus
}
const reportExam = function(averageExam, average){
    let noteExam = averageExam;
    let result = average;
    let finalGrade;

    finalGrade = (average + averageExam)/2
    if(finalGrade > 60){
        studentStatus = 'APPROVED'
    }
}

const exam = function(averageExam, average){
    let note = averageExam;
    let mediaExam = (parseFloat(average) + parseFloat(note2))/2;
    return mediaExam;
}

const validationExam = function(examStudent){
    let studentStatus
    if(examStudent >= 60){
        studentStatus = 'APPROVED'
    }else{
        studentStatus = 'DISAPPROVED'
    }
    return studentStatus;
}

const reportStudent = function(discipline,studentStatus, note1, note2, note3, note4, noteExam, nameStudent, genderStudent){
    if(genderStudent == 'f'){
        console.log('The student(A) ${nameStudent} was ${studentStatus} in the discpline ${discipline} ')
        console.log('Grades her: ${note1}, ${note2}, ${note3}, ${note4}, ${noteExam} ')
    }else{
        console.log('The student(O) ${nameStudent} was ${studentStatus} in the discpline ${discipline} ')
        console.log('Grades his: ${note1}, ${note2}, ${note3}, ${note4}, ${noteExam} ')
    }
}

const reportTeacher = function(teacherName, genderTeacher){
    if(genderTeacher = 'f'){
        console.log('Teacher(A): ${teacherName}')
    }else{
        console.log('Teacher(o): ${teacherName}');
    }
};

const reportAll = function(couse, discipline, studentStatus, totalAverage, mediaExam, note1, note2, note3, note4, noteExam, genderStudent, teacherName, genderTeacher){
    reportStudent(discipline, studentStatus, note1, note2, note3, note4, noteExam, nameStudent, genderStudent)
    console.log(`Course: {course}`)
    reportTeacher(teacherName, genderTeacher)
    console.log(`End: ${totalAverage}`)
    console.log('Exam result: ' + reportExam());
}

module.exports = {
    average, validationStatus, reportExam, exam, validationExam, reportAll
}