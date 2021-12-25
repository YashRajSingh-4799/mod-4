(function (window) {
    var names = ["Aman", "John", "Jyotika", "Jimmy", "Parth", "Saqib", "Aniket", "Sumit", "Ajay", "Yash","Raj","Harjot"];
  
    for (var i in names) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })(window);
  