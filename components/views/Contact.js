import html from "html-literal";

export default () => html`
  <section>
    <div class="main-content">
      <h1>Contact Us</h1>
      <br />
      <a href="https://bitcorns.xyz">Official Website</a><br />
      <a href="https://twitter.com/ordinalbitcorns">Twitter</a>
      <br /><br />
      <h2>Founder</h2>
      <br />
      <a href="https://twitter.com/dpeaz">dpeaz Twitter</a>
    </div>

    <p class="collabText">
      If you are interested in collaboration opportunities, please submit your
      request below:
    </p>
    <form
      id="fs-frm"
      name="simple-contact-form"
      accept-charset="utf-8"
      action="https://formspree.io/f/mrgwnwnw"
      method="post"
    >
      <fieldset id="fs-frm-inputs">
        <label for="project">Project</label><br />
        <input
          type="text"
          name="name"
          id="project"
          placeholder="Project you're representing"
          required=""
        /><br />
        <label for="email-address">Email Address</label><br />
        <input
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="name@gmail.com"
          required=""
        /><br />
        <label for="message">Message</label><br />
        <textarea
          rows="5"
          name="message"
          id="message"
          placeholder="What is your collaboration proposal?"
          required=""
        ></textarea
        ><br />
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  </section>
`;
