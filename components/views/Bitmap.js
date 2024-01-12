/* eslint-disable prettier/prettier */


import html from "html-literal";

export default () => html`
  <section>
    <div class="main-content">
  <h1>Bitmap Floor Price Check</h1>
  <p>Enter inscription ID in the search box below. Request will return current Magic Eden
  floor price for each attribute of your request Bitmap inscription to provide more insight to the
  value of your Bitmap. This tool will help mitigate underpricing your listings.</p>
  <form id="form" class="bitmap">
    <input type="search" id="bitmap" name="tokenId" placeholder="Inscription ID">
    <button>Submit</button>
  </form>
  <img src="bitmap.webp" height="250px" width="250px" />
  <table>
  <tr>
    <th colspan="2">Attributes</th>
    <th>Floor Price</th>
  </tr>
  <tr>
    <td>Satributes</td>
    <td>.</td>
    <td>.</td>
  </tr>
  <tr>
    <td>BlockRarity</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Categories</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Difficulty</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Fibonacci</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Nakamoto</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>NTx</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Palindromic</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Patoshi</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Pizza</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>SameDigits</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Sequential</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Vintage</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Weight</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Year</td>
    <td></td>
    <td></td>
  </tr>
  </table>
</div>
  </section>
`;
