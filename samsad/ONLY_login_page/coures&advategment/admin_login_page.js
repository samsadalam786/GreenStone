if (window.self !== window.top && window.name != "view1") {  
    window.alert = function() {  
            };  
    window.confirm = function() {  
    };  
    window.prompt = function() {  
    };  
    window.open = function() {  
    };  
  }  
      document.addEventListener(  
    "DOMContentLoaded",  
    function() {  
      var links = document.getElementsByTagName("A");  
      for (var i = 0; i < links.length; i++) {  
        if (links[i].href.indexOf("#") != -1) {  
          links[i].addEventListener("click", function(e) {  
            console.debug("prevent href=# click");  
            if (this.hash) {  
              if (this.hash == "#") {  
                e.preventDefault();  
                return false;  
              } else {  
              }  
            }  
            return false;  
          });  
        }  
      }  
    },  
    false  
  ); 