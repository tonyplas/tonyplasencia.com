export default function MusicDock() {
  return (
    <aside className="music-dock" aria-label="Now playing">
      <div className="music-dock__topline">
        <div className="music-dock__label">
          <span className="music-dock__live">live</span>
          <span>tony.fm</span>
        </div>
        <div className="music-dock__bars" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </div>
      </div>
      <iframe
        title="Tony's current soundtrack"
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="150"
        loading="eager"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/album/id1-from-the-warehouse-project-max-dean-b3b-luke-dean/1895188048?i=6763153869&app=music"
      />
    </aside>
  );
}
