import { v4 as uuidv4 } from 'uuid';
// MOCKING SOME DATA HERE

const groups = [
  {
    name: 'Apaixonados por Xadrez',
    game: 'Xadrez',
    description:
      'Ed do eiusmod tempor incidunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam in',
    numMembers: 3,
    id: '0-xadrez',
    member: false,
    creator: false,
    requesting: false,
  },
  {
    name: 'Lolzeiros',
    game: 'League of Legends',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et',
    numMembers: 21,
    id: '1-lolzeiros',
    member: false,
    creator: false,
  },
  {
    name: 'Bora de CS:GO',
    game: 'Counter-Strike: Global Offensive',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et',
    numMembers: 38,
    id: '2-csgo',
    member: false,
    creator: false,
  },
  {
    name: 'Minecraftmaniacos',
    game: 'Minecraft',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt ut labore et',
    numMembers: 9,
    id: '3-mine',
    member: false,
    creator: false,
  },
];

export const addGroup = (
  name,
  game,
  description,
  numMembers,
  member,
  creator
) => {
  const id = uuidv4();
  groups.push({
    name,
    game,
    description,
    numMembers,
    member,
    creator,
    id,
  });
  return id;
};

export const getGroups = () => groups;

export const getMyGroups = () => groups.filter((g) => g.member);

export const getGroupById = (id) => groups.find((g) => g.id === id);

export const editGroup = (id, object) => {
  groups = groups.map((obj) => (obj.id === id ? object : obj));
};
