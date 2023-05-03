nameofstudentarray=[];
function submit(){
    var name_1=document.getElementById("name_student_1").value;
    var name_2=document.getElementById("name_student_2").value;
    var name_3=document.getElementById("name_student_3").value;
    var name_4=document.getElementById("name_student_4").value;
    nameofstudentarray.push(name_1);
    nameofstudentarray.push(name_2); 
    nameofstudentarray.push(name_3); 
    nameofstudentarray.push(name_4); 
    console.log(nameofstudentarray);
    document.getElementById("display_name").innerHTML=nameofstudentarray;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    nameofstudentarray.sort();
    document.getElementById("display_name").innerHTML=nameofstudentarray;
}


