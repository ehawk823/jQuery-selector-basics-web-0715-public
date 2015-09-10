'use-strict';
$(document).ready(function(){
  h1Selector();
  liInOlSelector();
  linkSelector();
  imageSelector();
  checkboxInputSelector();
});

function h1Selector(){
  return $('h1');
};

function liInOlSelector(){
  return $('ol').find( "li" );
};

function linkSelector(){
  return $("#box4.box5").find('a');
};

function imageSelector(){
  return $("img[alt='cat sleeping']");
};

function checkboxInputSelector(){
  return $("input[type='checkbox']").wrap("<span class='pinky'></span>");
};


// declare your functions here...
