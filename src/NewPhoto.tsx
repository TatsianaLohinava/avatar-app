export default function NewPhoto({
  handleClick,
}: {
  handleClick: VoidFunction;
}) {
  return <button className="tile tile-new" onClick={handleClick}></button>;
}
