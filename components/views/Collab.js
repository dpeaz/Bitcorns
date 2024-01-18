import html from "html-literal";

export default () => html`
  <section id="collab">
    <div class="main-content">
      <h1>Collaboration Request</h1>
      <form id="collabForm" method="POST" action="">
        <div>
          <label for="project">Project:</label>
          <input
            type="text"
            name="project"
            id="project"
            placeholder="Project you represent"
            required
          />
        </div>
        <div>
          <label for="representative">Name:</label>
          <input
            type="text"
            name="representative"
            id="representative"
            placeholder="Project representative"
            required
          />
        </div>
        <div>
          <label for="contact">How would you like us to contact you:</label><br>
          <input
            type="checkbox"
            id="id_of_checkbox1"
            class="contact"
            name="contact"
            value="Twitter"
          />
          <label for="res1">Twitter</label><br>
          <input
            type="checkbox"
            id="id_of_checkbox2"
            class="contact"
            name="contact"
            value="Discord"
          />
          <label for="res2">Discord</label><br>
          <input
            type="checkbox"
            id="id_of_checkbox3"
            class="contact"
            name="contact"
            value="Email"
          />
          <label for="res3">Email</label><br>
        <input type="submit" name="submit" value="Submit" />
      </form>
      <p>Pending Requests</p>
            </div>
  </section>
`;
