//Insert level 9 code below
//Insert you code below
//this is for the exercise number 9

while (notDone()) {
    if (isPathForward()) {
      moveForward();
    } else {
      turnLeft();
    }
  }

  
  //this is for the exercises number 10

  while (notDone()) {
    if (isPathLeft()) {
      turnLeft();
    }
    if (isPathForward()) {
      moveForward();
    } else {
      turnRight();
    }
  }