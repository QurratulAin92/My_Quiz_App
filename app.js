//var name = prompt("Please Enter your Name first")

function check(){
    var score = 0
    var ri_ans_1 = document.getElementById("q1_o3")
    var a = document.getElementById("q1_o1")
    var b = document.getElementById("q1_o2")
    var c = document.getElementById("q1_o4")

    if(ri_ans_1.checked == true){
        score++
    }

    var ri_ans_2 = document.getElementById("q2_o2")
    var a = document.getElementById("q2_o1")
    var b = document.getElementById("q2_o3")
    var c = document.getElementById("q2_o4")

    if(ri_ans_2.checked == true){
        score++
       

    }

    var ri_ans_3 = document.getElementById("q3_o3")
    var a = document.getElementById("q3_o1")
    var b = document.getElementById("q3_o2")
    var c = document.getElementById("q3_o4")

    if(ri_ans_3.checked == true){
        score++
       

    }

    var ri_ans_4 = document.getElementById("q4_o1")
    var a = document.getElementById("q4_o3")
    var b = document.getElementById("q4_o2")
    var c = document.getElementById("q4_o4")

    if(ri_ans_4.checked == true){
        score++
       

    }

    var ri_ans_5 = document.getElementById("q5_o3")
    var a = document.getElementById("q5_o1")
    var b = document.getElementById("q5_o2")
    var c = document.getElementById("q5_o4")

    if(ri_ans_5.checked == true){
        score++

    }
    alert("Hi  " + name + "!" +  "  Your score is  " + score)
}