interface Game {
  title: string;
  description: string;
  genre: string;
  plataform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  title: 'The Last of Us',
  description: 'The best game in the world',
  genre: 'Action',
  plataform: ['PS3', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`Similars games to ${title}: Uncharted, A Plague Tale, Metro`);
  }
}

if(tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  title: 'The Last of US - Left Behind',
  description: 'You play as Ellie before the original game',
  genre: 'Action',
  originalGame: tlou,
  newContent: ['3 hours of story', 'new characters']
}

console.log(leftbehind.genre)

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}