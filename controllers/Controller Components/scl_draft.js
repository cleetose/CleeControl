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
                <input class="selectType storable2  draft" type="text" id="venueType1"
                    placeholder="Title" readonly>
                <div class="break"></div>
                <div class="venueSpinners">
                    <div class="scoreSpinners" id="venueSpinner1">
                        <input class="spinBoy storable2 draft" id="venueTypeCount1" type="number" name="value" value="0"
                            min="1" max="2" readonly>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="down"></button>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="up"></button>
                    </div>
                </div>
                <select class="venueSelect storable draft" id="ban11">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                <option value="ban">No Ban</option>
                </select>

                <select class="venueSelect storable draft" id="ban12">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                <option value="ban">No Ban</option>
                </select>
                <select class="venueSelect storable draft" id="ban21">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                <option value="ban">No Ban</option>
                </select>

                <select class="venueSelect storable draft" id="ban22">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                <option value="ban">No Ban</option>
                </select>


                <div class="break"></div>
                <input class="selectType storable2 draft" type="text" id="venueType2"
                    placeholder="Title" readonly>
                <div class="break"></div>
                <div class="venueSpinners">
                    <div class="scoreSpinners" id="venueSpinner2">
                        <input class="spinBoy storable2 draft" id="venueTypeCount2" type="number" name="value" value="0"
                            min="1" max="2" readonly>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="down"></button>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="up"></button>
                    </div>
                </div>
                <select class="venueSelect storable draft" id="restrict11">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                <option value="restrict">No restrict</option>
                </select>

                <select class="venueSelect storable draft" id="restrict12">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                <option value="restrict">No restrict</option>
                </select>
                <select class="venueSelect storable draft" id="restrict21">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                <option value="restrict">No restrict</option>
                </select>

                <select class="venueSelect storable draft" id="restrict22">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                <option value="restrict">No restrict</option>
                </select>

                <input class="selectType storable2 draft" type="text" id="venueType3"
                    placeholder="Title" readonly>
                <div class="venueSpinners">
                    <div class="scoreSpinners" id="venueSpinner3">
                        <input class="spinBoy storable2 draft" id="venueTypeCount3" type="number" name="value" value="0"
                            min="1" max="3" readonly>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="down"></button>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="up"></button>
                    </div>
                </div>
                <select class="venueSelect storable draft" id="pick11">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                </select>

                <select class="venueSelect storable draft" id="pick12">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                </select>
                <select class="venueSelect storable draft" id="pick21">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                </select>

                <select class="venueSelect storable draft" id="pick22">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                </select>
                <select class="venueSelect storable draft" id="pick31">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                </select>

                <select class="venueSelect storable draft" id="pick32">
                <option value="" selected></option>
                <option value="aquarium">Aquarium</option>
                <option value="balcony">Balcony</option>
                <option value="ballroom">Ballroom</option>
                <option value="courtyard">Courtyard</option>
                <option value="gallery">Gallery</option>
                <option value="high-rise">High-rise</option>
                <option value="library">Library</option>
                <option value="pub">Pub</option>
                <option value="redwoods">Redwoods</option>
                <option value="teien">Teien</option>
                <option value="terrace">Terrace</option>
                <option value="veranda">Veranda</option>
                </select>

            </div>
            <input id="resetti" class="buttony" type="button" value="Clear" />
        </div>
        `
    }
}

window.customElements.define('scl-draft', SclDraft);

var venue1;
var venue2;
var venue3;
var venue4;
var venue5;
var venue6;
var venue7;
var venue8;
var venue9;
var venue10;
var venue11;
var venue12;
var venue13;
var venue14;
var venue15;
var venue16;
var venue17;
var venue18;
var venue19;
var venue20;
var venue21;
var venue22;
var venue23;
var venue24;
var venue25;
var venue26;
var venue27;
var venue28;
var venue29;
var venue30;
var venue31;
var venue32;
var venueType1;
var venueType2;
var venueType3;
var venueType4;
var venueTypeCount1;
var venueTypeCount2;
var venueTypeCount3;
var venueTypeCount4;
checkboxMemArr2 = [];

$(document).ready(function () {

		chkMemLoader2 = localStorage.getObj('saveChkStates2');

		if (chkMemLoader2 != null) {
			checkboxMemArr2 = chkMemLoader2;
		}

		updateDoubles();
        draftType();
});



var checkboxArray2 = $('.storable-ckbx2').map(function () {
	return this.id;
});

function doublesSaver() {
	for (q = 0; q < checkboxArray2.length; q++) {
		checkboxMemArr2[q] = $('#' + checkboxArray2[q]).prop('checked');
	}
	localStorage.setObj('saveChkStates2', checkboxMemArr2);
}


function updateDoubles() {
	for (q = 0; q < checkboxArray2.length; q++) {
		$('#' + checkboxArray2[q]).prop('checked', checkboxMemArr2[q]);
	}

}

setInterval(() => (doublesSaver()), 200);

function draftClear() {
	$('#venue1').val('');
	$('#venue2').val('');
	$('#venue3').val('');
	$('#venue4').val('');
	$('#venue5').val('');
	$('#venue6').val('');
	$('#venue7').val('');
	$('#venue8').val('');
	$('#venue9').val('');
	$('#venue10').val('');
	$('#venue11').val('');
	$('#venue12').val('');
	$('#venue13').val('');
	$('#venue14').val('');
	$('#venue15').val('');
	$('#venue16').val('');
	$('#venue17').val('');
	$('#venue18').val('');
	$('#venue19').val('');
	$('#venue20').val('');
	$('#venue21').val('');
	$('#venue22').val('');
	$('#venue23').val('');
	$('#venue24').val('');
	$('#venue25').val('');
	$('#venue26').val('');
	$('#venue27').val('');
	$('#venue28').val('');
	$('#venue29').val('');
	$('#venue30').val('');
	$('#venue31').val('');
	$('#venue32').val('');
}

$('#matchType').change(draftType);

    function draftType() {
        console.log($('#matchType').val());
        if ($('#matchType').val() == 'regularSeason') {
            $('#venueType1').val("Bans");
            $('#venueType2').val("Restrictions");
            $('#venueType3').val("Picks");
            $('#venueTypeCount1').val(1);
            $('#venueTypeCount2').val(1);
            $('#venueTypeCount3').val(2);

        }

        if ($('#matchType').val() == 'postSeason') {
            $('#venueType1').val("Bans");
            $('#venueType2').val("Restrictions");
            $('#venueType3').val("Picks");
            $('#venueTypeCount1').val(1);
            $('#venueTypeCount2').val(1);
            $('#venueTypeCount3').val(3);

            
        }

        if ($('#matchType').val() == 'championship') {
            $('#venueType1').val("Bans");
            $('#venueType2').val("Double Picks");
            $('#venueType3').val("Single Picks");
            $('#venueTypeCount1').val(2);
            $('#venueTypeCount2').val(2);
            $('#venueTypeCount3').val(2);

            
        }
    }

		//Displays and hides venue dropdowns based on spinboxes.
		function checkSeason() {
			bansCount = $('#venueTypeCount1').val();
			if (bansCount == 0) {
				$('#ban1Title').css('display', 'none');
				$('#ban2Title').css('display', 'none');
				$('#ban11').css('display', 'none');
				$('#ban12').css('display', 'none');
				$('#ban21').css('display', 'none');
				$('#ban22').css('display', 'none');
				$('#flexDraft').css('height', 'fit-content');
			}
			if (bansCount == 1) {
				$('#ban1Title').css('display', 'block');
				$('#ban2Title').css('display', 'block');
				$('#ban11').css('display', 'block');
				$('#ban12').css('display', 'block');
				$('#ban21').css('display', 'none');
				$('#ban22').css('display', 'none');
				$('#flexDraft').css('height', 'fit-content');

			}
			if (bansCount == 2) {
				$('#ban1Title').css('display', 'block');
				$('#ban2Title').css('display', 'block');
				$('#ban11').css('display', 'block');
				$('#ban12').css('display', 'block');
				$('#ban21').css('display', 'block');
				$('#ban22').css('display', 'block');
				$('#flexDraft').css('height', 'fit-content');
			}


			restrictCount = $('#venueTypeCount2').val();
			if (restrictCount == 0) {
				$('#restrict1Title').css('display', 'none');
				$('#restrict2Title').css('display', 'none');
				$('#restrict11').css('display', 'none');
				$('#restrict12').css('display', 'none');
				$('#restrict21').css('display', 'none');
				$('#restrict22').css('display', 'none');
	
			}
			if (restrictCount == 1) {
				$('#restrict1Title').css('display', 'block');
				$('#restrict2Title').css('display', 'block');
				$('#restrict11').css('display', 'block');
				$('#restrict12').css('display', 'block');
				$('#restrict21').css('display', 'none');
				$('#restrict22').css('display', 'none');


			}
			if (restrictCount == 2) {
				$('#restrict1Title').css('display', 'block');
				$('#restrict2Title').css('display', 'block');
				$('#restrict11').css('display', 'block');
				$('#restrict12').css('display', 'block');
				$('#restrict21').css('display', 'block');
				$('#restrict22').css('display', 'block');
			}


			pickCount = $('#venueTypeCount3').val();
			if (pickCount == 0) {
				$('#pick1Title').css('display', 'none');
				$('#pick2Title').css('display', 'none');
				$('#pick11').css('display', 'none');
				$('#pick12').css('display', 'none');
				$('#pick21').css('display', 'none');
				$('#pick22').css('display', 'none');
				$('#pick31').css('display', 'none');
				$('#pick32').css('display', 'none');

			}
			if (pickCount == 1) {
				$('#pick1Title').css('display', 'block');
				$('#pick2Title').css('display', 'block');
				$('#pick11').css('display', 'block');
				$('#pick12').css('display', 'block');
				$('#pick21').css('display', 'none');
				$('#pick22').css('display', 'none');
				$('#pick31').css('display', 'none');
				$('#pick32').css('display', 'none');

			}
			if (pickCount == 2) {
				$('#pick1Title').css('display', 'block');
				$('#pick2Title').css('display', 'block');
				$('#pick11').css('display', 'block');
				$('#pick12').css('display', 'block');
				$('#pick21').css('display', 'block');
				$('#pick22').css('display', 'block');
				$('#pick31').css('display', 'none');
				$('#pick32').css('display', 'none');

			}
			if (pickCount == 3) {
				$('#pick1Title').css('display', 'block');
				$('#pick2Title').css('display', 'block');
				$('#pick11').css('display', 'block');
				$('#pick12').css('display', 'block');
				$('#pick21').css('display', 'block');
				$('#pick22').css('display', 'block');
				$('#pick31').css('display', 'block');
				$('#pick32').css('display', 'block');

			}


					//Clear button for Draft
		document.getElementById("resetti").addEventListener("click", function () {
			$('.venueSelect').val('');

		});



			//clears the venue selections on dropdowns that are hidden.
            venueSelectArr = $('.venueSelect').map(function () {
                return this.id;
            });

			for (i = 0; i < venueSelectArr.length; i++) {
				if ($('#'+venueSelectArr[i]).css('display') == ('none')) {
					$('#'+venueSelectArr[i]).val('');
				}
			}
			//finds the ids of each double checkbox and adds them to an array.
			var doubleCheckArray = $('.doubleCheck').map(function () {
				return this.id;
			});
			//Unchecks double checkboxes when they are not displayed.
			for (q = 0; q < doubleCheckArray.length; q++) {
				if ($('#' + doubleCheckArray[q]).css('display') == ('none')) {
					$('#' + doubleCheckArray[q]).prop('checked', false);
				}
			}


		}