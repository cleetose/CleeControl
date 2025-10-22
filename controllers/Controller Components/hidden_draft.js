class HiddenDraft extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <p class="titleBox">Hidden Cup Draft</p>
			<button class="accordion" id="accordiondraftPan">Expand</button>
			<div class="panel" id="draftPan">
				<div id="flexDraft">
				<input type="text" class="storable draft" id="matchType" placeholder="Match Type Or Whatever" />

					<div class="break"></div>
					<p>Main Picks</p>
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
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleA" name="doubleATest" class="storable-ckbx doubleCheck" title="Double"
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
					<option value="moderne">Moderne</option>
					<option value="pub">Pub</option>
					<option value="redwoods">Redwoods</option>
					<option value="teien">Teien</option>
					<option value="terrace">Terrace</option>
					<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleB" name="doubleBTest" class="storable-ckbx doubleCheck" title="Double"
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
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleC" name="doubleCTest" class="storable-ckbx doubleCheck" title="Double"
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
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleD" name="doubleDTest" class="storable-ckbx doubleCheck" title="Double"
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
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleE" name="doubleETest" class="storable-ckbx doubleCheck" title="Double"
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
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleF" name="doubleFTest" class="storable-ckbx doubleCheck" title="Double"
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
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleG" name="doubleGTest" class="storable-ckbx doubleCheck" title="Double"
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
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleH" name="doubleHTest" class="storable-ckbx doubleCheck" title="Double"
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
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleI" name="doubleITest" class="storable-ckbx doubleCheck" title="Double"
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
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleJ" name="doubleJTest" class="storable-ckbx doubleCheck" title="Double"
                    value="double">	

					<div class="break"></div>

					<p>Overtime</p>
					<div class="break"></div>
					<select class="venueSelect storable draft" id="pick11">
						<option value="" selected>OT 1</option>
						<option value="aquarium">Aquarium</option>
						<option value="balcony">Balcony</option>
						<option value="ballroom">Ballroom</option>
						<option value="courtyard">Courtyard</option>
						<option value="gallery">Gallery</option>
						<option value="high-rise">High-rise</option>
						<option value="library">Library</option>
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleK" name="doublekTest" class="storable-ckbx doubleCheck" title="Double"
                    value="double">		

					<select class="venueSelect storable draft" id="pick12">
					<option value="" selected>OT 2</option>
					<option value="aquarium">Aquarium</option>
					<option value="balcony">Balcony</option>
					<option value="ballroom">Ballroom</option>
					<option value="courtyard">Courtyard</option>
					<option value="gallery">Gallery</option>
					<option value="high-rise">High-rise</option>
					<option value="library">Library</option>
					<option value="moderne">Moderne</option>
					<option value="pub">Pub</option>
					<option value="redwoods">Redwoods</option>
					<option value="teien">Teien</option>
					<option value="terrace">Terrace</option>
					<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleL" name="doubleLTest" class="storable-ckbx doubleCheck" title="Double"
                    value="double">	

					<select class="venueSelect storable draft" id="pick13">
						<option value="" selected>OT 3</option>
						<option value="aquarium">Aquarium</option>
						<option value="balcony">Balcony</option>
						<option value="ballroom">Ballroom</option>
						<option value="courtyard">Courtyard</option>
						<option value="gallery">Gallery</option>
						<option value="high-rise">High-rise</option>
						<option value="library">Library</option>
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleM" name="doubleMTest" class="storable-ckbx doubleCheck" title="Double"
                    value="double">	

					<select class="venueSelect storable draft" id="pick14">
						<option value="" selected>OT 4</option>
						<option value="aquarium">Aquarium</option>
						<option value="balcony">Balcony</option>
						<option value="ballroom">Ballroom</option>
						<option value="courtyard">Courtyard</option>
						<option value="gallery">Gallery</option>
						<option value="high-rise">High-rise</option>
						<option value="library">Library</option>
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="checkbox" id="doubleN" name="doubleNTest" class="storable-ckbx doubleCheck" title="Double"
                    value="double">	

					<select class="venueSelect storable draft" id="pick15">
					<option value="" selected>OT 5</option>
					<option value="aquarium">Aquarium</option>
					<option value="balcony">Balcony</option>
					<option value="ballroom">Ballroom</option>
					<option value="courtyard">Courtyard</option>
					<option value="gallery">Gallery</option>
					<option value="high-rise">High-rise</option>
					<option value="library">Library</option>
					<option value="moderne">Moderne</option>
					<option value="pub">Pub</option>
					<option value="redwoods">Redwoods</option>
					<option value="teien">Teien</option>
					<option value="terrace">Terrace</option>
					<option value="veranda">Veranda</option>
				</select>
				<input type="checkbox" id="doubleO" name="doubleOTest" class="storable-ckbx doubleCheck" title="Double"
				value="double">	
					<div class="break"></div>
					<p>Final Showdown</p>
					<div class="break"></div>
					<select class="venueSelect storable draft" id="pick16">
						<option value="" selected>Showdown</option>
						<option value="aquarium">Aquarium</option>
						<option value="balcony">Balcony</option>
						<option value="ballroom">Ballroom</option>
						<option value="courtyard">Courtyard</option>
						<option value="gallery">Gallery</option>
						<option value="high-rise">High-rise</option>
						<option value="library">Library</option>
						<option value="moderne">Moderne</option>
						<option value="pub">Pub</option>
						<option value="redwoods">Redwoods</option>
						<option value="teien">Teien</option>
						<option value="terrace">Terrace</option>
						<option value="veranda">Veranda</option>
					</select>
					<input type="text" class="storable draft" id="showdownTime" placeholder="Selected Time" />
				</div>

				<input id="resetti" class="buttony" type="button" value="Clear" /> </div>
		</div>
        `
    }
}

window.customElements.define('hidden-draft', HiddenDraft);

var venueSaverArr = [];


document.getElementById("resetti").addEventListener("click", draftClear);

function draftClear() {
	$('.venueSelect').val('');
	$('#showdownTime').val('');
	$('.doubleCheck').prop('checked',false);
}


