class SclAutomation extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <p class="titleBox">Automation</p>
        <button class="accordion" id="accordionautoPan">Expand</button>
        <div class="panel" id="autoPan">
            <br>
            <label for="venueDecoder">Auto Draft</label>
            <br>
            <textarea class="storable draft" title="Copy draft data from scl.spyparty.com or the #scl_results channel" id="venueDecoder" placeholder="Paste Draft Here"></textarea>
            <br>
            <br>
            <input id="clearAutoVenue" class="buttony" type="reset" value="Clear" />
            <p>____________________________________</p>
            <br>
            <div id="autoRoll">
                <label for="rollPaste">Semi-Auto Characters</label>
                <br>
                <input class="storable scoreBoard" title="Would be nice if a cool programmer came up with an easy way to get spy character info from replays. Until then, gotta go through each game and enter the single letter name of each spy (with or without spaces)" type="text" id="spyPaste" placeholder="Enter Character Placeholder Names">
                <br>
                <br>
                <input id="clearAutoCharacters" class="buttony" type="reset" value="Clear" /> </div>
            <p>____________________________________</p>
            <br>
            <div id="autoScore">
                <div id="autoScoreLeft">
                    <label for="scorePaste" id="scoreSourceLabel">Auto Score</label>
                    <br>
                    <textarea class="storable scoreBoard" title="Copy score data from scl.spyparty.com (The list of names in front of the venue images) or the #scl_results channel (everything behind the spoiler text)" id="scorePaste" placeholder="Paste Results here"></textarea>
                </div>
                <div id="autoScoreRight">
                    <label for="scoreSource">Results Copy Source</label>
                    <br>
                    <select class="storable scoreBoard" title="Gets set automatically when score text is entered (can be overridden if it guessed incorrectly)" id="scoreSource">
                        <option value=""></option>
                        <option value="results">Discord Results</option>
                        <option value="manager">SCL Manager</option>
                    </select>
                </div>
                <br>
                <br> </div>
            <br>
            <input id="clearAutoScore" class="buttony" type="reset" value="Clear" /> </div>
        `
    }
}

window.customElements.define('scl-automation', SclAutomation);


document.getElementById('clearAutoVenue').addEventListener('click', function() {
    $('#venueDecoder').val('');
});

document.getElementById('clearAutoCharacters').addEventListener('click', function() {
    $('#spyPaste').val('');
});

document.getElementById('clearAutoScore').addEventListener('click', function() {
    $('#scorePaste').val('');
});


//Attemts to figure out where auto score was copied by looking for specific text

var scorePasteValOld;
function checkScorePaste() {
    var scorePasteVal = $('#scorePaste').val();
    var sourceFinder = scorePasteVal.match(/wins as|wins 2|wins 3|wins 4/gi);
    if($('#scorePaste').val() != "") {
        $('#gameCounterDiv').css('visibility', 'inherit');
        $('.regScore').css('visibility', 'hidden');
        if((sourceFinder != null) && (scorePasteValOld != scorePasteVal)) {
            $('#scoreSource').val('results');
            scorePasteValOld = scorePasteVal;
        } else if((sourceFinder == null) && (scorePasteValOld != scorePasteVal)) {
            $('#scoreSource').val('manager');
            scorePasteValOld = scorePasteVal;
        }
    } else {
        $('#gameCounterDiv').css('visibility', 'hidden');
        $('.regScore').css('visibility', 'inherit');
    }
}


setInterval(() => (checkScorePaste()), 200);