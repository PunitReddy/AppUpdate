var quiz = {
    // (A) PROPERTIES 
    // (A1) QUESTIONS & ANSWERS
    // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
    data: [
    {
      q : "What is the minimum age for driving a motorcycle without gear?",
      o : [
        "16 years",
        "18 years",
        "21 years",
        "17 years"
      ],
      a : 0 // arrays start with 0
    },
    {
      q : "What should you do when you see a traffic sign of a school nearby?",
      o : [
        "Stop the vehicle",
        "Slow down and proceed carefully",
        "Press horn and proceed in the same speed",
        "Proceed at the same speed"
      ],
      a : 1
    },
    {
      q : "Before you overtake a vehicle what should you keep in mind?",
      o : [
        "The road ahead should be clearly visible and overtaking should be safe",
        "The road is not safe",
        "There are no vehicles ahead",
        "The speed of you vehicle"
      ],
      a : 0
    },
    {
      q : "If a driver sees the sign for ‘slippery road ahead’, he/she must",
      o : [
        "Drive faster",
        "Change gear and reduce speed",
        "Apply brake but proceed in the same speed",
        "Stop the vehicle"
      ],
      a : 1
    },
    {
      q : "A passenger may not be carried on a motorcycle unless it has…?",
      o : [
        "Mudguards",
        "A large engine",
        "Wide tires",
        "Proper foot rests"
      ],
      a : 3
    },
    {
      q : "Overspeeding is...",
      o : [
        "Not an offence and can be neglected",
        "Is an offence but no charges are pressed against you",
        "an offence that could lead to your driving licence being cancelled or suspended",
        "Safe"
      ],
      a : 2
    },
    {
      q : "In case you see a vehicle that has met with an accident with injured passengers inside, you should",
      o : [
        "Stop your vehicle and report the matter to the nearest police station",
        "Take the vehicle to the closest police station and report the accident",
        "Take measures to secure medical attention to those injured and report the accident to the closest police station within a period of 24 hours",
        "Continue driving"
      ],
      a : 2
    },
    {
      q : "The only vehicle which is allowed to drive at a speed of 60km/ hour is",
      o : [
        "Motor car",
        "Heavy bus/trucks",
        "Motorcycles",
        "All of the above"
      ],
      a : 0
    },
    {
      q : "The only vehicle which is allowed to drive at a speed of 60km/ hour is",
      o : [
        "Suppose you are driving on a road with two lanes. The vehicle to the front of you is driving slowly and the road ahead is clear and safe to overtake. What should you do?",
        "Overtake the vehicle from the right side of the vehicle ahead",
        "Overtake if the road is wide enough ",
        "All of the above"
      ],
      a : 0
    }

    ],
  
    // (A2) HTML ELEMENTS
    hWrap: null, // HTML quiz container
    hQn: null, // HTML question wrapper
    hAns: null, // HTML answers wrapper
  
    // (A3) GAME FLAGS
    now: 0, // current question
    score: 0, // current score
  
    // (B) INIT QUIZ HTML
    init: function(){
      // (B1) WRAPPER
      quiz.hWrap = document.getElementById("quizWrap");
  
      // (B2) QUESTIONS SECTION
      quiz.hQn = document.createElement("div");
      quiz.hQn.id = "quizQn";
      quiz.hWrap.appendChild(quiz.hQn);
  
      // (B3) ANSWERS SECTION
      quiz.hAns = document.createElement("div");
      quiz.hAns.id = "quizAns";
      quiz.hWrap.appendChild(quiz.hAns);
  
      // (B4) GO!
      quiz.draw();
    },
  
    // (C) DRAW QUESTION
    draw: function(){
      // (C1) QUESTION
      quiz.hQn.innerHTML = quiz.data[quiz.now].q;
  
      // (C2) OPTIONS
      quiz.hAns.innerHTML = "";
      for (let i in quiz.data[quiz.now].o) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.id = "quizo" + i;
        quiz.hAns.appendChild(radio);
        let label = document.createElement("label");
        label.innerHTML = quiz.data[quiz.now].o[i];
        label.setAttribute("for", "quizo" + i);
        label.dataset.idx = i;
        label.addEventListener("click", quiz.select);
        quiz.hAns.appendChild(label);
      }
    },
    
    // (D) OPTION SELECTED
    select: function(){
      // (D1) DETACH ALL ONCLICK
      let all = quiz.hAns.getElementsByTagName("label");
      for (let label of all) {
        label.removeEventListener("click", quiz.select);
      }
  
      // (D2) CHECK IF CORRECT
      let correct = this.dataset.idx == quiz.data[quiz.now].a;
      if (correct) { 
        quiz.score++; 
        this.classList.add("correct");
      } else {
        this.classList.add("wrong");
      }
    
      document.getElementById("scoreBox").innerHTML = quiz.score+"/"+(quiz.now+1);

      // (D3) NEXT QUESTION OR END GAME
      quiz.now++;
      setTimeout(function(){
        if (quiz.now < quiz.data.length) { quiz.draw(); } 
        else {
          quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
          quiz.hAns.innerHTML = "";
        }
      }, 1000);
    }
  };
  window.addEventListener("load", quiz.init);