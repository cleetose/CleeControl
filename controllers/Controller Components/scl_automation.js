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
            <input id="updateAutoVenue" class="buttony" type="reset" value="Update" />
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
            <div id="autoScore">
                <div id="autoScoreLeft">
                    <label for="scorePaste" id="scoreSourceLabel">Auto Score</label>

                    <textarea class="storable scoreBoard" title="Copy score data from scl.spyparty.com (The list of names in front of the venue images) or the #scl_results channel (everything behind the spoiler text)" id="scorePaste" placeholder="Paste Results here"></textarea>
                </div>
                <div id="autoScoreRight">
                    <label for="scoreSource">Results Copy Source</label>

                    <select class="storable scoreBoard" title="Gets set automatically when score text is entered (can be overridden if it guessed incorrectly)" id="scoreSource">
                        <option value=""></option>
                        <option value="results">Discord Results</option>
                        <option value="manager">SCL Manager</option>
                    </select>

                </div>
                <input id="clearAutoScore" class="buttony" type="reset" value="Clear" />
            </div>
        </div>
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


//Takes
$('#updateAutoVenue').on('click',function() {
    if ($('#venueDecoder').val() != "") {
        venueSeparator = [];
        venueDecoder = $('#venueDecoder').val();
        venueSeparator = venueDecoder.match(/Aquarium|Ballroom|Balcony|Courtyard|Gallery|High-Rise|Library|Moderne|Pub|Redwoods|Teien|Terrace|Veranda|Nothing/g);
        venueAssignerArr = ["venue11","venue21","venue12","venue22","venue13","venue23","venue14","venue24","venue15","venue25","venue16","venue26"];
        
        if (venueSeparator != null) {
            for (let l = 0; l < venueSeparator.length; l++) {
                switch (venueSeparator[l]) {
                    case 'Aquarium':
                        $('#'+venueAssignerArr[l]).val('aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins');
                        break;

                    case 'Balcony':
                        $('#'+venueAssignerArr[l]).val('balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins');
                        break;    

                    case 'Ballroom':
                        $('#'+venueAssignerArr[l]).val('ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins')
                        break;

                    case 'Courtyard':
                        $('#'+venueAssignerArr[l]).val('courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins');        
                        break;   

                    case 'Gallery':
                        $('#'+venueAssignerArr[l]).val('gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins');       
                        break;

                    case 'High-Rise':
                        $('#'+venueAssignerArr[l]).val('high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins');
                        break;    

                    case 'Library':
                        $('#'+venueAssignerArr[l]).val('library;Library<br>Any 5/8;21 guests<br>4:45mins');
                        break;

                    case 'Moderne':
                        $('#'+venueAssignerArr[l]).val('moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins');
                        break;  

                    case 'Pub':
                        $('#'+venueAssignerArr[l]).val('pub;Pub<br>Any 3/7;16 guests<br>2:30mins');
                        break;   

                    case 'Redwoods':
                        $('#'+venueAssignerArr[l]).val('redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins');
                        break;

                    case 'Teien':
                        $('#'+venueAssignerArr[l]).val('teien;Teien<br>Any 4/8;13 guests<br>3:15mins');
                        break;    

                    case 'Terrace':
                        $('#'+venueAssignerArr[l]).val('terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins');
                        break;

                    case 'Veranda':
                        $('#'+venueAssignerArr[l]).val('veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins');
                        break;  

                    case 'Nothing':
                        $('#'+venueAssignerArr[l]).val('declined; ; ;');
                        break; 

                    default:
                        break;
                };   
            }
            venueSeparator.length = 0;
        }
    }
});

    

/* Figures out where auto score was copied by looking for the presence of
text exclusive to the #scl_results channel. */
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