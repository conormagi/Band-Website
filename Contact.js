import react from "react";
import "@fontsource/quicksand";

function Contact() {
  return (
    <section  className="contact" style={{ fontFamily: "quicksand" }}>
      <div
        className="contactT"
        style={{ marginTop: "0px", textAlign: "center", fontSize: "30px" }}
      >
        <h1>CONTACT</h1>
      </div>
      <div id="contact">
        <div
          class="container"
          position="relative"
          style={{
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "50px",
            maxWidth: "800px",
            minWidth:"200px",
          }}
        >
          <div class="entries">
            <label for="name"></label>
            <input
              class="fields contact-fields"
              type="text"
              id="name"
              placeholder="Name"
            />
            <label for="email"></label>
            <input
              class="fields contact-fields"
              type="email"
              id="email"
              placeholder="Email"
            />
            <label for="subject"></label>
            <input
              class="fields contact-fields"
              type="text"
              id="subject"
              placeholder="Subject"
            />
            <label for="message"></label>
            <input
              class="fields contact-fields"
              type="text"
              id="message"
              placeholder="Type your message here..."
            />
          </div>
          <button class="btn" href="#" >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
