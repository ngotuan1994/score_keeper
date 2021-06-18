let p1 = document.getElementById("player1-btn");
let p2 = document.getElementById("player2-btn");
let reset = document.getElementById("reset-btn");
let goal = document.getElementById("setGoal");
let setgoal = document.getElementById("goal");
let p1S = 0;
let p2S = 0;
let p1Score = document.getElementById("player1-score");
let p2Score = document.getElementById("player2-score");

goal.addEventListener("change",()=>{
    
    setgoal.textContent = goal.value;
})
p1.addEventListener("click", ()=>{
    if(Number(goal.value) > Number(p1Score.textContent)  && Number(goal.value) > Number(p2Score.textContent)){
        p1S++;
        p1Score.textContent = p1S;
    }
    if(Number(goal.value) === Number(p1Score.textContent))
        p1Score.style.color = "green";
})
p2.addEventListener("click", ()=>{
    if(Number(goal.value) > Number(p1Score.textContent)  && Number(goal.value) > Number(p2Score.textContent)){
        p2S++;
        p2Score.textContent = p2S;
    }
    if(Number(goal.value) === Number(p2Score.textContent))
        p2Score.style.color = "green";
})
reset.addEventListener("click", () =>{
    p1S=0;
    p2S=0;
    p1Score.textContent = p1S;
    p2Score.textContent = p2S;
    p1Score.style.color = "";
    p2Score.style.color = "";
})

