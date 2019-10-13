import Butterfly from '../Common/img/avatars/butterfly.png';
import Deer from '../Common/img/avatars/deer.png';
import Elephant from '../Common/img/avatars/elephant.png';
import Fox from '../Common/img/avatars/fox.png';
import Frog from '../Common/img/avatars/frog.png';
import Giraffe from '../Common/img/avatars/giraffe.png';
import Hamster from '../Common/img/avatars/hamster.png';
import Lion from '../Common/img/avatars/lion.png';
import Monkey from '../Common/img/avatars/monkey.png';
import Mouse from '../Common/img/avatars/mouse.png';
import Octopus from '../Common/img/avatars/octopus.png';
import Panda from '../Common/img/avatars/panda.png';
import Pig from '../Common/img/avatars/pig.png';
import Reindeer from '../Common/img/avatars/reindeer.png';
import Rhino from '../Common/img/avatars/rhino.png';
import Shark from '../Common/img/avatars/shark.png';

const animals = [Butterfly, Deer, Elephant, Fox, Frog, Giraffe,
  Hamster, Lion, Monkey, Mouse, Octopus, Panda, Pig, Reindeer, Rhino, Shark
];

export default function getAvatar() {
  const index = Math.floor(Math.random() * animals.length);
  return animals[index];
}
