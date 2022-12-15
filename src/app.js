export default function getAttack({ special }) {
  return special.map(({ description = 'Описание недоступно', ...item }) => ({ ...item, description }));
}
