const url = 'http://forverkliga.se/JavaScript/api/simple.php?world';
const btn = document.getElementById('btn_select');

btn.addEventListener('click', f);

function f() {

  fetch(url)
  .then(function(response) {
    console.clear();
    console.info("fetching:", url)
      return response.text()
  })

  .then(function(object) {
    console.info("parsing: . .");
      let data = JSON.parse(object), attribs = [];

      // find and push attribute-names to array
      for (i = 0; i < data.length; i++) {
        var obj = data[i];
        for (atr in data[i]) {
          if (!attribs.includes(atr)) {
            attribs.push(atr)
          }



        }

        // create 1 UL foreach attr with corresponding text
        if(document.querySelectorAll('.fetched ul').length < attribs.length)  {
          txt = document.createTextNode(attribs[i]),
          ul = document.createElement('UL');
          ul.classList = attribs[i];
          ul.appendChild(txt);
          document.querySelector('.fetched').appendChild(ul)
        }

      }








    }).catch(function(exception) {
      console.error('parsing failed', exception)
    })
  }
/*       var obj = data[i];
            var name = i;
            var value = obj[i];
            console.log(name)


        var txt = document.createTextNode("")
        var li = document.createElement('LI');
        li.appendChild(txt);
        ul.appendChild(li);
*/
