import YouTube from 'react-youtube';

const BackgroundVideo = ({ videoId }: { videoId: string }) => {
  const opts = {
    playerVars: {
      autoplay: 1,
      mute: 0,
      loop: 1,
      playlist: videoId,
    },
  };

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <YouTube
        videoId={videoId}
        opts={opts}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default BackgroundVideo;
