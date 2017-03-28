function printScore(serial : { name: string, score: number}) : void {
  console.log(`Name of the serial : ${serial.name}`);
  console.log(`User score : ${serial.score}`);
}

let serialObj = {
  'name': 'westworld',
  'score': 10
};

printScore(serialObj);

/// ---> PUTTING THIS INTO AN Interface
interface IScore {
  name: string;
  score: number;
}

function printScoreWithInterface(serial: IScore): void {
  console.log(`Name of the serial : ${serial.name}`);
  console.log(`User Score : ${serial.score}`);
}

printScoreWithInterface(serialObj);

const serialOnlyNameObj = { 
  'name': 'Game Of Thrones'
};

//printScoreWithInterface(serialOnlyNameObj);

/// INTERFACE WITH OPTIONAL PARAMETERS
interface ISerial {
  name: string;
  season: number;
  year: number;
  director?: string;
}

function printSerialWithInterface(serial: ISerial): void {
  console.log(`Name of the serial : ${serial.name}`);
  console.log(`Season : ${serial.season}`);
  console.log(`Director: ${serial.director}`);
}

const gotObj = { 
  'name': 'Game Of Thrones',
  'season': 7,
  'year': 2017
};

printSerialWithInterface(gotObj);
