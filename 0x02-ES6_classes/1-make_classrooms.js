import ClassRoom from './0-classroom';

const size19 = new ClassRoom(19);
const size20 = new ClassRoom(20);
const size34 = new ClassRoom(34);

export default function intializeRooms() {
  return [
    `ClassRoom { _maxStudentsSize: ${size19._maxStudentsSize} }`,
    `ClassRoom { _maxStudentsSize: ${size20._maxStudentsSize} }`,
    `ClassRoom { _maxStudentsSize: ${size34._maxStudentsSize} }`,
  ];
}
