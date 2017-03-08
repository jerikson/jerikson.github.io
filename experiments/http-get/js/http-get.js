const url = "https://forverkliga.se/JavaScript/api/simple.php?";
const sct = document.getElementById('select');
const btn = document.getElementById('btn_select');
const res = document.getElementById('results');
btn.addEventListener('click', getjObj);

function getjObj() {

  //promises naming convention? lets do underscore for now
  const promise_request = new Promise((resolve, reject) => {

    // value of dropdown-selection/option
    const opt = sct.options[sct.selectedIndex].value;
    const request = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    request.onload = () => {
      if (request.status === 200 && request.readyState === 4) {
        resolve(request.response);
      } else {
        reject(Error( /* status || state != 200/4 */ `
          status:  ` + request.statusText + `
          state: `) + request.readyState);
        }
    },
    request.open('GET', url + opt), request.send();
  }); //promise

  promise_request.then(data => {
    const items = JSON.parse(data);

    // add real names of keys to array 'columns'
    columns = [];
    table_row = res.insertRow(-1);
    // iterate
    for (let i = 0; i < items.length; i++) {
      // find
      for (key in items[i]) {
        if (!columns.includes(key)) {
          //add
          columns.push(key);
        }
      }
    }

    // use content of columns as table heads */
    for (let i = 0; i < columns.length; i++) {
      const table_head = document.createElement("th");
      table_head.innerHTML = columns[i];
      table_row.appendChild(table_head);
    }
    for (let key in items) {
      table_row = res.insertRow(-1);
      for (let i = 0; i < columns.length; i++) {
        const table_tcell = table_row.insertCell(-1);
        // add unique data id for first column (names)
        table_row.childNodes[0].setAttribute("data-country", key);
        // populate table
        table_tcell.innerHTML = items[key][columns[i]];
      }
    }

    /* diable button and bubble click events
    for table children after populating list */
    if (columns.length) {
      btn.setAttribute("disabled", "true");
      res.addEventListener('click', info);
    }
  }); // then

  // cliking table
  function info(e) {
    let id = e.target;
    console.log(id.getAttribute("data-country"));
  }

  promise_request.catch(error => {
    console.error(error)
  });
} // getObj
