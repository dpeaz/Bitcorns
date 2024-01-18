import html from "html-literal";
import bitcorn001 from "../../assets/001.png";

export default () => html`
  <section>
    <div class="main-content">
      <h1>About Us</h1>
      <img src="${bitcorn001}" class="bitcorn" alt="" />
      <h2>Our Vision</h2>
      <p>
        We believe that Bitcoin and Ordinals should (and can) be fun and
        profitable while fostering a strong community where holders help one
        another instead of creating a PvP environment. <br /><br />
        We aim to achieve fun through creating funny, engaging content as well
        as producing sporadic, meaningful Ordinals collections and community
        events. We believe that remaining active daily in the community,
        providing value, and treating people with respect and dignity is the
        best way to build a strong community. While cryptocurrency is an
        extremely volatile market, one of our primary goals is to generate
        sustainable revenue for the project in order to provide the best
        opportunity for our holders to be profitable by investing in our
        project.
      </p>
    </div>
  </section>
`;
