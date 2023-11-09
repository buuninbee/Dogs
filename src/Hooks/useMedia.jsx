import React from "react";

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changedMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changedMatch();
    window.addEventListener("resize", changedMatch);
    return () => {
      window.removeEventListener("resize", changedMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
