class updateMatches extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div id="updateTitle" class="titleBox">Update - Match Memory</div>
        <button class="accordion" id="accordionupdatePan">Expand</button>
        <div class="panel" id="updatePan">
            <br>
            <div id="matchMaker">
                <select class="" title="Input data automatically saved to selected match" id="matchMemory">
                    <option value="0" selected>Match 1</option>
                    <option value="1">Match 2</option>
                    <option value="2">Match 3</option>
                    <option value="3">Match 4</option>
                    <option value="4">Match 5</option>
                    <option value="5">Match 6</option>
                </select>
                <input title="Clear input fields and memory for selected match" type="button" class="buttony"
                    id="cMatchSave" value="Clear Current Match">
                <input title="Clear all match memory" type="button" class="buttony" id="aMatchSave"
                    value="Clear All">
            </div>
        </div>
        <br>
        <input title="Update Overlays" type="button" class="buttony" id="weee" value="Update">
        `
    }
}

const pbc = new BroadcastChannel("picks");
const sbc = new BroadcastChannel("score");
const tbc = new BroadcastChannel('tooltip');
const cbbc = new BroadcastChannel('casterBanner');

window.customElements.define('update-matches', updateMatches);

function pleaseWork() {

    pName1 = $('#pName1').val();
    pName2 = $('#pName2').val();
for (i=1;i<=32;i++) {
    if ($('#venue'+i).val() != null) {
        window['venue'+i] = $('#venue'+i).val().split(";");
    }
    else {
        window['venue'+i] = [''];
    }
    console.log(window['venue'+i]);
}

    doubleA = $('#doubleA').is(':checked');
    doubleB = $('#doubleB').is(':checked');
    doubleC = $('#doubleC').is(':checked');
    doubleD = $('#doubleD').is(':checked');
    doubleE = $('#doubleE').is(':checked');
    doubleF = $('#doubleF').is(':checked');
    doubleG = $('#doubleG').is(':checked');
    doubleH = $('#doubleH').is(':checked');
    doubleI = $('#doubleI').is(':checked');
    doubleJ = $('#doubleJ').is(':checked');
    doubleK = $('#doubleK').is(':checked');
    doubleL = $('#doubleL').is(':checked');
    doubleM = $('#doubleM').is(':checked');
    doubleN = $('#doubleN').is(':checked');
    doubleO = $('#doubleO').is(':checked');
    doubleP = $('#doubleP').is(':checked');
    venueType1 = $('#venueType1').val();
    venueType2 = $('#venueType2').val();
    venueType3 = $('#venueType3').val();
    venueType4 = $('#venueType4').val();
    venueTypeCount1 = $('#venueGroup1').val();
    venueTypeCount2 = $('#venueGroup2').val();
    venueTypeCount3 = $('#venueGroup3').val();
    venueTypeCount4 = $('#venueGroup4').val();
    matchMemoryReloader = $("#matchMemory").val();
    colorA = $('#colorA').val();
    colorB = $('#colorB').val();
    colorC = $('#colorC').val();
    colorD = $('#colorD').val();
    colorE = $('#colorE').val();
    middleImage = $('#img').val();
    pScore1 = $('#pScore1').val();
    pScore2 = $('#pScore2').val();
    pCountry1 = $('#pCountry1').val();
    pCountry2 = $('#pCountry2').val();
    pDivision1 = $('#pDivision1').val();
    pDivision2 = $('#pDivision2').val();
    tText = $('#tText').val();
    cTipName = $('#cTipName').val();
    cTipDesc = $('#cTipDesc').val();
    Rolla = $('#Rolla').val();
    Sniper = $("input[name='sniper']:checked").val();
    venueDecoder = $('#venueDecoder').val();
    scorePaste = $('#scorePaste').val();
    scoreSource = $('#scoreSource').val();
    spyPaste = $('#rollPaste').val();
    gameCounter = $('#gameCounter').val();
    behavior = $('#behavior').val();
    hostName = $('#hostName').val();
    casterNames = $('#casterNames').val();
    pbc.postMessage({
        pName1, pName2, venue1, venue2, venue3, venue4, venue5, venue6, venue7, venue8, venue9,
        venue10, venue11, venue12, venue13, venue14, venue15, venue16, venue17, venue18, venue19,
        venue20, venue21, venue22, venue23, venue24, venue25, venue26, venue27, venue28, venue29,
        venue30, venue31, venue32, doubleA, doubleB, doubleC, doubleD, doubleE, doubleF, doubleG,
        doubleH, doubleI, doubleJ, doubleK, doubleL, doubleM, doubleN, doubleO, doubleP,
        venueType1, venueType2, venueType3, venueType4, venueTypeCount1, venueTypeCount2,
        venueTypeCount3, venueTypeCount4, colorA, colorB, colorC, colorD, colorE,
        middleImage, pDivision1, pDivision2, matchMemoryReloader
    });
    sbc.postMessage({
        pName1, pName2, pCountry1, pCountry2, pScore1, pScore2, Rolla, Sniper, pDivision1, pDivision2, behavior,
        colorA, colorB, colorC, colorD, colorE
    });
    tbc.postMessage({
        tText, cTipName, cTipDesc, colorA, colorB, colorC, colorD, colorE
    });
    cbbc.postMessage({
        hostName, casterNames, colorA, colorB, colorC, colorD, colorE
    });

}

		//Update button
		document.getElementById("weee").addEventListener("click", pleaseWork);

//Send current variable states when Draft overlay initializes
pbc.onmessage = function () {
    pbc.postMessage({
        pName1, pName2, venue1, venue2, venue3, venue4, venue5, venue6, venue7, venue8, venue9,
        venue10, venue11, venue12, venue13, venue14, venue15, venue16, venue17, venue18, venue19,
        venue20, venue21, venue22, venue23, venue24, venue25, venue26, venue27, venue28, venue29,
        venue30, venue31, venue32, doubleA, doubleB, doubleC, doubleD, doubleE, doubleF, doubleG,
        doubleH, doubleI, doubleJ, doubleK, doubleL, doubleM, doubleN, doubleO, doubleP,
        venueType1, venueType2, venueType3, venueType4, venueTypeCount1, venueTypeCount2,
        venueTypeCount3, venueTypeCount4, colorA, colorB, colorC, colorD, colorE,
        middleImage, pDivision1, pDivision2, matchMemoryReloader
    });
};

//Send current variable states when Scoreboard overlay initializes
sbc.onmessage = function () {
    sbc.postMessage({
        pName1, pName2, pCountry1, pCountry2, pScore1, pScore2, Rolla, Sniper, pDivision1, pDivision2, behavior,
        colorA, colorB, colorC, colorD, colorE
    });
};

cbbc.onmessage = function () {
    cbbc.postMessage({
        hostName, casterNames, colorA, colorB, colorC, colorD, colorE
    });
}
