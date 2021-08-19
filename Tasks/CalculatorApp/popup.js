document.getElementById("submit").addEventListener("click", calculate)
document.getElementById("7btn").addEventListener("click", () => (des(7)))
document.getElementById("8btn").addEventListener("click", () => (des(8)))
document.getElementById("9btn").addEventListener("click", () => (des(9)))
document.getElementById("4btn").addEventListener("click", () => (des(4)))
document.getElementById("5btn").addEventListener("click", () => (des(5)))
document.getElementById("6btn").addEventListener("click", () => (des(6)))
document.getElementById("1btn").addEventListener("click", () => (des(1)))
document.getElementById("2btn").addEventListener("click", () => (des(2)))
document.getElementById("3btn").addEventListener("click", () => (des(3)))
document.getElementById("0btn").addEventListener("click", () => (des(0)))
document.getElementById("+btn").addEventListener("click", () => (des("+")))
document.getElementById("/btn").addEventListener("click", () => (des("/")))
document.getElementById("-btn").addEventListener("click", () => (des("-")))
document.getElementById("*btn").addEventListener("click", () => (des("*")))

function calculate(){
    var input = document.getElementById("outputField").value
    const value = eval(input)
    document.getElementById("outputField").value=value
}

function des(val){

    document.getElementById("outputField").value+=val
}