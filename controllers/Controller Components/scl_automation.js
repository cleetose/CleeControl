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
            <select class="venueSelect autoMultiply storable" id="autoMultiply1">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;20 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 Guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 Guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;17 Guests<br>3:30mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 Guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/6;12 Guests<br>3:15mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 Guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 Guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 Guests<br>3:00mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;14 Guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 Guests<br>3:30mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/7;12 Guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 Guests<br>4:45mins">Veranda</option>
            <option value="declined; ; ;">No restrict</option>
        </select>
        <select class="venueSelect autoMultiply storable" id="autoMultiply2">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;20 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 Guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 Guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;17 Guests<br>3:30mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 Guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/6;12 Guests<br>3:15mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 Guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 Guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 Guests<br>3:00mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;14 Guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 Guests<br>3:30mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/7;12 Guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 Guests<br>4:45mins">Veranda</option>
            <option value="declined; ; ;">No restrict</option>
        </select>
        <select class="venueSelect autoMultiply storable" id="autoMultiply3">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;20 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 Guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 Guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;17 Guests<br>3:30mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 Guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/6;12 Guests<br>3:15mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 Guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 Guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 Guests<br>3:00mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;14 Guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 Guests<br>3:30mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/7;12 Guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 Guests<br>4:45mins">Veranda</option>
            <option value="declined; ; ;">No restrict</option>
        </select>
        <select class="venueSelect autoMultiply storable" id="autoMultiply4">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;20 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 Guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 Guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;17 Guests<br>3:30mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 Guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/6;12 Guests<br>3:15mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 Guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 Guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 Guests<br>3:00mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;14 Guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 Guests<br>3:30mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/7;12 Guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 Guests<br>4:45mins">Veranda</option>
            <option value="declined; ; ;">No restrict</option>
    </select>
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

                    <textarea class="storable scoreBoard" title="Copy score data from scl.spyparty.com (The list of names in front of the venue images) or the #scl_results channel (everything behind the spoiler text)" id="scorePaste" placeholder="Currently Not Working :(" readonly></textarea>
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
        var mIndex1;
        var mIndex2;
        var mIndex3;
        var mIndex4;
        venueSeparator = [];
        venueDecoder = $('#venueDecoder').val();
        decoderLowercase = venueDecoder.toLowerCase()
        venueSeparator = decoderLowercase.match(/aquarium|ballroom|balcony|courtyard|gallery|high-rise|library|moderne|pub|redwoods|teien|terrace|veranda|nothing|declines/g);
        if ($('#matchType').val() == 'regularSeasonA') {

            venueAssignerArr = ["venue11","venue21","venue12","venue22","venue13","venue23","venue14","venue24"];
        
        }

        if ($('#matchType').val() == 'regularSeasonB') {

            venueAssignerArr = ["venue11","venue21","venue12","venue22","venue13","venue14","venue15","venue23","venue24","venue25","autoMultiply1","autoMultiply2"];
        
        }
        
        if ($('#matchType').val() == 'postSeason' || $('#matchType').val() == 'masters') {

            venueAssignerArr = ["venue11","venue21","venue12","venue22","venue13","venue14","venue15","venue16","venue23","venue24","venue25","autoMultiply1","autoMultiply2","autoMultiply3","autoMultiply4"];
        
        }

        if ($('#matchType').val() == 'postSeasonRH' || $('#matchType').val() == 'mastersRH') {

            venueAssignerArr = ["venue11","venue21","venue12","venue22","venue13","venue14","venue15","venue23","venue24","venue25","venue26","autoMultiply1","autoMultiply2","autoMultiply3","autoMultiply4"];
        
        }
        
        if (venueSeparator != null) {
            for (let l = 0; l < venueSeparator.length; l++) {
                switch (venueSeparator[l]) {
                    case 'aquarium':
                        $('#'+venueAssignerArr[l]).val('aquarium;Aquarium<br>Any 4/8;20 Guests<br>4:00mins');
                        break;

                    case 'balcony':
                        $('#'+venueAssignerArr[l]).val('balcony;Balcony<br>Any 2/3;7 Guests<br>2:00mins');
                        break;    

                    case 'ballroom':
                        $('#'+venueAssignerArr[l]).val('ballroom;Ballroom<br>Any 4/8;16 Guests<br>3:30mins')
                        break;

                    case 'courtyard':
                        $('#'+venueAssignerArr[l]).val('courtyard;Courtyard<br>Any 4/7;17 Guests<br>3:30mins');        
                        break;   

                    case 'gallery':
                        $('#'+venueAssignerArr[l]).val('gallery;Gallery<br>Any 4/8;21 Guests<br>4:00mins');       
                        break;

                    case 'high-rise':
                        $('#'+venueAssignerArr[l]).val('high-rise;High-rise<br>Any 3/6;12 Guests<br>3:15mins');
                        break;    

                    case 'library':
                        $('#'+venueAssignerArr[l]).val('library;Library<br>Any 5/8;21 Guests<br>4:45mins');
                        break;

                    case 'moderne':
                        $('#'+venueAssignerArr[l]).val('moderne;Moderne<br>Any 4/8;21 Guests<br>4:15mins');
                        break;  

                    case 'pub':
                        $('#'+venueAssignerArr[l]).val('pub;Pub<br>Any 3/7;16 Guests<br>3:00mins');
                        break;   

                    case 'redwoods':
                        $('#'+venueAssignerArr[l]).val('redwoods;Redwoods<br>Any 4/8;14 Guests<br>3:30mins');
                        break;

                    case 'teien':
                        $('#'+venueAssignerArr[l]).val('teien;Teien<br>Any 4/8;13 Guests<br>3:30mins');
                        break;    

                    case 'terrace':
                        $('#'+venueAssignerArr[l]).val('terrace;Terrace<br>Any 3/7;12 Guests<br>3:30mins');
                        break;

                    case 'veranda':
                        $('#'+venueAssignerArr[l]).val('veranda;Veranda<br>Any 5/8;21 Guests<br>4:45mins');
                        break;  

                    case 'nothing':
                        $('#'+venueAssignerArr[l]).val('declined; ; ;');
                        break; 
                        case 'declines':
                            $('#'+venueAssignerArr[l]).val('declined; ; ;');
                            break; 
                    default:
                        break;
                };   
            }
            $('#multiplySelect13').val('Single');
            $('#multiplySelect23').val('Single');
            $('#multiplySelect14').val('Single');
            $('#multiplySelect24').val('Single');
            $('#multiplySelect15').val('Single');
            $('#multiplySelect25').val('Single');
            $('#multiplySelect16').val('Single');
            $('#multiplySelect26').val('Single');

            for (let q = 13; q <= 16; q++) {
                if ($("#autoMultiply1").val() == $("#venue"+q).val()) {
                    mIndex1 = $("#multiplySelect"+q).prop('selectedIndex');
                    mIndex1 = mIndex1 + 1;
                    $("#multiplySelect"+q).prop('selectedIndex', mIndex1);
                }
            }
            for (let q = 23; q <= 25; q++) {
                if ($("#autoMultiply1").val() == $("#venue"+q).val()) {
                    mIndex1 = $("#multiplySelect"+q).prop('selectedIndex');
                    mIndex1 = mIndex1 + 1;
                    $("#multiplySelect"+q).prop('selectedIndex', mIndex1);
                }
            }
            for (let q = 13; q <= 16; q++) {
                if ($("#autoMultiply2").val() == $("#venue"+q).val()) {
                    mIndex2 = $("#multiplySelect"+q).prop('selectedIndex');
                    mIndex2 = mIndex2 + 1;
                    $("#multiplySelect"+q).prop('selectedIndex', mIndex2);
                }
            }
            for (let q = 23; q <= 25; q++) {
                if ($("#autoMultiply2").val() == $("#venue"+q).val()) {
                    mIndex2 = $("#multiplySelect"+q).prop('selectedIndex');
                    mIndex2 = mIndex2 + 1;
                    $("#multiplySelect"+q).prop('selectedIndex', mIndex2);
                }
            }

            for (let q = 13; q <= 16; q++) {
                if ($("#autoMultiply3").val() == $("#venue"+q).val()) {
                    mIndex3 = $("#multiplySelect"+q).prop('selectedIndex');
                    mIndex3 = mIndex3 + 1;
                    $("#multiplySelect"+q).prop('selectedIndex', mIndex3);
                }
            }
            for (let q = 23; q <= 25; q++) {
                if ($("#autoMultiply3").val() == $("#venue"+q).val()) {
                    mIndex3 = $("#multiplySelect"+q).prop('selectedIndex');
                    mIndex3 = mIndex3 + 1;
                    $("#multiplySelect"+q).prop('selectedIndex', mIndex3);
                }
            }
            for (let q = 13; q <= 16; q++) {
                if ($("#autoMultiply4").val() == $("#venue"+q).val()) {
                    mIndex4 = $("#multiplySelect"+q).prop('selectedIndex');
                    mIndex4 = mIndex4 + 1;
                    $("#multiplySelect"+q).prop('selectedIndex', mIndex4);
                }
            }
            for (let q = 23; q <= 25; q++) {
                if ($("#autoMultiply4").val() == $("#venue"+q).val()) {
                    mIndex4 = $("#multiplySelect"+q).prop('selectedIndex');
                    mIndex4 = mIndex4 + 1;
                    $("#multiplySelect"+q).prop('selectedIndex', mIndex4);
                }
            }
            $("#autoMultiply1").val("");
            $("#autoMultiply2").val("");
            $("#autoMultiply3").val("");
            $("#autoMultiply4").val("");
            venueSeparator.length = 0;
        }
    }
});

    

/* Figures out where auto score was copied by looking for the presence of
text exclusive to the #scl_results channel. */

var scorePasteValOld;
/*
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
*/

//setInterval(() => (checkScorePaste()), 200);