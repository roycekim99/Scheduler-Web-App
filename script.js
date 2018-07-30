function panel(panelID){    
    var canvas = document.getElementById(panelID);
   
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillRect(25,25,100,100);
    }
}


panel('ToDoPanel');