var quiz = {
    // (A) PROPERTIES 
    // (A1) QUESTIONS & ANSWERS
    // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
    data: [
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for a curve to the right",
        "Turning right mandatory",
        "Turning left mandatory",
        "Warning for a curve to the left"
      ],
      a : 1, // arrays start with 0, so answer is 70 meters
      m: "symbol.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Turning left mandatory",
        "Turning right prohibited",
        "Warning for a roundabout",
        "Warning for an uncontrolled crossroad"
      ],
      a : 2,
      m: "symbol2.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for cyclists",
        "Cyclists prohibited",
        "Crossing for pedestrians",
        "Mandatory path for cyclists"
      ],
      a : 1,
      m: "symbol3.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Pedestrians and cyclists prohibited",
        "Warning for a narrowing",
        "Warning for a movable bridge",
        "Warning for a slippery road surface"
      ],
      a : 1,
      m: "symbol4.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Overtaking prohibited",
        "Overtaking allowed",
        "Begin of a new lane",
        "Mandatory lane for cars"
      ],
      a : 0,
      m: "symbol5.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Mandatory divided path for pedestrians",
        "Passing left or right mandatory",
        "Warning for a double curve",
        "Begin of a new lane"
      ],
      a : 1,
      m: "symbol6.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Driving straight ahead prohibited",
        "Passing left mandatory",
        "Warning for a curve to the left",
        "Turning left prohibited"
      ],
      a : 1,
      m: "symbol7.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Vehicles longer than indicated prohibited",
        "Vehicles higher than indicated prohibited",
        "Vehicles heavier than indicated prohibited",
        "Parking allowed for vehicles heavier than indicated"
      ],
      a : 2,
      m: "symbol8.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Begin of a zone for pedestrians",
        "Pedestrians prohibited",
        "End of the zone for pedestrians",
        "Mandatory path for pedestrians"
      ],
      a : 1,
      m: "symbol9.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "End of the speed limit",
        "Parking prohibited",
        "Cars prohibited",
        "Entry prohibited"
      ],
      a : 3,
      m: "symbol10.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for a road narrowing",
        "Mandatory path for cyclists",
        "End of the path for cyclists",
        "End of the priority road"
      ],
      a : 0,
      m: "symbol11.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Begin of a motorway",
        "End of the speed limit",
        "Begin of a speed limit",
        "Cars prohibited"
      ],
      a : 1,
      m: "symbol12.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for mopeds",
        "Mandatory path for motorcycles",
        "Motorcycles prohibited",
        "Mopeds prohibited"
      ],
      a : 2,
      m: "symbol13.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for an uncontrolled crossroad",
        "Warning for a traffic light",
        "Warning for a movable bridge",
        "Warning for railroad crossing"
      ],
      a : 1,
      m: "symbol14.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Parking allowed",
        "Entry prohibited",
        "Road with one-way traffic",
        "Parking prohibited"
      ],
      a : 3,
      m: "symbol15.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Road with one-way traffic",
        "Warning for two-way traffic",
        "Driving straight ahead prohibited",
        "Turning left prohibited"
      ],
      a : 2,
      m: "symbol16.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Entry prohibited, except for vehicles faster than indicated",
        "Begin of a residential area",
        "Begin of a zone with speed limit",
        "Begin of a speed limit"
      ],
      a : 3,
      m: "symbol17.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Mandatory right",
        "Mandatory left",
        "Driving straight ahead prohibited",
        "Turning right prohibited"
      ],
      a : 0,
      m: "symbol18.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for an uncontrolled crossroad",
        "Warning for a curve to the left",
        "Turning left prohibited",
        "Turning left mandatory"
      ],
      a : 1,
      m: "symbol19.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Turning right mandatory",
        "Passing right mandatory",
        "Passing right prohibited",
        "Warning for a curve to the right"
      ],
      a : 1,
      m: "symbol20.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for heavy crosswind",
        "Warning for a railroad crossing with 1 railway",
        "Parking prohibited",
        "Overtaking prohibited"
      ],
      a : 1,
      m: "symbol21.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Mandatory path for equestrians",
        "Warning for equestrians",
        "Horsecarts prohibited",
        "Handcarts prohibited"
      ],
      a : 2,
      m: "symbol22.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Vehicles with an axle weight heavier than indicated prohibited",
        "Vehicles longer than indicates prohibited",
        "Warning for a soft verge",
        "Trucks prohibited"
      ],
      a : 0,
      m: "symbol23.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for a railroad crossing with more than 1 railway",
        "Mandatory lane for buses",
        "Warning for a railroad crossing with 1 railway",
        "Warning for a roundabout"
      ],
      a : 0,
      m: "symbol24.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "End of the expressway",
        "Motorcycles and cars prohibited",
        "Mandatory lane for motorcycles and cars",
        "End of the built-up area"
      ],
      a : 1,
      m: "symbol25.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Turning right mandatory",
        "Warning for a curve to the left",
        "Warning for a curve to the right",
        "Turning left prohibited"
      ],
      a : 2,
      m: "symbol26.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Overtaking prohibited",
        "Driving straight ahead mandatory",
        "Begin of a priority road",
        "Road with two-way traffic"
      ],
      a : 1,
      m: "symbol27.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Trucks prohibited",
        "Vehicles higher than indicated prohibited",
        "Vehicles wider than indicated prohibited",
        "Vehicles longer than indicated prohibited"
      ],
      a : 3,
      m: "symbol28.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for a soft verge",
        "Warning for a quayside or riverbank",
        "Warning for a bad road surface",
        "Warning for roadworks"
      ],
      a : 2,
      m: "symbol29.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Parking is allowed",
        "Begin of a zone for pedestrians",
        "Entry prohibited",
        "Pedestrians prohibited"
      ],
      a : 0,
      m: "symbol30.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for a movable bridge",
        "Vehicles higher than indicated prohibited",
        "Vehicles heavier than indicated prohibited",
        "Warning for a tunnel"
      ],
      a : 1,
      m: "symbol31.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Entry prohibited (road with one-way traffic)",
        "Parking prohibited",
        "Pedestrians prohibited",
        "Warning for an uncontrolled crossroad"
      ],
      a : 0,
      m: "symbol32.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for a road narrowing",
        "Entry prohibited",
        "Parking and stopping prohibited",
        "Parking allowed"
      ],
      a : 2,
      m: "symbol33.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for a curve to the left",
        "Driving straight ahead mandatory",
        "Turning left prohibited",
        "Turning around prohibited (U-turn)"
      ],
      a : 2,
      m: "symbol34.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Pedestrians and cyclists prohibited",
        "Warning for a tram",
        "Warning for a railroad crossing with barriers",
        "Warning for a railroad crossing without barriers"
      ],
      a : 3,
      m: "symbol35.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Turning left mandatory",
        "Warning for a curve to the left",
        "Turning left prohibited",
        "Road with one-way traffic"
      ],
      a : 0,
      m: "symbol36.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Turning left prohibited",
        "Driving straight ahead mandatory",
        "Mandatory left",
        "Entry prohibited"
      ],
      a : 2,
      m: "symbol37.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Entry prohibited",
        "Stop and give way to all drivers approaching from the right",
        "Stop and give way to all drivers",
        "Driving straight ahead prohibited"
      ],
      a : 2,
      m: "symbol38.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for an uncontrolled crossroad",
        "Mandatory direction of the roundabout",
        "Warning for a road narrowing",
        "Turning left mandatory"
      ],
      a : 1,
      m: "symbol39.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for trucks",
        "Trucks prohibited",
        "Entry prohibited, except for trucks",
        "Overtaking prohibited for trucks"
      ],
      a : 1,
      m: "symbol40.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Road with one-way traffic",
        "Turning around prohibited (U-turn)",
        "Turning around mandatory (U-turn)",
        "Turning left prohibited"
      ],
      a : 1,
      m: "symbol41.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Crossing for pedestrians",
        "Give way to all drivers",
        "Cyclists prohibited",
        "Warning for an uncontrolled crossroad"
      ],
      a : 1,
      m: "symbol42.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Begin of a zone for cyclists",
        "Warning for cyclists",
        "Mandatory path for cyclists",
        "Crossing for cyclists"
      ],
      a : 2,
      m: "symbol43.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Warning for a railroad crossing with barriers",
        "Entry prohibited",
        "Warning for roadworks",
        "Warning for trams"
      ],
      a : 0,
      m: "symbol44.png"
    },
    {
      q : "What does this traffic sign mean?",
      o : [
        "Turning left prohibited",
        "Turning right prohibited",
        "Entry prohibited",
        "Dead end street"
      ],
      a : 1,
      m: "symbol45.png"
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
      
    //   image section
      quiz.himg = document.createElement("img");

      quiz.himg.id = "quizImg";
      
      quiz.hWrap.appendChild(quiz.himg);
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
      quiz.himg.src = quiz.data[quiz.now].m;
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
    
      document.getElementById("scoreTracker").innerHTML = quiz.score+"/"+(quiz.now+1);

      // (D3) NEXT QUESTION OR END GAME
      quiz.now++;
      setTimeout(function(){
        if (quiz.now < quiz.data.length) { quiz.draw(); } 
        else {
          quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
          quiz.hAns.innerHTML = "";
          
          // if(quiz.score > 28){

          //   var ele2 = document.createElement('h3');
          //   alert(ele2);
          //   ele2.innerHTML = "Let’s do the “you passed” dance! No? You don’t want to do it? Fine, I’ll just do it myself, then. You passed! You passed! Oh yeah!";
          //   document.getElementByTagName("body").appendChild(ele2); 
          //   // ele2.position(200, 300)
        
          // } else {
            
          //   var ele2 = document.createElement('h3');
          //   alert(ele2);
          //   ele2.innerHTML = "Don’t even worry about this result. That’s all it is, a result. You didn’t get enough for the pass but you’ll pull through next time.";
          //   document.getElementByTagName("body").appendChild(ele2); 
          //   // ele2.position(200, 300)
          // }

        }
      }, 1000);
    }
  };

  window.addEventListener("load", quiz.init);