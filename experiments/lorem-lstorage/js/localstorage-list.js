setup();

// enable submit using key:enter
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {submit_lstorage_item()};
});


// parse input [item(s)], return array of items
function get_lstorage_item() {
  var lStorageArray = new Array,
  lStorageString = window.localStorage.getItem("item");

  if (lStorageString !== null && typeof lStorageString === "string") {
    lStorageArray = JSON.parse(lStorageString);
  }
  return lStorageArray;
}


//
function submit_lstorage_item() {
  var textinput = document.getElementById('input-item').value;
  var lsa = get_lstorage_item();

  if (textinput !== null && onlyWhiteSpace(textinput)) {
    lsa.push(textinput);
     document.getElementById('input-item').value="";
  }
  localStorage.setItem('item', JSON.stringify(lsa));
  display_lstorage_item();

  return false;
}


/* don't allow only whitespace, split to regular space
todo: implement 'hint-msg ' */
function onlyWhiteSpace(string) {
  var s = (string.replace(/\s/g, '').length);
  return s;
}


function display_lstorage_item() {
  const lStorageArray = get_lstorage_item();   // get items from local storage
  let inlinez = '<ul>';  // inlines items to unordered list

  for(let i=0; i<lStorageArray.length; i++) { /* */
    inlinez +=
    '<li class = "list-group-item">' +
      '<label  id="text' + i  + '" class="label-txt">' +lStorageArray[i]+ '</label>' +
      '<input onSelect="blur" id="input' + i  + '"   class = "span-modify" type="text" disabled> </input>' +
      '<span class = "span-remove"> x  </span>' +
    '</li>';

  };

  inlinez += '</ul>';
  document.getElementById('item-list').innerHTML = inlinez;


  // add click-listener to remove span
  const el_Remove = document.getElementsByClassName('span-remove');
  for (let i=0; i < el_Remove.length; i++) {
    el_Remove[i].addEventListener('click', e => {

      lsa = get_lstorage_item();
      lsa.splice(i, 1);

      localStorage.setItem('item', JSON.stringify(lsa));
       display_lstorage_item();
    });
  };



// add click-listeners itemlist
  var el_Li = document.getElementsByClassName('list-group-item');
  for (let i=0; i < el_Li.length; i++) {
    el_Li[i].addEventListener('click', e => {
        var target = e.target;  var val = document.getElementById('input'+i).disabled=false;
        var child = document.getElementById('input'+i);
        child.focus();
        child.value = target.innerText;

      child.addEventListener('blur', function() {
        child.disabled="true";
        toggles(target, "hidden")
      });

    });
  };


// add click-listener to text node of itemlist
  var el_Label = document.getElementsByClassName('label-txt');
  for (let i=0; i < el_Label.length; i++) {
      el_Label[i].addEventListener('click', () => {
  //      document.querySelectorAll()
      })
  };
}


function clear_lstorage() {
  window.localStorage.clear();
  location.reload();
}

function toggles(el, class1) {
  var classes = el.className,
  regex = new RegExp('\\b' + class1 + '\\b'),
  hasOne = classes.match(regex);

  class1 = class1.replace(/\s+/g, '');
  if (hasOne)
    el.className = classes.replace(regex, '');
  else
    el.className = classes + class1;
}
