class SaveLoad extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <p class="titleBox">Save/Load Custom Settings</p>
        <button class="accordion" id="accordionsaveLoadPan">Expand</button>
        <div class="panel" id="saveLoadPan">
            <p id="saveDescriptions">Copy Loadout
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Update Loadout
            </p>
            <textarea id="saveText" readonly></textarea>
            <textarea id="loadText"></textarea>
            <input type="button" id="saveButton" class="buttony" value="Update">
            <input type="button" id="clearsaveButton" class="buttony" value="Clear">
            <input type="button" id="downloadButton" class="buttony" value="Copy to Clipboard">
        </div>
        `
    }
}

window.customElements.define('save-load', SaveLoad);

document.getElementById("downloadButton").addEventListener("click", function () {
    var copyText = document.getElementById("saveText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    $("#saveText").val("");

});

document.getElementById("clearsaveButton").addEventListener("click", function () {
    $("#loadText").val("");
});




document.getElementById("saveButton").addEventListener("click", function () {
    updateOverlays = $('#loadText').val();
    updateOverlaysArr = updateOverlays.split(',');
    $('#colorA').val(updateOverlaysArr[0]);
    $('#colorB').val(updateOverlaysArr[1]);
    $('#colorC').val(updateOverlaysArr[2]);
    $('#colorD').val(updateOverlaysArr[3]);
    $('#colorE').val(updateOverlaysArr[4]);
    $('#venueType1').val(updateOverlaysArr[5]);
    $('#venueType2').val(updateOverlaysArr[6]);
    $('#venueType3').val(updateOverlaysArr[7]);
    $('#venueType4').val(updateOverlaysArr[8]);
    $('#venueGroup1').val(updateOverlaysArr[9]);
    $('#venueGroup2').val(updateOverlaysArr[10]);
    $('#venueGroup3').val(updateOverlaysArr[11]);
    $('#venueGroup4').val(updateOverlaysArr[12]);
    var doubleBoolA = (updateOverlaysArr[13] === "true");
    var doubleBoolB = (updateOverlaysArr[14] === "true");
    var doubleBoolC = (updateOverlaysArr[15] === "true");
    var doubleBoolD = (updateOverlaysArr[16] === "true");
    var doubleBoolE = (updateOverlaysArr[17] === "true");
    var doubleBoolF = (updateOverlaysArr[18] === "true");
    var doubleBoolG = (updateOverlaysArr[19] === "true");
    var doubleBoolH = (updateOverlaysArr[20] === "true");
    var doubleBoolI = (updateOverlaysArr[21] === "true");
    var doubleBoolJ = (updateOverlaysArr[22] === "true");
    var doubleBoolK = (updateOverlaysArr[23] === "true");
    var doubleBoolL = (updateOverlaysArr[24] === "true");
    var doubleBoolM = (updateOverlaysArr[25] === "true");
    var doubleBoolN = (updateOverlaysArr[26] === "true");
    var doubleBoolO = (updateOverlaysArr[27] === "true");
    var doubleBoolP = (updateOverlaysArr[28] === "true");

    $('#doubleA').prop('checked', doubleBoolA);
    $('#doubleB').prop('checked', doubleBoolB);
    $('#doubleC').prop('checked', doubleBoolC);
    $('#doubleD').prop('checked', doubleBoolD);
    $('#doubleE').prop('checked', doubleBoolE);
    $('#doubleF').prop('checked', doubleBoolF);
    $('#doubleG').prop('checked', doubleBoolG);
    $('#doubleH').prop('checked', doubleBoolH);
    $('#doubleI').prop('checked', doubleBoolI);
    $('#doubleJ').prop('checked', doubleBoolJ);
    $('#doubleK').prop('checked', doubleBoolK);
    $('#doubleL').prop('checked', doubleBoolL);
    $('#doubleM').prop('checked', doubleBoolM);
    $('#doubleN').prop('checked', doubleBoolN);
    $('#doubleO').prop('checked', doubleBoolO);
    $('#doubleP').prop('checked', doubleBoolP);

    for (i = 29; i < updateOverlaysArr.length; i++) {
        $('#' + input3Array[i - 29]).val(updateOverlaysArr[i]);
    }
});

function loadOut() {
    colorALive = $('#colorA').val();
    colorBLive = $('#colorB').val();
    colorCLive = $('#colorC').val();
    colorDLive = $('#colorD').val();
    colorELive = $('#colorE').val();
    venueType1Live = $('#venueType1').val();
    venueType2Live = $('#venueType2').val();
    venueType3Live = $('#venueType3').val();
    venueType4Live = $('#venueType4').val();
    venueTypeCount1Live = $('#venueGroup1').val();
    venueTypeCount2Live = $('#venueGroup2').val();
    venueTypeCount3Live = $('#venueGroup3').val();
    venueTypeCount4Live = $('#venueGroup4').val();
    doubleALive = $('#doubleA').is(':checked');
    doubleBLive = $('#doubleB').is(':checked');
    doubleCLive = $('#doubleC').is(':checked');
    doubleDLive = $('#doubleD').is(':checked');
    doubleELive = $('#doubleE').is(':checked');
    doubleFLive = $('#doubleF').is(':checked');
    doubleGLive = $('#doubleG').is(':checked');
    doubleHLive = $('#doubleH').is(':checked');
    doubleILive = $('#doubleI').is(':checked');
    doubleJLive = $('#doubleJ').is(':checked');
    doubleKLive = $('#doubleK').is(':checked');
    doubleLLive = $('#doubleL').is(':checked');
    doubleMLive = $('#doubleM').is(':checked');
    doubleNLive = $('#doubleN').is(':checked');
    doubleOLive = $('#doubleO').is(':checked');
    doublePLive = $('#doubleP').is(':checked');
    venPool = venuePoolMemArr.toString();
    $('#saveText').val(colorALive + ',' + colorBLive + ',' + colorCLive + ',' + colorDLive + ','
        + colorELive + ',' + venueType1Live + ',' + venueType2Live + ',' + venueType3Live + ','
        + venueType4Live + ',' + venueTypeCount1Live + ',' + venueTypeCount2Live + ','
        + venueTypeCount3Live + ',' + venueTypeCount4Live + ',' + doubleALive + ',' + doubleBLive + ','
        + doubleCLive + ',' + doubleDLive + ',' + doubleELive + ',' + doubleFLive + ',' + doubleGLive + ','
        + doubleHLive + ',' + doubleILive + ',' + doubleJLive + ',' + doubleKLive + ',' + doubleLLive + ','
        + doubleMLive + ',' + doubleNLive + ',' + doubleOLive + ',' + doublePLive + ',' + venPool);
}