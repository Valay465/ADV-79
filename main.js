var name_of_the_student=[];
function submit() {
var name_1=document.getElementById("NO1").value;
var name_2=document.getElementById("NO2").value;
var name_3=document.getElementById("NO3").value;
var name_4=document.getElementById("NO4").value;
name_of_the_student.push(name_1);
name_of_the_student.push(name_2);
name_of_the_student.push(name_3);
name_of_the_student.push(name_4);
console.log (name_of_the_student);
document.getElementById("JK").innerHTML=name_of_the_student;
document.getElementById("STUDENT").style.display="none";
document.getElementById("SORT").style.display="inline-block";
};
function sort() {
    name_of_the_student.sort();
    console.log (name_of_the_student);
    document.getElementById("JK").innerHTML=name_of_the_student;
}
