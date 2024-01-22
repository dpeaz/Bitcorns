import html from "html-literal";

export default state => {
  console.log(state);
  return html`
    <table id="collab">
      <tr>
        <th>Project</th>
        <th>Representative</th>
        <th>Contact By</th>
      </tr>
      ${state.collab
        .map(collab => {
          return `<tr><td>${collab.project}</td><td>${collab.representative}</td><td>${collab.response}</td></tr>`;
        })
        .join("")}
    </table>
  `;
};
