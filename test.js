const works = [
  {id: 1, name: "my work 1", isDone: true },
  {id: 2, name: "my work 2", isDone: false },
  {id: 3, name: "my work 3", isDone: true },
  {id: 4, name: "my work 4", isDone: true }
];

const id = 2;
// delete
const leftWorks = works.filter(work => work.id !== id);
