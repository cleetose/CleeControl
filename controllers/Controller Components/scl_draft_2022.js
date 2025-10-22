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
            <option defaultSelected selected="" value="regularSeasonA">Regular Season Lower</option>
            <option defaultSelected selected="" value="regularSeasonB">Regular Season Upper</option>
            <option value="postSeason">Post Season</option>

        </select>
        <input class="selectType storable2 draft" type="text" id="venueType1" placeholder="Title" readonly />
        <div class="break"></div>
        <select class="venueSelect storable draft" id="venue11">
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
            <option value="declined; ; ;">No Ban</option>
        </select>

        <select class="venueSelect storable draft" id="venue21">
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
            <option value="declined; ; ;">No Ban</option>
        </select>

        <div class="break"></div>
        <input class="selectType storable2 draft" type="text" id="venueType2" placeholder="Title" readonly />
        <div class="break"></div>
        <select class="venueSelect storable draft" id="venue12">
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

        <select class="venueSelect storable draft" id="venue22">
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

        <input class="selectType storable2 draft" type="text" id="venueType3" placeholder="Title" readonly />


        <select class="venueSelect storable draft" id="venue13">
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
        </select>
    <select class="storable multiSelect draft" id="multiplySelect13">
        <option value="Single">S</option>
        <option value="Double">D</option>
        <option value="Triple">T</option>
    </select>
        <select class="venueSelect storable draft" id="venue23">
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
        </select>

        <select class="storable multiSelect draft" id="multiplySelect23">
        <option value="Single">S</option>
        <option value="Double">D</option>
        <option value="Triple">T</option>
    </select>


        <select class="venueSelect storable draft" id="venue14">
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
        </select>
        <select class="storable multiSelect draft" id="multiplySelect14">
        <option value="Single">S</option>
        <option value="Double">D</option>
        <option value="Triple">T</option>
    </select>
        <select class="venueSelect storable draft" id="venue24">
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
        </select>
        <select class="storable multiSelect draft" id="multiplySelect24">
        <option value="Single">S</option>
        <option value="Double">D</option>
        <option value="Triple">T</option>
    </select>
        <select class="venueSelect storable draft" id="venue15">
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
        </select>
        <select class="storable multiSelect draft" id="multiplySelect15">
        <option value="Single">S</option>
        <option value="Double">D</option>
        <option value="Triple">T</option>
    </select>
        <select class="venueSelect storable draft" id="venue25">
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
        </select>
        <select class="storable multiSelect draft" id="multiplySelect25">
        <option value="Single">S</option>
        <option value="Double">D</option>
        <option value="Triple">T</option>
    </select>
        <select class="venueSelect storable draft" id="venue16">
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
        </select>
        <select class="storable multiSelect draft" id="multiplySelect16">
        <option value="Single">S</option>
        <option value="Double">D</option>
        <option value="Triple">T</option>
    </select>
        <select class="venueSelect storable draft" id="venue26">
        </select>
        <select class="storable multiSelect draft" id="multiplySelect26">

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

});

//Changes the configuration of the draft dropdowns as well as the center text box based on draft type drop-down.
function draftType() {
    if ($('#matchType').val() == 'regularSeasonA') {
        $('#venueType1').val("Bans");
        $('#venueType2').val("Restrictions");
        $('#venueType3').val("Picks");
        $('#venue13').css('display', 'block');
        $('#venue23').css('display', 'block');
        $('#venue14').css('display', 'block');
        $('#venue24').css('display', 'block');
        $('#venue15').css('display', 'none');
        $('#venue25').css('display', 'none');
        $('#venue16').css('display', 'none');
        $('#venue26').css('display', 'none');
        
        $('#multiplySelect13').css('display', 'block');
        $('#multiplySelect23').css('display', 'block');
        $('#multiplySelect14').css('display', 'block');
        $('#multiplySelect24').css('display', 'block');
        $('#multiplySelect15').css('display', 'none');
        $('#multiplySelect25').css('display', 'none');
        $('#multiplySelect16').css('display', 'none');
        $('#multiplySelect26').css('display', 'none');
        $('#multiplySelect13').val('Double');
        $('#multiplySelect23').val('Double');
        $('#multiplySelect14').val('Single');
        $('#multiplySelect24').val('Single');
    }

    if ($('#matchType').val() == 'regularSeasonB') {
        $('#venueType1').val("Bans");
        $('#venueType2').val("Restrictions");
        $('#venueType3').val("Picks");
        $('#venue13').css('display', 'block');
        $('#venue23').css('display', 'block');
        $('#venue14').css('display', 'block');
        $('#venue24').css('display', 'block');
        $('#venue15').css('display', 'block');
        $('#venue25').css('display', 'block');
        $('#venue16').css('display', 'none');
        $('#venue26').css('display', 'none');
        
        $('#multiplySelect13').css('display', 'block');
        $('#multiplySelect23').css('display', 'block');
        $('#multiplySelect14').css('display', 'block');
        $('#multiplySelect24').css('display', 'block');
        $('#multiplySelect15').css('display', 'block');
        $('#multiplySelect25').css('display', 'block');
        $('#multiplySelect16').css('display', 'none');
        $('#multiplySelect26').css('display', 'none');
        
    }

    if ($('#matchType').val() == 'postSeason') {
        $('#venueType1').val("Bans");
        $('#venueType2').val("Restrictions");
        $('#venueType3').val("Picks");
        $('#venue13').css('display', 'block');
        $('#venue23').css('display', 'block');
        $('#venue14').css('display', 'block');
        $('#venue24').css('display', 'block');
        $('#venue15').css('display', 'block');
        $('#venue25').css('display', 'block');
        $('#venue16').css('display', 'block');
        $('#venue26').css('display', 'block');
        $('#venue26').css('visibility', 'hidden');
        
        $('#multiplySelect13').css('display', 'block');
        $('#multiplySelect23').css('display', 'block');
        $('#multiplySelect14').css('display', 'block');
        $('#multiplySelect24').css('display', 'block');
        $('#multiplySelect15').css('display', 'block');
        $('#multiplySelect25').css('display', 'block');
        $('#multiplySelect16').css('display', 'block');
        $('#multiplySelect26').css('display', 'block');
        $('#multiplySelect26').css('visibility', 'hidden');
       
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