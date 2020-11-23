var counter = 1;

function changeRandomly(){
    if (counter === 1) {
      changeRandomly = levelOne();
    }
    else if (counter === 2) {
      changeRandomly = levelTwo();
    }
    else if (counter == 3 ){
      changeRandomly = levelThree();
    }
    else if (counter == 4 ){
      changeRandomly = levelFour();
    }
    else if (counter == 5 ) {
      changeRandomly = levelFive();
    }
    else {
      changeRandomly = levelInsane();
    }
    return;
}

function levelOne(event) {
    setTimeout(function () {
      btnMover();
    }, 2000);
    console.log("level - 1");
    return;
  }
  
function levelTwo(event) {
    setTimeout(function () {
      btnMover();
    }, 1000);
    console.log("level - 2");
    return;
  }
  
function levelThree(event) {
    setTimeout(function () {
      btnMover();
    }, 600);
    console.log("level - 3");
    return;
}

function levelFour(event) {
  setTimeout(function () {
    btnMover();
  }, 300);
  console.log("level - 4");
  return;
}

function levelFive(event) {
  setTimeout(function () {
    btnMover();
  }, 150);
  console.log("level - 5");
  return;
}

function levelInsane(event) {
  setTimeout(function () {
    btnMover();
  }, 100); 
  console.log("level - xxx");
  return;
}
function btnMover() {
    button.style.marginTop = Math.random() * 300 + "px";
    button.style.marginLeft = Math.random() * 300 + "px";
    return;
  }

function winner(event) {
    
    alert('Level '+counter+' completed');
    counter++;
    console.log(counter);
    if(counter == 6){
      alert('Congrats you finished the game!');
      alert('Impossible Level Up Next'); 
    }

    if(counter == 7){
     var r = confirm('Guess not impossible! Please quit the game now');
     if (r == true){
       window.close();
     }else if (r == false){
       alert('nerd');
       window.close();
     }
    }

  }

var button = document.getElementById("btn");
button.addEventListener("mouseover", changeRandomly);
button.addEventListener("click", winner);