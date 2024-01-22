import html from "html-literal";

export default state => {
  console.log(state);
  return html`
    <section>
      <div class="main-content">
        <h1>Bitmap Floor Price Check</h1>
        <p>
          Enter inscription ID in the search box below. Request will return
          current Magic Eden floor price for each attribute of your Bitmap
          inscription to provide more insight to the value of your Bitmap. This
          tool will help reduce the risk of underpricing Bitmap listings.
        </p>
        <form id="bitmapForm" class="bitmap">
          <input
            type="text"
            id="bitmapInput"
            name="bitmapInputBar"
            placeholder="Bitmap Inscription ID"
          />
          <button type="submit" id="bitmapSubmit">Submit</button>
        </form>
        <!-- <img src="bitmap.webp" height="250px" width="250px" /> -->
        <table id="responseTraits" class="traitValues">
          <thead>
            <th>Attribute</th>
            <th>Value</th>
          </thead>
          <tbody>
            ${state.bitmap
              .map(
                item => html`
                  <tr>
                    <td>${item.trait_type}</td>
                    <td>${item.value}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
};
