export default function createPlayer(type, name = "Ai") {
  const user = {
    name: name,
    type: type,
  };
  return user;
}
