(function($) {

 var subjectObject = {
  "KOTTAYAM": {
    "KALATHIPADY": [],
    "PAMPADY": [],
    "KURUPPANTHARA": [],
    "KODIMATHA":[],
    "CHANGANACHERRY":[]
  },
  "KOLLAM": {
    "ANCHAL": [],
    "AYUR": [],
    "CHADAYAMANAGALAM": [],
    "ERAVIPURAM": [],
    "THANGASSERY": []
  },
  "IDUKKI": {
   "ADIMALI":[],
   "CHENKARA":[],
   "ELAPPARA":[],
   "KATTAPANA":[],
   "KUMILY":[]
  },
  "ERNAKULAM":{
   "ALUVA":[],
   "EDAPPALLY":[],
   "KAKKANAD":[],
   "KALAMASSERRY":[],
   "VYTTILA":[]
  },
  "ALAPPUZHA":{
    "MULLAKKAL":[],
    "KOADY":[],
    "KALAVOOR":[],
    "CHERTHALA SOUTH":[],
    "KAYAMKULAM":[]
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("district");
  var topicSel = document.getElementById("branch");

  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
   //empty Chapters- and Topics- dropdowns
   topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
   //empty Chapters dropdown
  chapterSel.length = 1;
    //display correct values
//    var y = subjectObject[topicSel.value][this.value];
//    for (var i = 0; i < z.length; i++) {
//      chapterSel.options[topicSel.options.length] =  Option(z[i], z[i]);
//    }
  }
}


            function myFunction() {
                alert("I am an alert box!");
            }

})(jQuery);
