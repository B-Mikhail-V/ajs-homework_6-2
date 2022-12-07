export default function getAttack(obj) {
  const attackArray = [];
  /* eslint-disable-next-line */
  for (const value of Object.values(obj.special)) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = value;
    const arrayTemp = [id, name, icon, description];
    attackArray.push(arrayTemp);
  }

  return attackArray;
}
