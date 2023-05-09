export {rps,rpsls};

const rpsOptions = ["rock", "paper", "scissors"];
const rpslsOptions = ["rock", "paper", "scissors", "lizard", "spock"];
const opponentShotrps = rpsOptions[Math.floor(Math.random() * 3)];
const opponentShotrpsls = rpslsOptions[Math.floor(Math.random() * 3)];

function rps(shot) {
    //is the shot valid? 
  if (shot == undefined || shot == null) {
      return { player: opponentShotrps };
  }

  shot = shot.toLowerCase();
  if (!rpsOptions.includes(shot)){
    return new RangeError();
  }

  let result;

  if (shot === 'rock') {
    if (opponentShotrps === 'rock') {
        result = 'tie';
    }  else if (opponentShotrps === 'paper') {
        result = 'lose';
    } else {
        result = 'win';
    }
} else if (shot === 'paper') {
    if (opponentShotrps === 'rock') {
        result = 'win';
    } else if (opponentShotrps === 'paper') {
        result = 'tie';
    } else {
        result = 'lose';
    }
  } else {
    if (opponentShotrps === 'rock') {
        result = 'lose';
    } else if (opponentShotrps === 'paper') {
        result = 'win';
    } else {
        result = 'tie';
    }
  }

  return {'player': shot, 'opponent': opponentShotrps, 'result': result};

}


