class wcDraft extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <p class="titleBox">Draft</p>
        <button class="accordion" id="accordiondraftPan">Expand</button>
        <div class="panel" id="draftPan">
            <div id="flexDraft">
                <div class="break"></div>
                <label class="pbTitle" id="draftPlayer1">Player 1</label>
                <label class="pbTitle2" id="draftPlayer2">Player 2</label>
                <div class="break"></div>
                <input class="selectTypeS storable  draft" title="Blah blah blah" type="text" id="venueType1R"
                    placeholder="Title">
					<input class="selectTypeS storable  draft" title="Blah blah blah" type="text" id="venueType1L"
                    placeholder="Title">
                <div class="break"></div>
                <div class="venueSpinners">
                    <div class="scoreSpinners" id="venueSpinner1">
                        <input class="spinBoy storable2 draft" id="venueTypeCount1" type="number" name="value" value="0"
                            min="0" max="4" readonly>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="down"></button>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="up"></button>
                    </div>
                </div>
                <select class="venueSelect storable draft" id="venue1">

                </select>
                <input type="checkbox" id="doubleA" name="doubleATest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue2">

                </select>
                <select class="venueSelect storable draft" id="venue3">

                </select>
                <input type="checkbox" id="doubleB" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue4">

                </select>
                <select class="venueSelect storable draft" id="venue5">

                </select>
                <input type="checkbox" id="doubleC" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue6">

                </select>
                <select class="venueSelect storable draft" id="venue7">

                </select>
                <input type="checkbox" id="doubleD" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue8">

                </select>

                <div class="break"></div>
                <input class="selectType storable2 draft" title="Blah blah blah" type="text" id="venueType2"
                    placeholder="Title">
                <div class="break"></div>
                <div class="venueSpinners">
                    <div class="scoreSpinners" id="venueSpinner2">
                        <input class="spinBoy storable2 draft" id="venueTypeCount2" type="number" name="value" value="0"
                            min="0" max="4" readonly>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="down"></button>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="up"></button>
                    </div>
                </div>
                <select class="venueSelect storable draft" id="venue9">

                </select>
                <input type="checkbox" id="doubleE" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue10">

                </select>
                <select class="venueSelect storable draft" id="venue11">

                </select>
                <input type="checkbox" id="doubleF" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue12">

                </select>
                <select class="venueSelect storable draft" id="venue13">

                </select>
                <input type="checkbox" id="doubleG" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue14">

                </select>
                <select class="venueSelect storable draft" id="venue15">

                </select>
                <input type="checkbox" id="doubleH" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue16">

                </select>
                <input class="selectType storable2 draft" title="Blah blah blah" type="text" id="venueType3"
                    placeholder="Title">
                <div class="venueSpinners">
                    <div class="scoreSpinners" id="venueSpinner3">
                        <input class="spinBoy storable2 draft" id="venueTypeCount3" type="number" name="value" value="0"
                            min="0" max="4" readonly>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="down"></button>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="up"></button>
                    </div>
                </div>
                <select class="venueSelect storable draft" id="venue17">

                </select>
                <input type="checkbox" id="doubleI" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue18">

                </select>
                <select class="venueSelect storable draft" id="venue19">

                </select>
                <input type="checkbox" id="doubleJ" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue20">

                </select>
                <select class="venueSelect storable draft" id="venue21">

                </select>
                <input type="checkbox" id="doubleK" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue22">

                </select>
                <select class="venueSelect storable draft" id="venue23">

                </select>
                <input type="checkbox" id="doubleL" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue24">

                </select>
                <div class="break"></div>
                <input class="selectType storable2 draft" title="Blah blah blah" type="text" id="venueType4"
                    placeholder="Title">
                <div class="break"></div>
                <div class="venueSpinners">
                    <div class="scoreSpinners" id="venueSpinner4">
                        <input class="spinBoy storable2 draft" id="venueTypeCount4" type="number" name="value" value="0"
                            min="0" max="4" readonly>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="down"></button>
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="up"></button>
                    </div>
                </div>
                <select class="venueSelect storable draft" id="venue25">

                </select>
                <input type="checkbox" id="doubleM" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue26">

                </select>
                <select class="venueSelect storable draft" id="venue27">

                </select>
                <input type="checkbox" id="doubleN" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue28">

                </select>
                <select class="venueSelect storable draft" id="venue29">

                </select>
                <input type="checkbox" id="doubleO" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue30">

                </select>
                <select class="venueSelect storable draft" id="venue31">

                </select>
                <input type="checkbox" id="doubleP" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">
                <select class="venueSelect storable draft" id="venue32">

                </select>
            </div>
            <input id="resetti" class="buttony" type="button" value="Clear" />
        </div>
        `
    }
}

window.customElements.define('wc-draft', wcDraft);

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

		//Displays and hides venue dropdowns based on spinboxes.
		function checkSeason() {
			bansCount = $('#venueTypeCount1').val();
			if (bansCount == 0) {
				$('#ban1Title').css('display', 'none');
				$('#ban2Title').css('display', 'none');
				$('#venue1').css('display', 'none');
				$('#venue2').css('display', 'none');
				$('#venue3').css('display', 'none');
				$('#venue4').css('display', 'none');
				$('#venue5').css('display', 'none');
				$('#venue6').css('display', 'none');
				$('#venue7').css('display', 'none');
				$('#venue8').css('display', 'none');
				$('#doubleA').css('display', 'none');
				$('#doubleB').css('display', 'none');
				$('#doubleC').css('display', 'none');
				$('#doubleD').css('display', 'none');
				$('#flexDraft').css('height', 'fit-content');
			}
			if (bansCount == 1) {
				$('#ban1Title').css('display', 'block');
				$('#ban2Title').css('display', 'block');
				$('#venue1').css('display', 'block');
				$('#venue2').css('display', 'block');
				$('#venue3').css('display', 'none');
				$('#venue4').css('display', 'none');
				$('#venue5').css('display', 'none');
				$('#venue6').css('display', 'none');
				$('#venue7').css('display', 'none');
				$('#venue8').css('display', 'none');
				$('#doubleA').css('display', 'block');
				$('#doubleB').css('display', 'none');
				$('#doubleC').css('display', 'none');
				$('#doubleD').css('display', 'none');
				$('#flexDraft').css('height', 'fit-content');

			}
			if (bansCount == 2) {
				$('#ban1Title').css('display', 'block');
				$('#ban2Title').css('display', 'block');
				$('#venue1').css('display', 'block');
				$('#venue2').css('display', 'block');
				$('#venue3').css('display', 'block');
				$('#venue4').css('display', 'block');
				$('#venue5').css('display', 'none');
				$('#venue6').css('display', 'none');
				$('#venue7').css('display', 'none');
				$('#venue8').css('display', 'none');
				$('#doubleA').css('display', 'block');
				$('#doubleB').css('display', 'block');
				$('#doubleC').css('display', 'none');
				$('#doubleD').css('display', 'none');
				$('#flexDraft').css('height', 'fit-content');
			}
			if (bansCount == 3) {
				$('#ban1Title').css('display', 'block');
				$('#ban2Title').css('display', 'block');
				$('#venue1').css('display', 'block');
				$('#venue2').css('display', 'block');
				$('#venue3').css('display', 'block');
				$('#venue4').css('display', 'block');
				$('#venue5').css('display', 'block');
				$('#venue6').css('display', 'block');
				$('#venue7').css('display', 'none');
				$('#venue8').css('display', 'none');
				$('#doubleA').css('display', 'block');
				$('#doubleB').css('display', 'block');
				$('#doubleC').css('display', 'block');
				$('#doubleD').css('display', 'none');
				$('#flexDraft').css('height', 'fit-content');
			}
			if (bansCount == 4) {
				$('#ban1Title').css('display', 'block');
				$('#ban2Title').css('display', 'block');
				$('#venue1').css('display', 'block');
				$('#venue2').css('display', 'block');
				$('#venue3').css('display', 'block');
				$('#venue4').css('display', 'block');
				$('#venue5').css('display', 'block');
				$('#venue6').css('display', 'block');
				$('#venue7').css('display', 'block');
				$('#venue8').css('display', 'block');
				$('#doubleA').css('display', 'block');
				$('#doubleB').css('display', 'block');
				$('#doubleC').css('display', 'block');
				$('#doubleD').css('display', 'block');
				$('#flexDraft').css('height', 'fit-content');
			}

			restrictCount = $('#venueTypeCount2').val();
			if (restrictCount == 0) {
				$('#restrict1Title').css('display', 'none');
				$('#restrict2Title').css('display', 'none');
				$('#venue9').css('display', 'none');
				$('#venue10').css('display', 'none');
				$('#venue11').css('display', 'none');
				$('#venue12').css('display', 'none');
				$('#venue13').css('display', 'none');
				$('#venue14').css('display', 'none');
				$('#venue15').css('display', 'none');
				$('#venue16').css('display', 'none');
				$('#doubleE').css('display', 'none');
				$('#doubleF').css('display', 'none');
				$('#doubleG').css('display', 'none');
				$('#doubleH').css('display', 'none');
			}
			if (restrictCount == 1) {
				$('#restrict1Title').css('display', 'block');
				$('#restrict2Title').css('display', 'block');
				$('#venue9').css('display', 'block');
				$('#venue10').css('display', 'block');
				$('#venue11').css('display', 'none');
				$('#venue12').css('display', 'none');
				$('#venue13').css('display', 'none');
				$('#venue14').css('display', 'none');
				$('#venue15').css('display', 'none');
				$('#venue16').css('display', 'none');
				$('#doubleE').css('display', 'block');
				$('#doubleF').css('display', 'none');
				$('#doubleG').css('display', 'none');
				$('#doubleH').css('display', 'none');
			}
			if (restrictCount == 2) {
				$('#restrict1Title').css('display', 'block');
				$('#restrict2Title').css('display', 'block');
				$('#venue9').css('display', 'block');
				$('#venue10').css('display', 'block');
				$('#venue11').css('display', 'block');
				$('#venue12').css('display', 'block');
				$('#venue13').css('display', 'none');
				$('#venue14').css('display', 'none');
				$('#venue15').css('display', 'none');
				$('#venue16').css('display', 'none');
				$('#doubleE').css('display', 'block');
				$('#doubleF').css('display', 'block');
				$('#doubleG').css('display', 'none');
				$('#doubleH').css('display', 'none');
			}
			if (restrictCount == 3) {
				$('#restrict1Title').css('display', 'block');
				$('#restrict2Title').css('display', 'block');
				$('#venue9').css('display', 'block');
				$('#venue10').css('display', 'block');
				$('#venue11').css('display', 'block');
				$('#venue12').css('display', 'block');
				$('#venue13').css('display', 'block');
				$('#venue14').css('display', 'block');
				$('#venue15').css('display', 'none');
				$('#venue16').css('display', 'none');
				$('#doubleE').css('display', 'block');
				$('#doubleF').css('display', 'block');
				$('#doubleG').css('display', 'block');
				$('#doubleH').css('display', 'none');
			}
			if (restrictCount == 4) {
				$('#restrict1Title').css('display', 'block');
				$('#restrict2Title').css('display', 'block');
				$('#venue9').css('display', 'block');
				$('#venue10').css('display', 'block');
				$('#venue11').css('display', 'block');
				$('#venue12').css('display', 'block');
				$('#venue13').css('display', 'block');
				$('#venue14').css('display', 'block');
				$('#venue15').css('display', 'block');
				$('#venue16').css('display', 'block');
				$('#doubleE').css('display', 'block');
				$('#doubleF').css('display', 'block');
				$('#doubleG').css('display', 'block');
				$('#doubleH').css('display', 'block');
			}

			pickCount = $('#venueTypeCount3').val();
			if (pickCount == 0) {
				$('#pick1Title').css('display', 'none');
				$('#pick2Title').css('display', 'none');
				$('#venue17').css('display', 'none');
				$('#venue18').css('display', 'none');
				$('#venue19').css('display', 'none');
				$('#venue20').css('display', 'none');
				$('#venue21').css('display', 'none');
				$('#venue22').css('display', 'none');
				$('#venue23').css('display', 'none');
				$('#venue24').css('display', 'none');
				$('#doubleI').css('display', 'none');
				$('#doubleJ').css('display', 'none');
				$('#doubleK').css('display', 'none');
				$('#doubleL').css('display', 'none');
			}
			if (pickCount == 1) {
				$('#pick1Title').css('display', 'block');
				$('#pick2Title').css('display', 'block');
				$('#venue17').css('display', 'block');
				$('#venue18').css('display', 'block');
				$('#venue19').css('display', 'none');
				$('#venue20').css('display', 'none');
				$('#venue21').css('display', 'none');
				$('#venue22').css('display', 'none');
				$('#venue23').css('display', 'none');
				$('#venue24').css('display', 'none');
				$('#doubleI').css('display', 'block');
				$('#doubleJ').css('display', 'none');
				$('#doubleK').css('display', 'none');
				$('#doubleL').css('display', 'none');
			}
			if (pickCount == 2) {
				$('#pick1Title').css('display', 'block');
				$('#pick2Title').css('display', 'block');
				$('#venue17').css('display', 'block');
				$('#venue18').css('display', 'block');
				$('#venue19').css('display', 'block');
				$('#venue20').css('display', 'block');
				$('#venue21').css('display', 'none');
				$('#venue22').css('display', 'none');
				$('#venue23').css('display', 'none');
				$('#venue24').css('display', 'none');
				$('#doubleI').css('display', 'block');
				$('#doubleJ').css('display', 'block');
				$('#doubleK').css('display', 'none');
				$('#doubleL').css('display', 'none');
			}
			if (pickCount == 3) {
				$('#pick1Title').css('display', 'block');
				$('#pick2Title').css('display', 'block');
				$('#venue17').css('display', 'block');
				$('#venue18').css('display', 'block');
				$('#venue19').css('display', 'block');
				$('#venue20').css('display', 'block');
				$('#venue21').css('display', 'block');
				$('#venue22').css('display', 'block');
				$('#venue23').css('display', 'none');
				$('#venue24').css('display', 'none');
				$('#doubleI').css('display', 'block');
				$('#doubleJ').css('display', 'block');
				$('#doubleK').css('display', 'block');
				$('#doubleL').css('display', 'none');
			}
			if (pickCount == 4) {
				$('#pick1Title').css('display', 'block');
				$('#pick2Title').css('display', 'block');
				$('#venue17').css('display', 'block');
				$('#venue18').css('display', 'block');
				$('#venue19').css('display', 'block');
				$('#venue20').css('display', 'block');
				$('#venue21').css('display', 'block');
				$('#venue22').css('display', 'block');
				$('#venue23').css('display', 'block');
				$('#venue24').css('display', 'block');
				$('#doubleI').css('display', 'block');
				$('#doubleJ').css('display', 'block');
				$('#doubleK').css('display', 'block');
				$('#doubleL').css('display', 'block');
			}
			somethingCount = $('#venueTypeCount4').val();
			if (somethingCount == 0) {
				$('#something1Title').css('display', 'none');
				$('#something2Title').css('display', 'none');
				$('#venue25').css('display', 'none');
				$('#venue26').css('display', 'none');
				$('#venue27').css('display', 'none');
				$('#venue28').css('display', 'none');
				$('#venue29').css('display', 'none');
				$('#venue30').css('display', 'none');
				$('#venue31').css('display', 'none');
				$('#venue32').css('display', 'none');
				$('#doubleM').css('display', 'none');
				$('#doubleN').css('display', 'none');
				$('#doubleO').css('display', 'none');
				$('#doubleP').css('display', 'none');
			}
			if (somethingCount == 1) {
				$('#something1Title').css('display', 'block');
				$('#something2Title').css('display', 'block');
				$('#venue25').css('display', 'block');
				$('#venue26').css('display', 'block');
				$('#venue27').css('display', 'none');
				$('#venue28').css('display', 'none');
				$('#venue29').css('display', 'none');
				$('#venue30').css('display', 'none');
				$('#venue31').css('display', 'none');
				$('#venue32').css('display', 'none');
				$('#doubleM').css('display', 'block');
				$('#doubleN').css('display', 'none');
				$('#doubleO').css('display', 'none');
				$('#doubleP').css('display', 'none');
			}
			if (somethingCount == 2) {
				$('#something1Title').css('display', 'block');
				$('#something2Title').css('display', 'block');
				$('#venue25').css('display', 'block');
				$('#venue26').css('display', 'block');
				$('#venue27').css('display', 'block');
				$('#venue28').css('display', 'block');
				$('#venue29').css('display', 'none');
				$('#venue30').css('display', 'none');
				$('#venue31').css('display', 'none');
				$('#venue32').css('display', 'none');
				$('#doubleM').css('display', 'block');
				$('#doubleN').css('display', 'block');
				$('#doubleO').css('display', 'none');
				$('#doubleP').css('display', 'none');
			}
			if (somethingCount == 3) {
				$('#something1Title').css('display', 'block');
				$('#something2Title').css('display', 'block');
				$('#venue25').css('display', 'block');
				$('#venue26').css('display', 'block');
				$('#venue27').css('display', 'block');
				$('#venue28').css('display', 'block');
				$('#venue29').css('display', 'block');
				$('#venue30').css('display', 'block');
				$('#venue31').css('display', 'none');
				$('#venue32').css('display', 'none');
				$('#doubleM').css('display', 'block');
				$('#doubleN').css('display', 'block');
				$('#doubleO').css('display', 'block');
				$('#doubleP').css('display', 'none');
			}
			if (somethingCount == 4) {
				$('#something1Title').css('display', 'block');
				$('#something2Title').css('display', 'block');
				$('#venue25').css('display', 'block');
				$('#venue26').css('display', 'block');
				$('#venue27').css('display', 'block');
				$('#venue28').css('display', 'block');
				$('#venue29').css('display', 'block');
				$('#venue30').css('display', 'block');
				$('#venue31').css('display', 'block');
				$('#venue32').css('display', 'block');
				$('#doubleM').css('display', 'block');
				$('#doubleN').css('display', 'block');
				$('#doubleO').css('display', 'block');
				$('#doubleP').css('display', 'block');
			}

					//Clear button for Draft
		document.getElementById("resetti").addEventListener("click", function () {
			$('.venueSelect').val('');
			$('.selectType').val('');
			$("#doubleA").prop('checked', false);
			$("#doubleB").prop('checked', false);
			$("#doubleC").prop('checked', false);
			$("#doubleD").prop('checked', false);
			$("#doubleE").prop('checked', false);
			$("#doubleF").prop('checked', false);
			$("#doubleG").prop('checked', false);
			$("#doubleH").prop('checked', false);
			$("#doubleI").prop('checked', false);
			$("#doubleJ").prop('checked', false);
			$("#doubleK").prop('checked', false);
			$("#doubleL").prop('checked', false);
			$("#doubleM").prop('checked', false);
			$("#doubleN").prop('checked', false);
			$("#doubleO").prop('checked', false);
			$("#doubleP").prop('checked', false);
		});



			//clears the venue selections on dropdowns that are hidden.
			for (i = 0; i <= 32; i++) {
				if ($('#venue' + i).css('display') == ('none')) {
					$('#venue' + i).val('');
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