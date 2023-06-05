import react from "react";
import "@fontsource/quicksand";
import { motion } from "framer-motion";

const headerAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1, bounce: 0 },
  },
};
const textAnimate = {
  offscreen: { x: 0, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "fade", duration: 1.2, bounce: 0 },
  },
};

function Bio() {
  return (
    <section id="bio" style={{ fontFamily: "quicksand" }}>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.8 }}
      >
        <motion.div className="image" variants={headerAnimate}>
          <h1
            className="bioHeader"
            style={{
              textAlign: "center",
              fontSize: "50px",
              marginBottom: "80px",
            }}
          >
            BIO
          </h1>
        </motion.div>
        <motion.div variants={textAnimate}>
          <div
            className="Bio"
            style={{
              textAlign: "center",
              fontSize: "18px",
              paddingLeft: "10px",
              paddingRight: "10px",
              maxWidth: "800px",
            }}
          >
            <p>
              "Mookie + The Bab capture the sound of the American Southwest like
              few others we've heard in a long time… This is music to groove to
              while sipping whiskey and thinking about the good ol' days, and is
              highly recommended."
            </p>{" "}
            <p style={{ lineHeight: "0" }}>ROUND MAGAZINE </p>
            <br />
            <p>
              “Emotionally Expressive vocals… Gorgeous musicianship on
              display….. Stunning”
            </p>{" "}
            <p style={{ lineHeight: "0" }}>RGM Magazine</p>
            <br style={{}} />
            <p>
              {" "}
              British band, Mookie + The Bab are an all-acoustic indie-folk
              group, Acoustic guitar, Mandolin, Fiddle, layered harmonies, and
              the occasional bit of trumpet, captures the sound of the American
              Southwest, whilst remaining true to British working class roots.
              Multi-instruments Abi Otway, Marc Otway and Conor Magi are a group
              of musicians that have been working together on various projects
              over the years and have played UK festivals, short tours in
              California, Nevada and Austin, Texas. Long drives across desert
              landscapes listening to legends such as Paul Simon, Bob Dylan,
              Crosby, Stills, Nash and Young has influenced their sound, and
              their favourite band is Lumineers.
            </p>
            <p>
              Moved by the Climate Emergency, Floods, Fires and Desertification
              and exploring organic acoustic sounds and strong vocal harmonies,
              they have created a unique sound that has been described as a
              mixture of Americana and Yorkshire folk. Due to close personal
              losses and other traumas that 2020 bestowed, the music is
              reflective, yet often hopeful. To find out more about Mookie + The
              Bab’s upcoming releases and live gigs follow them on social media
              and be sure to sign up to their mailing list via the website
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.8 }}
      >
        <div className="about" marginTop="100px">
          <motion.div className="image" variants={headerAnimate}>
            <h1
              className="bioHeader"
              style={{
                textAlign: "center",
                fontSize: "50px",
                marginBottom: "80px",
              }}
            >
              WHAT THEY SAY
            </h1>
          </motion.div>

          <motion.div variants={textAnimate}>
            <div
              className="Bio"
              style={{
                textAlign: "center",
                fontSize: "18px",
                paddingLeft: "10px",
                paddingRight: "10px",
                maxWidth: "800px",
              }}
            >
              <p>
                "For a British band, Mookie + The Bab capture the sound of the
                American Southwest like few others we've heard in a long time.
                This all-acoustic alt-folk group is inspired by environmental
                issues such as climate change and desertification, giving their
                songs a yearning quality. Gorgeous vocals from lead singer Abi
                mix well with her fellow band members providing layered
                harmonies, and the occasional bit of trumpet gives their music
                extra flavour. This is music to groove to while sipping whiskey
                and thinking about the good ol' days, and is highly recommended
                for anyone who enjoys classic bluegrass." ROUND MAGAZINE
                “Emotionally Expressive vocals… Gorgeous musicianship on
                display….. Stunning” RGM Magazine
              </p>{" "}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Bio;
