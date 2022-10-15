function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
      localStorage.setItem('name', name.value,'pw', pw.value);
        // localStorage.setItem('pw', pw.value);
        
    }

