import react from "react";

function Youtube() {
  return (
    <section id="videoPlayer">
      <container>
        <iframe
          className="Youtube"
          src="https://www.youtube.com/embed/6neB4hbhggo"
          title="Mookie and The Bab - Passing Through (Official Video)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </container>
    </section>
  );
}

export default Youtube;
