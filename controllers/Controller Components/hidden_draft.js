class HiddenDraft extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <p class="titleBox">Hidden Cup Draft</p>
			<button class="accordion" id="accordiondraftPan">Expand</button>
			<div class="panel" id="draftPan">
				<div id="flexDraft">
					<select class="storable draft" id="matchType">
						<option defaultSelected selected="" value="1">Round 1</option>
						<option value="2">Round 2</option>
						<option value="3">Round 3</option>
                        <option value="4">Round 4</option>
						<option value="5">Round 5</option>
					</select>
					<div class="break"></div>
					<div class="break"></div>
					<select class="venueSelect storable draft" id="ban1">
					<option value="" selected>Player 1Ban</option>
					<option value="Aquarium">Aquarium</option>
					<option value="Balcony">Balcony</option>
					<option value="Ballroom">Ballroom</option>
					<option value="Courtyard">Courtyard</option>
					<option value="Gallery">Gallery</option>
					<option value="High-rise">High-rise</option>
					<option value="Library">Library</option>
					<option value="Pub">Pub</option>
					<option value="Redwoods">Redwoods</option>
					<option value="Teien">Teien</option>
					<option value="Terrace">Terrace</option>
					<option value="Veranda">Veranda</option>
					<option value="ban">No Ban</option>
				</select>
				<select class="venueSelect storable draft" id="ban2">
				<option value="" selected>Player 1Ban</option>
				<option value="Aquarium">Aquarium</option>
				<option value="Balcony">Balcony</option>
				<option value="Ballroom">Ballroom</option>
				<option value="Courtyard">Courtyard</option>
				<option value="Gallery">Gallery</option>
				<option value="High-rise">High-rise</option>
				<option value="Library">Library</option>
				<option value="Pub">Pub</option>
				<option value="Redwoods">Redwoods</option>
				<option value="Teien">Teien</option>
				<option value="Terrace">Terrace</option>
				<option value="Veranda">Veranda</option>
				<option value="ban">No Ban</option>
			</select>
					<select class="venueSelect storable draft" id="pick1">
						<option value="" selected>Pick 1</option>
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
					<input type="checkbox" id="doubleA" name="doubleATest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">					
					<select class="venueSelect storable draft" id="pick2">
						<option value="" selected>Pick 2</option>
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
					<input type="checkbox" id="doubleB" name="doubleBTest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">	
					<select class="venueSelect storable draft" id="pick3">
						<option value="" selected>Pick 3</option>
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
					<input type="checkbox" id="doubleC" name="doubleCTest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">	
					<select class="venueSelect storable draft" id="pick4">
						<option value="" selected>Pick 4</option>
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
					<input type="checkbox" id="doubleD" name="doubleDTest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">	
					<select class="venueSelect storable draft" id="pick5">
						<option value="" selected>Pick 5</option>
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
					<input type="checkbox" id="doubleE" name="doubleETest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">	
					<select class="venueSelect storable draft" id="pick6">
						<option value="" selected>Pick 6</option>
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
					<input type="checkbox" id="doubleF" name="doubleFTest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">	
					<select class="venueSelect storable draft" id="pick7">
						<option value="" selected>Pick 7</option>
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
					<input type="checkbox" id="doubleG" name="doubleGTest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">	
					<select class="venueSelect storable draft" id="pick8">
						<option value="" selected>Pick 8</option>
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
					<input type="checkbox" id="doubleH" name="doubleHTest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">	
					<select class="venueSelect storable draft" id="pick9">
						<option value="" selected>Pick 9</option>
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
					<input type="checkbox" id="doubleI" name="doubleITest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">	
					<select class="venueSelect storable draft" id="pick10">
						<option value="" selected>Pick 10</option>
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
					<input type="checkbox" id="doubleJ" name="doubleJTest" class="storable-ckbx2 doubleCheck" title="Double"
                    value="double">	
				</div>
				<input id="resetti" class="buttony" type="button" value="Clear" /> </div>
		</div>
        `
    }
}

window.customElements.define('hidden-draft', HiddenDraft);

var venueSaverArr = [];

$(document).ready(function () {
    venuePool();
})

function draftClear() {
	$('#pick1').val('');
	$('#pick2').val('');
	$('#pick3').val('');
	$('#pick4').val('');
	$('#pick5').val('');
	$('#pick6').val('');
	$('#pick7').val('');
	$('#pick8').val('');
	$('#pick9').val('');
	$('#pick10').val('');
}


function venuePool() {

    for (q = 0; 31 >= q; q++) {
        venueSaverArr[q] = $('#venue' + q).val();
    }

    for (q = 1; 32 >= q; q++) {
        $('#venue' + q).empty();
        $('#venue' + q).append('<option value=""></option>');
        for (i = 1; 20 >= i; i++) {
            optionA = $('#venueLoadout' + i).val();
            optionB = $('#pak' + i).val();
            optionC = $('#power' + i).val();
            optionD = $('#toughness' + i).val();
            if (optionA != '' && optionB != 'k') {
                $('#venue' + q).append('<option value="' + optionA + ';' + optionB + optionC + '/' + optionD + '">' + optionA + ' ' + optionB + optionC + '/' + optionD + '</option>');
            } else if (optionA != '' && optionB == 'k') {
                $('#venue' + q).append('<option value="' + optionA + ';' + optionB + optionC + '">' + optionA + ' ' + optionB + optionC + '</option>');
            }
        }
        $('#venue' + q).append('<option value="Declined; ">Declined</option>');
    }
    for (q = 0; 31 >= q; q++) {
        $('#venue' + q).val(venueSaverArr[q]);
    }

}