const refreshAllText = "Refresh all";

export default function TileUpdater({
  handleClick,
}: {
  handleClick: VoidFunction;
}) {
  return (
    <button className="tile-updater" onClick={handleClick}>
      {refreshAllText}
    </button>
  );
}
