export default function getAttack({ special }) {
  const attackArray = [];
  /* eslint-disable-next-line */
  for (const att of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = att;
    const arrayTemp = [id, name, icon, description];
    attackArray.push(arrayTemp);
  }
  return attackArray;
}
