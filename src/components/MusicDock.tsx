"use client";

import { useState } from "react";

export default function MusicDock() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className={`music-dock ${expanded ? "music-dock--expanded" : "music-dock--minimized"}`} aria-label="Now playing">
      <button
        type="button"
        className="music-dock__topline"
        aria-expanded={expanded}
        aria-controls="tony-fm-player"
        onClick={() => setExpanded((open) => !open)}
      >
        <div className="music-dock__label">
          <span className="music-dock__live">live</span>
          <span>tony.fm</span>
        </div>
        <div className="music-dock__bars" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </div>
        <span className="music-dock__toggle" aria-hidden="true">{expanded ? "minimize −" : "play +"}</span>
      </button>
      <div id="tony-fm-player" className="music-dock__player" aria-hidden={!expanded}>
        <iframe
          title="Tony's current soundtrack"
          allow="autoplay *; encrypted-media *;"
          frameBorder="0"
          height="150"
          loading="eager"
          tabIndex={expanded ? 0 : -1}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/id1-from-the-warehouse-project-max-dean-b3b-luke-dean/1895188048?i=6763153869&app=music"
        />
      </div>
    </aside>
  );
}
