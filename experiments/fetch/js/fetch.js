const url = 'http://forverkliga.se/JavaScript/api/simple.php?world';
const btn = document.getElementById('btn_fetch');
const fetched = document.getElementById("fetched");
const dscript = document.createElement('SCRIPT');
btn.addEventListener('click', f);

function f() {

  fetch(url)
  .then((response) => {
    console.info("fetching:", url)
    return response.text()
  })
  .then(object => {
    console.info("parsing: . .");

    let data = JSON.parse(object);
    let attribs = [];
    for (let i = 0; i < data.length; i++){

      const breaker = document.createElement('BR');
      const dbtn = document.createElement('DIV');
      const dpanel = document.createElement('DIV');

      fetched.appendChild(dbtn);
      fetched.appendChild(dpanel);
      dbtn.appendChild(document.createTextNode(`#${i}`))

      const obj = data[i];
      for (const key in obj){
        const value = obj[key];
        dpanel.innerHTML += `<p>${key}: ${value}\n</p>`;

        // add some styling to droplist
        dpanel.classList = "panel";
        dbtn.classList ="droplist";

        // attach droplist script after creating the list
        dscript.src="js/droplist.js";
        document.getElementsByTagName('body')[0].appendChild(dscript);
        btn.setAttribute("disabled", true);
      }
    }
  })
  .catch(exception => {
    console.error('parsing failed', exception)
  })

}
