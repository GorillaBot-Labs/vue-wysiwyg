Vue.use(window.vueWysiwyg.default, {
  hideModules: {
    bold: false,
  },
  locale: 'en'
});

new Vue({
  el: "#app",
  template: `
    <div class="wrapper">
      <wysiwyg v-model="msg"></wysiwyg>
    </div>
  `,
  data() {
    return {
      msg: `<p>Welcome to <b>vue-wysiwyg</b>!</p>
      <p>
        <br>
        <img src="https://static.pexels.com/photos/177809/pexels-photo-177809.jpeg">
      </p>
      <br>
      <p>
        The editor is quite fast and lightweight. Elements are minimally styled.
      </p>
      <br>
      <p>
      <table>
        <thead>
        <tr>
          <th>Numbered lists:</th>
          <th>Non-numbered lists:</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>

            <ol>
              <li>Item #1</li>
              <li>Item #2</li>
            </ol>
          </td>
          <td>
            <ul>
              <li>Item #1</li>
              <li>Item #2</li>
            </ul>
          </td>
        </tr>
        </tbody>
        </table>
      </p>
      `
    }
  }
});
