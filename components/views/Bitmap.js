import html from "html-literal";

export default () => html`
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
      <img src="bitmap.webp" height="250px" width="250px" />
      <table class="traitValues">
        <tr>
          <th>Attribute</th>
          <th>Value</th>
          <th>Floor Price</th>
        </tr>
        <tr>
          <td>Satributes</td>
        </tr>
        <tr>
          <td>BlockRarity</td>
        </tr>
        <tr>
          <td>Categories</td>
        </tr>
        <tr>
          <td>Difficulty</td>
        </tr>
        <tr>
          <td>Fibonacci</td>
        </tr>
        <tr>
          <td>Nakamoto</td>
        </tr>
        <tr>
          <td>NTx</td>
        </tr>
        <tr>
          <td>Palindromic</td>
        </tr>
        <tr>
          <td>Patoshi</td>
        </tr>
        <tr>
          <td>Pizza</td>
        </tr>
        <tr>
          <td>SameDigits</td>
        </tr>
        <tr>
          <td>Sequential</td>
        </tr>
        <tr>
          <td>Vintage</td>
        </tr>
        <tr>
          <td>Weight</td>
        </tr>
        <tr>
          <td>Year</td>
        </tr>
      </table>
    </div>
  </section>
`;
