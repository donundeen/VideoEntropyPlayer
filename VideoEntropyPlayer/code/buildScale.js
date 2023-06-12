autowatch = 1;


function buildScale(root, noteList){
    var allNotes = new Array();
    var notes = noteList.split(" ");
//    post ("root is " + root + " \n");
//    post("notes is "  + notes + "\n");
    for (i = 0 ; i < notes.length ; i++){

        var interval = parseInt(notes[i]);
        if (interval < 0){
            continue;
        }
        var lowestNote = parseInt(root) + interval;

        lowestNote = lowestNote % 12;
//        post("adding " + lowestNote + "\n");

        allNotes[allNotes.length] = lowestNote;

        for(j = 1; j <= 10; j++){
            allNotes[allNotes.length] = j * 12 + lowestNote; 
        }

    }


    outlet(0, allNotes);
}

function anything(a){
post ("don't know what to do \n")

}