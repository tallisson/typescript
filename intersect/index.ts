type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
};

type CharInfo = {
  nickname: string;
  level: number;
};

type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 12,
  nickname: 'thiagua',
  name: 'Thiago',
  level: 100,
}

console.log(player);