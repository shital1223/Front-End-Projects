const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
   <th>${e.key}</th>
   <th>${e.keyCode}</th>
   <th>${e.code}</th>
  </tr>
  </table>
  </div>
  `;
});
