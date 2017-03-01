/*
  el_Li[i].addEventListener("mouseover", mov => {
    //  console.log("mouse:over " + i);
  });

  el_Li[i].addEventListener("mouseout",  moo => {
    //  console.log("mouse:out " + i);
  })};

}
*/


  //   var label_newTxtNode = textField;
    //  textNode.node.style.display="none";
  //    console.log(element.classList)



  el.setAttribute("contenteditable", "true");
  el.focus();

        // var label_textNode = document.getElementById('text'+i);
        //  var input_textField = document.getElementById('input'+i).value;
      //    input_textField.value = label_textNode.innerText;
        //  e.target.focus();
        //  console.log("id: " + e.target.id + " is: " + e.target.nodeName + " type: " + e.target.nodeType)






el_Modify[i].addEventListener('click', (function(e) {
  var id = e.target.id;
  var txt = e.target.childNodes[1];
  var mod_input = document.getElementById('span-mod'+id);
  mod_input.classList.toggle("span-modify-hide");






}));



setup();

// parse any [item] in storage and return array of items
function get_lstorage_items() {

  var lStorageArray = new Array,
  lStorageString = window.localStorage.getItem("item");

  if(lStorageArray !== null && typeof lStorageString === "string") {
    lStorageArray = JSON.parse(lStorageString);
    console.log("item retrieved: " + lStorageString);
  }
  return lStorageArray;
}



function submit_lstorage_item() {


  var input = document.getElementById('input-item').value;
  var lsa = get_lstorage_items();

  if (input !==null && onlyWhiteSpace(input)) {
    lsa.push(input);
     document.getElementById('input-item').value="";
  }

  localStorage.setItem('item', JSON.stringify(lsa));
  display_lstorage_items();

  return false;
}




function display_lstorage_items() {

  var lStorageArray = get_lstorage_items();   // get items from local storage
  var inlinez = '<ul>';  // inlines items to unordered list

  for(var i=0; i < lStorageArray.length; i++) { /* each item will have */
    inlinez +=

    '<li class="list-group-item" id=" '+ i +' ">' + lStorageArray[i] +
    '<input type="mod" class="span-modify hidden" id="' + i + '">  </input>' +
    '<span class="span-remove" id="' + i  + '"></span></li>';
  };

  inlinez += '</ul>';
  document.getElementById('item-list').innerHTML = inlinez;


  // add click-listener to remove span
  var el_Remove = document.getElementsByClassName('span-remove');
  for (var i=0; i < el_Remove.length; i++) {
    el_Remove[i].addEventListener('click', remove_lstrorage_items);
  };


// add click-listener to modify span
  var el_Modify = document.getElementsByClassName('list-group-item');
  for (var i=0; i < el_Modify.length; i++) {
    el_Modify[i].addEventListener('click', modify_lstorage_items);
  };


}

function clear_lstorage() {
  window.localStorage.clear();
  location.reload();
}

/* don't allow only whitespace, split to regular space
todo: implement 'hint-msg ' */
function onlyWhiteSpace(string) {
  var s = (string.replace(/\s/g, '').length);
  return s;
}

function remove_lstrorage_items() {
  // clicked item of ul id = this
  var id = this.getAttribute('id');
  var lsa = get_lstorage_items();
  //
  lsa.splice(id,1);

  // update storage using array
  localStorage.setItem('item', JSON.stringify(lsa));
  display_lstorage_items();

  return false;
}

//todo: remove hardcoded childnodes[]
function modify_lstorage_items() {

  var id = this.getAttribute('id');
  var lsa = get_lstorage_items();



  return false;
}



/*
console.log(lsa)
  e.addEventListener("focusout", (function() {
    var input = document.querySelector('input[type=mod]');
    var inputval = input.value;

      //lsa.splice(id, 1);
      //console.log(lsa);
        //localStorage.setItem('item', JSON.stringify(lsa));
        display_lstorage_items();
        return false;

    this.className="span-modify hidden";
    this.parentElement.childNodes[3].className = "span-remove";
  }));


  return false;
}





*/
this.childNodes[1].className = "span-modify";
this.childNodes[3].className = "span-remove hidden";

var e = this.querySelector("input[type=mod]");
e.focus();
