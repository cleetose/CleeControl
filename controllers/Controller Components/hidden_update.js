class HiddenUpdateMatches extends HTMLElement {
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

colorA = '#67b7cf';
colorB = '#036a89';
colorC = '#ffffff';
colorD = '#ffffff';
colorE = '#ffffff';

const pbc = new BroadcastChannel("picks");
const sbc = new BroadcastChannel("score");
const tbc = new BroadcastChannel('tooltip');
const cbbc = new BroadcastChannel('casterBanner');

window.customElements.define('hidden-update-matches', HiddenUpdateMatches);

function inputSaver(className) {
    dataSaver = [];
    classArr = $('.'+className).map(function () {
        return this.id;
    });
    for (let i = 0; i < classArr.length; i++) {
        try {
            dataSaver[i] = (classArr[i] + ';;' + $('#' + classArr[i]).val());
            
        }
        catch {
            console.log('face');
        }
    }
    return dataSaver;
}

function chkbxSaver(className) {
    dataSaver = [];
    classArr = $('.' + className).map(function () {
        return this.id;
    });
    for (let i = 0; i < classArr.length; i++) {
        try {
            dataSaver[i] = (classArr[i] + ';;' + $('#' + classArr[i]).is(':checked'));

        }
        catch {
            console.log('face');
        }
    }
    return dataSaver;
}

function pleaseWork() {

    scoreBoardVars = inputSaver('scoreBoard');
    draftVars = inputSaver('draft');
    doubleChk = chkbxSaver('doubleCheck');
    tooltipsVars = inputSaver('tooltips');
    casterbannerVars = inputSaver('banner');

    pName1 = $('#pName1').val();
    pName2 = $('#pName2').val();

    pick1 = $('#pick1').val();
    pick2 = $('#pick2').val();
    pick3 = $('#pick3').val();
    pick4 = $('#pick4').val();
    pick5 = $('#pick5').val();
    pick6 = $('#pick6').val();
    pick7 = $('#pick7').val();
    pick8 = $('#pick8').val();
    pick9 = $('#pick9').val();
    pick10 = $('#pick10').val();
    matchType = $('#matchType').val();
    matchMemoryReloader = $("#matchMemory").val();

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
    behavior = $('#behavior').val();
    hostName = $('#hostName').val();
    casterNames = $('#casterNames').val();
    pbc.postMessage({
        draftVars, doubleChk
    });
    sbc.postMessage({
        scoreBoardVars
    });
    tbc.postMessage({
        tooltipsVars
    });
    cbbc.postMessage({
        casterbannerVars
    });

}

		//Update button
		document.getElementById("weee").addEventListener("click", pleaseWork);

//Send current variable states when Draft overlay initializes
pbc.onmessage = function () {
    pbc.postMessage({
        draftVars, doubleChk
    });
};

//Send current variable states when Scoreboard overlay initializes
sbc.onmessage = function () {
    sbc.postMessage({
        scoreBoardVars
    });
};

cbbc.onmessage = function () {
    cbbc.postMessage({
        casterbannerVars
    });
}
