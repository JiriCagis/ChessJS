
var currentLevel = -1;

function loadArtificialIntelligence(){
    if(currentLevel>0){
        return;
    }
    
    currentLevel = prompt("Please enter you level: (1 - Beginner, 2 - Mediator, 3 - Expert)", "2");
    switch (parseInt(currentLevel)) {
        case 1:
            document.title = document.title + " - Beginner";
            loadScript("scripts/intelligences/ai1.js");
            break;
        case 2:
            document.title = document.title + " - Mediator";
            loadScript("scripts/intelligences/ai2.js");
            break;
        case 3:
            document.title = document.title + " - Expert";
            loadScript("scripts/intelligences/ai3.js");
            break;
        default:
            document.title = document.title + " - Mediate";
            loadScript("scripts/intelligences/ai2.js");
            break;
        } 

}

function loadScript(script_path) {
    let ele = document.createElement("script");
    ele.src = script_path;
    document.body.appendChild(ele);
}