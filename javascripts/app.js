
const nasa = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [[0, 0]],
};
const obstacle = {
  x: 1,
  y: 2,
};
const judy = {
  direction: 'N',
  x: 4,
  y: 8,
  travelLog: [[4, 8]],
};
const ruby = {
  direction: 'N',
  x: 8,
  y: 4,
  travelLog: [[8, 4]],
};

function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    default:
      console.log('Wrong direction!');
  }
  console.log(`turnLeft was called! Your direction is ${rover.direction}`);
}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
    default:
      console.log('Wrong direction!');
  }
  console.log(`turnRight was called! Your direction is ${rover.direction}`);
}

function moveForward(rover) {
  const oldx = rover.x;
  const oldy = rover.y;
  if (rover.direction === 'N' && rover.y <= 9 && rover.y > 0) {
    rover.y -= 1;
  }
  if (rover.direction === 'S' && rover.y >= 0 && rover.y < 9) {
    rover.y += 1;
  }
  if (rover.direction === 'W' && rover.x <= 9 && rover.x > 0) {
    rover.x -= 1;
  }
  if (rover.direction === 'E' && rover.x >= 0 && rover.x < 9) {
    rover.x += 1;
  }
  if (crash(rover)) {
    rover.x = oldx;
    rover.y = oldy;
  } else {
    nasa.travelLog.push([rover.x, rover.y]);
    ruby.travelLog.push([rover.x, rover.y]);
    judy.travelLog.push([rover.x, rover.y]);
  }
}

function crash(rover) {
  let teste = false;
  if (rover.x === obstacle.x && rover.y === obstacle.y) {
    console.log(`You'll crash!`);
    teste = true;
  } else if (nasa.x === ruby.x && nasa.y === ruby.y) {
    console.log(`You'll crash!`);
    teste = true;
  } else if (nasa.x === judy.x && nasa.y === judy.y) {
    console.log(`You'll crash!`);
    teste = true;
  } else if (judy.x === ruby.x && judy.y === ruby.y) {
    console.log(`You'll crash!`);
    teste = true;
  }
  return teste;
}

function moveBackwards(rover) {
  if (rover.direction === 'N' && rover.y >= 0 && rover.y < 9) {
    rover.y += 1;
  }
  if (rover.direction === 'S' && rover.y <= 9 && rover.y > 0) {
    rover.y -= 1;
  }
  if (rover.direction === 'W' && rover.x >= 0 && rover.x < 9) {
    rover.x += 1;
  }
  if (rover.direction === 'E' && rover.x > 0 && rover.x <= 9) {
    rover.x -= 1;
  }
}

function commandsNasa(command) {
  for (let i = 0; i < command.length; i += 1) {
    switch (command[i]) {
      case 'r':
        turnRight(nasa);
        break;
      case 'l':
        turnLeft(nasa);
        break;
      case 'f':
        moveForward(nasa);
        break;
      case 'b':
        moveBackwards(nasa);
        break;
      default:
        console.log('invalid command');
        break;
    }
  }
}

function commandsRuby(command) {
  for (let i = 0; i < command.length; i += 1) {
    switch (command[i]) {
      case 'r':
        turnRight(ruby);
        break;
      case 'l':
        turnLeft(ruby);
        break;
      case 'f':
        moveForward(ruby);
        break;
      case 'b':
        moveBackwards(ruby);
        break;
      default:
        console.log('invalid command');
        break;
    }
  }
}

function commandsJudy(command) {
  for (let i = 0; i < command.length; i += 1) {
    switch (command[i]) {
      case 'r':
        turnRight(judy);
        break;
      case 'l':
        turnLeft(judy);
        break;
      case 'f':
        moveForward(judy);
        break;
      case 'b':
        moveBackwards(judy);
        break;
      default:
        console.log('invalid command');
        break;
    }
  }
}