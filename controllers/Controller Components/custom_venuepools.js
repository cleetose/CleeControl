class VenueLoadout extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <p class="titleBox">Venue Pool</p>
        <button class="accordion" id="accordionloadoutPan">Expand</button>
        <div class="panel" id="loadoutPan">
            <form>
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout1">
                    <option value=""></option>
                    <option value="Aquarium" selected>Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak1">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power1" value="4">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness1" value="8">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout2">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony" selected>Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak2">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power2" value="2">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness2" value="3">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout3">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom" selected>Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak3">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power3" value="4">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness3" value="8">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout4">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard" selected>Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak4">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power4" value="4">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness4" value="7">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout5">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery" selected>Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak5">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power5" value="4">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness5" value="8">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout6">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise" selected>High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak6">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power6" value="3">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness6" value="5">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout7">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library" selected>Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak7">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power7" value="5">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness7" value="8">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout8">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne" selected>Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak8">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power8" value="4">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness8" value="8">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout9">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub" selected>Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak9">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power9" value="3">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness9" value="5">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout10">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods" selected>Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak10">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power10" value="4">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness10" value="8">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout11">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien" selected>Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak11">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power11" value="4">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness11" value="8">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout12">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace" selected>Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak12">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power12" value="3">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness12" value="5">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout13">
                    <option value=""></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda" selected>Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak13">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power13" value="5">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness13" value="8">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout14">
                    <option value="" selected></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak14">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power14">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness14">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout15">
                    <option value="" selected></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak15">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power15">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness15">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout16">
                    <option value="" selected></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak16">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power16">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness16">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout17">
                    <option value="" selected></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak17">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power17">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness17">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout18">
                    <option value="" selected></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak18">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power18">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness18">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout19">
                    <option value="" selected></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak19">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power19">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness19">
                <select class="loadoutDropdown storable2 loadoutBoy" id="venueLoadout20">
                    <option value="" selected></option>
                    <option value="Aquarium">Aquarium</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Ballroom">Ballroom</option>
                    <option value="Courtyard">Courtyard</option>
                    <option value="Gallery">Gallery</option>
                    <option value="High-rise">High-rise</option>
                    <option value="Library">Library</option>
                    <option value="Moderne">Moderne</option>
                    <option value="Pub">Pub</option>
                    <option value="Redwoods">Redwoods</option>
                    <option value="Teien">Teien</option>
                    <option value="Terrace">Terrace</option>
                    <option value="Veranda">Veranda</option>
                </select>
                <select class="pak storable2 loadoutBoy" id="pak20">
                    <option value="a">Any</option>
                    <option value="p">Pick</option>
                    <option value="k">Known</option>
                </select>
                <input type="text" class="powerToughness storable2 loadoutBoy" id="power20">
                /
                <input type="text" class="powerToughness storable2 loadoutBoy" id="toughness20">
                <input type="button" class="buttony" id="updateLoadouts" value="Update">
                <input type="reset" class="buttony">
            </form>
        </div>
        `
    }
}

window.customElements.define('venue-loadout', VenueLoadout);

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