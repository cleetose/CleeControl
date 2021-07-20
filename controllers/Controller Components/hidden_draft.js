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
						<option value="ban">No Ban</option>
					</select>
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
						<option value="ban">No Ban</option>
					</select>
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
						<option value="ban">No Ban</option>
					</select>
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
						<option value="ban">No Ban</option>
					</select>

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
						<option value="restriction">No Restrict</option>
					</select>
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
						<option value="restriction">No Restrict</option>
					</select>
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
						<option value="restriction">No Restrict</option>
					</select>
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
						<option value="restriction">No Restrict</option>
					</select>

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