class SclDraft extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <p class="titleBox">SCL Draft</p>
<button class="accordion" id="accordiondraftPan">Expand</button>
<div class="panel" id="draftPan">
    <div id="flexDraft">
        <div class="break"></div>
        <label class="pbTitle" id="draftPlayer1">Player 1</label>
        <label class="pbTitle2" id="draftPlayer2">Player 2</label>
        <div class="break"></div>
        <select class="storable draft" id="matchType">
            <option defaultSelected selected="" value="regularSeason">Regular Season</option>
            <option value="postSeason">Post Season</option>
            <option value="championship">Championship</option>
        </select>
        <input class="selectType storable2 draft" type="text" id="venueType1" placeholder="Title" readonly />
        <div class="break"></div>
        <select class="venueSelect storable draft" id="venue11">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
            <option value="declined; ; ;">No Ban</option>
        </select>

        <select class="venueSelect storable draft" id="venue21">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
            <option value="declined; ; ;">No Ban</option>
        </select>

        <div class="break"></div>
        <input class="selectType storable2 draft" type="text" id="venueType2" placeholder="Title" readonly />
        <div class="break"></div>
        <select class="venueSelect storable draft" id="venue12">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
            <option value="declined; ; ;">No restrict</option>
        </select>

        <select class="venueSelect storable draft" id="venue22">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
            <option value="declined; ; ;">No restrict</option>
        </select>

        <input class="selectType storable2 draft" type="text" id="venueType3" placeholder="Title" readonly />
        <div class="venueSpinners">
            <div class="scoreSpinners" id="venueSpinner3">
                <input class="spinBoy storable2 draft" id="venueTypeCount3" type="number" name="value" value="1" min="1" max="3" readonly />
                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="down"></button>
                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="up"></button>
            </div>
        </div>

        <select class="venueSelect storable draft" id="venue13">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
        </select>
        <select class="venueSelect storable draft" id="venue23">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
        </select>

        <select class="venueSelect storable draft" id="venue14">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
        </select>
        <select class="venueSelect storable draft" id="venue24">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
        </select>

        <select class="venueSelect storable draft" id="venue15">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
        </select>
        <select class="venueSelect storable draft" id="venue25">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
        </select>

        <select class="venueSelect storable draft" id="venue16">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
        </select>
        <select class="venueSelect storable draft" id="venue26">
            <option value="" selected></option>
            <option value="aquarium;Aquarium<br>Any 4/8;19 Guests<br>4:00mins">Aquarium</option>
            <option value="balcony;Balcony<br>Any 2/3;7 guests<br>2:00mins">Balcony</option>
            <option value="ballroom;Ballroom<br>Any 4/8;16 guests<br>3:30mins">Ballroom</option>
            <option value="courtyard;Courtyard<br>Any 4/7;16 guests<br>3:15mins">Courtyard</option>
            <option value="gallery;Gallery<br>Any 4/8;21 guests<br>4:00mins">Gallery</option>
            <option value="high-rise;High-rise<br>Any 3/5;12 guests<br>3:30mins">High-rise</option>
            <option value="library;Library<br>Any 5/8;21 guests<br>4:45mins">Library</option>
            <option value="moderne;Moderne<br>Any 4/8;21 guests<br>4:15mins">Moderne</option>
            <option value="pub;Pub<br>Any 3/7;16 guests<br>2:30mins">Pub</option>
            <option value="redwoods;Redwoods<br>Any 4/8;15 guests<br>3:30mins">Redwoods</option>
            <option value="teien;Teien<br>Any 4/8;13 guests<br>3:15mins">Teien</option>
            <option value="terrace;Terrace<br>Any 3/6;11 guests<br>3:30mins">Terrace</option>
            <option value="veranda;Veranda<br>Any 5/8;21 guests<br>4:15mins">Veranda</option>
        </select>
        <input id="resetti" class="buttony" type="button" value="Clear" />
    </div>

</div>
        `
    }
}

window.customElements.define('scl-draft', SclDraft);


$(document).ready(function () {
    $('#venueType1').val("Bans");
    $('#venueType2').val("Restrictions");
    $('#venueType3').val("Picks");
    draftType();
});


//Change value of hidden spinbox as well as the center text box based on draft type drop-down.
$('#matchType').change(draftType);

function draftType() {
    if ($('#matchType').val() == 'regularSeason') {
        $('#venueType1').val("Bans");
        $('#venueType2').val("Restrictions");
        $('#venueType3').val("Picks");
        $('#venueTypeCount3').val(1);
    }

    if ($('#matchType').val() == 'postSeason') {
        $('#venueType1').val("Bans");
        $('#venueType2').val("Restrictions");
        $('#venueType3').val("Picks");
        $('#venueTypeCount3').val(2);
    }

    if ($('#matchType').val() == 'championship') {
        $('#venueType2').val("More Bans");
        $('#venueType3').val("Picks");
        $('#venueTypeCount3').val(3);
    }
}


/*Displays and hides venue dropdowns based on the value of the hidden spinbox 
controlled by the draft type drop-down.*/
function checkSeason() {

    pickCount = $('#venueTypeCount3').val();
    if (pickCount == 0) {

        $('#venue13').css('display', 'none');
        $('#venue23').css('display', 'none');
        $('#venue14').css('display', 'none');
        $('#venue24').css('display', 'none');
        $('#venue15').css('display', 'none');
        $('#venue25').css('display', 'none');

    }
    if (pickCount == 1) {

        $('#venue13').css('display', 'block');
        $('#venue23').css('display', 'block');
        $('#venue14').css('display', 'block');
        $('#venue24').css('display', 'block');
        $('#venue15').css('display', 'none');
        $('#venue25').css('display', 'none');
        $('#venue16').css('display', 'none');
        $('#venue26').css('display', 'none');

    }
    if (pickCount == 2) {

        $('#venue13').css('display', 'block');
        $('#venue23').css('display', 'block');
        $('#venue14').css('display', 'block');
        $('#venue24').css('display', 'block');
        $('#venue15').css('display', 'block');
        $('#venue25').css('display', 'block');
        $('#venue16').css('display', 'none');
        $('#venue26').css('display', 'none');

    }
    if (pickCount == 3) {

        $('#venue13').css('display', 'block');
        $('#venue23').css('display', 'block');
        $('#venue14').css('display', 'block');
        $('#venue24').css('display', 'block');
        $('#venue15').css('display', 'block');
        $('#venue25').css('display', 'block');
        $('#venue16').css('display', 'block');
        $('#venue26').css('display', 'block');

    }

    /*clears the venue selections on drop-downs that are hidden
    when the draft type is changed.*/
    venueSelectArr = $('.venueSelect').map(function () {
        return this.id;
    });

    for (i = 0; i < venueSelectArr.length; i++) {
        if ($('#' + venueSelectArr[i]).css('display') == ('none')) {
            $('#' + venueSelectArr[i]).val('');
        }
    }

}

    //Clear button for Draft
    document.getElementById("resetti").addEventListener("click", function () {
        $('.venueSelect').val('');
    });