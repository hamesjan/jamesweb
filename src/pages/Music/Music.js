import spotifyImage from "../../assets/imgs/spotify.png";

const Music = () => {
  const playlistId = "40EffYHgaUSqulzzUzoh71";

  return (
    <div className="mt-5">
      <div className="flex">
        <img
          src={spotifyImage}
          className="h-8 w-8 object-cover mr-2"
          alt="Spotify logo"
        />
        <a
          className="text-green-500 hover:underline font-bold text-xl"
          href="https://open.spotify.com/user/jhan31903"
          target="_blank"
          rel="noreferrer"
        >
          Spotify
        </a>
      </div>
      <div className="mt-10">
        <iframe
          title="Spotify Embed: Recommendation Playlist "
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
          width="80%"
          height="100%"
          style={{ minHeight: "500px" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Music;
