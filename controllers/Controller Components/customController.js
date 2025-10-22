var venueDecoder;
var scorePaste;
var scoreSource;
var spyPaste;
var gameCounter;

var matchMatchMatch;
var checkerLoader;


//Things to do when the page first loads.
$(document).ready(function () {
	if (localStorage.getObj('saveMatchStatesCustom') != null) {
		$('#matchMemory').val(localStorage.getObj('saveMatchStatesCustom'));
	}
	/*Recall array of div ids in previous sorting order
	then adds # to the front each element so the sortDom function works*/
	rememberMe = localStorage.getObj("sortOrderCustom");
	if (rememberMe != null) {
		for (i = 0; i < rememberMe.length; i++) {
			rememberMe[i] = "#" + rememberMe[i];
		}
		sortDom(rememberMe);
	}


	matchMemLoader = localStorage.getObj('saveStatesCustom');
	poolMemLoader = localStorage.getObj('savePoolsCustom');
	chkMemLoader = localStorage.getObj('saveChkStatesCustom');

	console.log(checkboxMemArr.length);

	if (matchMemLoader != null) {
		matchMemArr = matchMemLoader;
		if (diffArr.length > 0) {
			$('#matchMemory').val('1').change();
			setTimeout(() => {
				$('#matchMemory').val('2').change();
			}, 500);
			setTimeout(() => {
				$('#matchMemory').val('3').change();
			}, 500);
			setTimeout(() => {
				$('#matchMemory').val('4').change();
			}, 500);
			setTimeout(() => {
				$('#matchMemory').val('5').change();
			}, 500);
			setTimeout(() => {
				$('#matchMemory').val('0').change();
			}, 600);
		}

	} else if (matchMemLoader == null) {
		aMatchClearer();
	}
	if (chkMemLoader != null) {
		if (chkMemLoader.length == checkboxMemArr.length) {
			checkboxMemArr = chkMemLoader;
		}

	} else if (chkMemLoader == null) {
		$("#rollSelectorA").prop('checked', true);
	}

	if (poolMemLoader != null) {
		poolMemArr = poolMemLoader;

	}
	console.log(checkboxMemArr);

	updatePools();
	venuePool();
	setTimeout(() => {
		updateMatch();
	}, 200);
	checkSeason();

});

//Enables mouse-over tooltips
$(function () {
	$(document).tooltip({
		show: {
			duration: 200,
			delay: 500
		}
	});
});

//Makes sending arrays through localStorage easy. Don't ask me how this works.
Storage.prototype.setObj = function (key, obj) {
	return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key) {
	return JSON.parse(this.getItem(key))
}

//Changes order of Sortable Divs based on array order.
function sortDom(selectorArray) {
	while (selectorArray.length) {
		let $el = $(selectorArray.pop());
		$el.parent().prepend($el);
	}
}
//Sets sortable divisions and saves to localStorage
$(function () {
	$("#sortable").sortable({
		handle: ".titleBox",
		update: function () {
			var order = $("#sortable").sortable('toArray');
			localStorage.setObj("sortOrderCustom", order);

		}
	});
	$("#sortable").disableSelection();
});


matchMemory;
matchMemArr = [];

matchMemArr[0] = [];
matchMemArr[1] = [];
matchMemArr[2] = [];
matchMemArr[3] = [];
matchMemArr[4] = [];
matchMemArr[5] = [];
matchMemArr[6] = [];
memorySplitter = [];

matchMatchArr = [];

indepMemArr = [];
venuePoolMemArr = [];
memory2Splitter = [];


checkboxMemArr = [];
checkboxMemArr[0] = [];
checkboxMemArr[1] = [];
checkboxMemArr[2] = [];
checkboxMemArr[3] = [];
checkboxMemArr[4] = [];
checkboxMemArr[5] = [];
checkboxMemArr[6] = [];



var matchDepIdArr = $('.storable').map(function () {
	return this.id;
});

var matchIndepIddArr = $('.storable2').map(function () {
	return this.id;
});

var venuePoolIdArr = $('.loadoutBoy').map(function () {
	return this.id;
});

var checkboxArray = $('.storable-ckbx').map(function () {
	return this.id;
});




compareArr = localStorage.getObj('oldStates');

var convArray = jQuery.makeArray(matchDepIdArr);


localStorage.setObj('oldStates', convArray);


Array.prototype.diff = function (arr2) {
	var ret = [];
	this.sort();
	arr2.sort();
	for (var i = 0; i < this.length; i += 1) {
		if (arr2.indexOf(this[i]) == -1) {
			ret.push(this[i]);
		}
	}
	return ret;
};

try {
	diffArr = compareArr.diff(convArray);
}
catch {
	$('#matchMemory').val('1').change();
	setTimeout(() => {
		$('#matchMemory').val('2').change();
	}, 500);
	setTimeout(() => {
		$('#matchMemory').val('3').change();
	}, 500);
	setTimeout(() => {
		$('#matchMemory').val('4').change();
	}, 500);
	setTimeout(() => {
		$('#matchMemory').val('5').change();
	}, 500);
	setTimeout(() => {
		$('#matchMemory').val('0').change();
	}, 600);
}





//Clear buttons for Current and all match memory.
document.getElementById("cMatchSave").addEventListener("click", cMatchClearer);
document.getElementById("aMatchSave").addEventListener("click", aMatchClearer);

function cMatchClearer() {
	namesClear(); //names_scores
	draftClear(); //custom_draft
	rollClear(); //sniper_divisions
	tooltipsClear(); //tooltips
	$('#venueDecoder').val('');
	$('#scorePaste').val('');
	$('#scoreSource').val('');
	$('#rollPaste').val('');
	$('#gameCounter').val('0');
}

function aMatchClearer() {
	cMatchClearer();
	for (q = 0; q < 3; q++) {
		for (i = 0; i < matchDepIdArr.length; i++) {
			matchMemArr[q][i] = $('#' + matchDepIdArr[i]).val();
		}
	}
	for (q = 0; q < 3; q++) {
		for (i = 0; i < checkboxArray.length; i++) {
			checkboxMemArr[q][i] = $('#' + checkboxArray[i]).prop('checked');
		}
	}
}

//Updates match memory for currently selected match slot and recalls memory when a match slot is selected.

$('#matchMemory').change(updateMatch);



function updateMatch() {

	matchMemory = parseInt($('#matchMemory').val());

	for (i = 0; i < matchMemArr[0].length; i++) {

		try {
			memorySplitter = matchMemArr[matchMemory][i].split(';;');
			$('#' + memorySplitter[0]).val(memorySplitter[1]);
		}
		catch {

		}

	}

	for (q = 0; q < checkboxArray.length; q++) {
		$('#' + checkboxArray[q]).prop('checked', checkboxMemArr[matchMemory][q]);
	}


};

function updatePools() {

	for (i = 0; i < matchIndepIddArr.length; i++) {
		try {
			memory2Splitter = poolMemArr[i].split(';;');
			$('#' + memory2Splitter[0]).val(memory2Splitter[1]);
		}
		catch {
			console.log(memory2Splitter[0]);
		}

	}

};




function matchSaver() {
	matchMatchMatch = $("#matchMemory").val();
	matchMemory = parseInt($('#matchMemory').val());


	for (i = 0; i < matchDepIdArr.length; i++) {
		matchMemArr[matchMemory][i] = (matchDepIdArr[i] + ';;' + $('#' + matchDepIdArr[i]).val());

	}
	for (i = 0; i < matchIndepIddArr.length; i++) {
		indepMemArr[i] = (matchIndepIddArr[i] + ';;' + $('#' + matchIndepIddArr[i]).val());
	}
	for (i = 0; i < venuePoolIdArr.length; i++) {
		venuePoolMemArr[i] = $('#' + venuePoolIdArr[i]).val();
	}
	for (q = 0; q < checkboxArray.length; q++) {
		checkboxMemArr[matchMemory][q] = $('#' + checkboxArray[q]).prop('checked');
	}

	localStorage.setObj('saveMatchStatesCustom', matchMatchMatch);
	localStorage.setObj('saveStatesCustom', matchMemArr);
	localStorage.setObj('savePoolsCustom', indepMemArr);
	localStorage.setObj('saveChkStatesCustom', checkboxMemArr);


}


//UPDATE - MATCH MEMORY

const pbc = new BroadcastChannel("picks");
const sbc = new BroadcastChannel("score");
const tbc = new BroadcastChannel('tooltip');
const cbbc = new BroadcastChannel('casterBanner');

var scoreBoardVars;
var draftVars;
var doubleChk;
var tooltipsVars;
var casterbannerVars;





function inputSaver(className) {
	dataSaver = [];
	classArr = $('.' + className).map(function () {
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

function hideSection() {
	if ($('#draftHidder').is(':checked') == true) {
		$('#picksBans').css('display','none');
	}
	else {
		$('#picksBans').css('display','block');
	}

	if ($('#colorHidder').is(':checked') == true) {
		$('#customColors').css('display','none');
	}
	else {
		$('#customColors').css('display','block');
	}

	if ($('#poolHidder').is(':checked') == true) {
		$('#venueLoadouts').css('display','none');
	}
	else {
		$('#venueLoadouts').css('display','block');
	}

	if ($('#saveLoadHidder').is(':checked') == true) {
		$('#saveLoad').css('display','none');
	}
	else {
		$('#saveLoad').css('display','block');
	}
}


//SAVE/LOAD CUSTOM SETTINGS

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
		$('#' + venuePoolIdArr[i - 29]).val(updateOverlaysArr[i]);
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


//VENUE POOL

var venueSaverArr = [];


document.getElementById("updateLoadouts").addEventListener("click", venuePool);



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


//DRAFT

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

var spanAdder = 0;
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

	totalCount = parseInt(pickCount) + parseInt(restrictCount) + parseInt(bansCount) + parseInt(somethingCount);




		spanAdder = totalCount / 4;
		

	spanCount = 6 + Math.ceil(spanAdder);

	$('#picksBans').css('grid-row', 'span ' + spanCount);




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

//CUSTOM COLORS
var colorA;
var colorB;
var colorC;
var colorD;
var colorE;
var middleImage;

$(document).ready(function () {
	$('#colorpickerA').farbtastic('#colorA');
	$('#colorpickerB').farbtastic('#colorB');
	$('#colorpickerC').farbtastic('#colorC');
	$('#colorpickerD').farbtastic('#colorD');
	$('#colorpickerE').farbtastic('#colorE');
});


//TOOLTIPS
var tText;
var cTipName;
var cTipDesc;

//Clear button for tooltips
document.getElementById("clearTooltips").addEventListener("click", function () {
	$('#cTipName').val('');
	$('#cTipDesc').val('');
	$('#tText').val('');
});

function tooltipsClear() {
	$('#tText').val('');
	$('#cTipName').val('');
	$('#cTipDesc').val('');
}


//FIRST SNIPER - DIVISIONS
var pDivision1;
var pDivision2;
var Sniper;
var behavior;

function sniperVal() {
	$('#sniper').val($("input[name='sniper']:checked").val());
}

setInterval(() => (sniperVal()), 200);
//Clear button for Divisions Division
document.getElementById("resetter").addEventListener("click", function () {
	$('#pDivision1').val('');
	$('#pDivision2').val('');
});


//Replace Player 1/Player 2 text in Draft and First Sniper pannels with current player names.
function checkNames() {
	var pName1Current = $('#pName1').val();
	var pName2Current = $('#pName2').val();
	if ($('#pName1').val() != "") {
		$('#pRadio1').html(pName1Current + ' First Sniper');
		$('#draftPlayer1').html(pName1Current);
	} else {
		$('#pRadio1').html('Player One First Sniper');
		$('#draftPlayer1').html('Player 1');
	}
	if ($('#pName2').val() != "") {
		$('#pRadio2').html(pName2Current + ' First Sniper');
		$('#draftPlayer2').html(pName2Current);
	} else {
		$('#pRadio2').html('Player Two First Sniper');
		$('#draftPlayer2').html('Player 2');
	}
}

function rollClear() {
	$('#pDivision1').val('');
	$('#pDivision2').val('');
	$('#Rolla').val('');
	$("#rollSelectorA").prop('checked', true);
	$('#behavior').val('radioBased');
}


//NAMES - SCORES - CHARACTERS

var pName1;
var pName2;
var pScore1;
var pScore2;
var pCountry1;
var pCountry2;
var Rolla;
var Sniper;
var hostName;
var casterNames;

//Player names and flags autocomplete
$(function () {
	function processData(allText) {
		var record_num = 2;
		var allTextLines = allText.split(/\r\n|\n/);
		var lines = [];
		var headings = allTextLines.shift().split(',');
		while (allTextLines.length > 0) {
			var tobj = {},
				entry;
			entry = allTextLines.shift().split(',');
			tobj['label'] = entry[0];
			tobj['value'] = entry[1];
			lines.push(tobj);
		}
		return lines;
	}
	var lists = [];
	lists = processData(myCSV);
	//Makes autocomplete only match from the start of each name
	$.ui.autocomplete.filter = function (array, term) {
		var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
		return $.grep(array, function (value) {
			return matcher.test(value.label || value.value || value);
		});
	};
	$("#pName1").autocomplete({
		minLength: 1,
		source: lists,
		focus: function (event, ui) {
			$("#pName1").val(ui.item.label);
			return false;
		},
		select: function (event, ui) {
			$("#pName1").val(ui.item.label);
			$("#pCountry1").val(ui.item.value);
			if ($("#pName1").val() == $("#pCountry1").val()) {
				$("#pCountry1").val('');
			}
			return false;
		}
	});
	$("#pName2").autocomplete({
		minLength: 1,
		source: lists,
		focus: function (event, ui) {
			$("#pName2").val(ui.item.label);
			return false;
		},
		select: function (event, ui) {
			$("#pName2").val(ui.item.label);
			$("#pCountry2").val(ui.item.value);
			if ($("#pName2").val() == $("#pCountry2").val()) {
				$("#pCountry2").val('');
			}
			return false;
		}
	});
});

//Swap button for Players and Score Division
document.getElementById("swapNames").addEventListener("click", function () {
	sName1 = $('#pName1').val();
	sCountry1 = $('#pCountry1').val();
	sScore1 = $('#pScore1').val();
	sName2 = $('#pName2').val();
	sCountry2 = $('#pCountry2').val();
	sScore2 = $('#pScore2').val();
	$('#pName1').val(sName2);
	$('#pCountry1').val(sCountry2);
	$('#pScore1').val(sScore2);
	$('#pName2').val(sName1);
	$('#pCountry2').val(sCountry1);
	$('#pScore2').val(sScore1);
});
//Clear button for Players and Score Division
document.getElementById("blankNames").addEventListener("click", function () {
	$('#pName1').val('');
	$('#pCountry1').val('');
	$('#pScore1').val(0);
	$('#pName2').val('');
	$('#pCountry2').val('');
	$('#pScore2').val(0);
	$('#gameCounter').val('0');
});
//Clear button for Spy character
document.getElementById("clearRolls").addEventListener("click", function () {
	$('#Rolla').val('');
});

function namesClear() {
	$('#pName1').val('');
	$('#pName2').val('');
	$('#pScore1').val('0');
	$('#pScore2').val('0');
	$('#pCountry1').val('');
	$('#pCountry2').val('');
}


//Hotkeys
var pScore1UpOld = pScore1Up;
var pScore2UpOld = pScore2Up;
var gamesPlayedUpOld = gamesPlayedUp;
var clearPlayersOld = clearPlayers;
var clearDraftOld = clearDraft;
var clearCharacterOld = clearCharacter;
var clearTooltipsOld = clearTooltips;
var clearDraftPasteOld = clearDraftPaste;
var clearScorePasteOld = clearScorePaste;
var clearSpyPasteOld = clearSpyPaste;
var match1Old = match1;
var match2Old = match2;
var match3Old = match3;
var match4Old = match4;
var match5Old = match5;
var match6Old = match6;
var bigUpdateOld = bigUpdate;

//Format data from hotkeys.js
function updateHotkeys() {
	src = '../js/hotkeys.js';
	$('script[src="' + src + '"]').remove();
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.src = src;
	head.appendChild(script);
}
//Set hotkey functions
function checkHotkeys() {
	if (pScore1Up != pScore1UpOld) {
		let scoreUpper = document.getElementById('pScore1');
		scoreUpper.stepUp();
		pScore1UpOld = pScore1Up;
	}
	if (pScore2Up != pScore2UpOld) {
		let score2Upper = document.getElementById('pScore2');
		score2Upper.stepUp();
		pScore2UpOld = pScore2Up;
	}
	if (gamesPlayedUp != gamesPlayedUpOld) {
		let gPlayed = document.getElementById('gameCounter');
		gPlayed.stepUp();
		gamesPlayedUpOld = gamesPlayedUp;
	}
	if (clearPlayers != clearPlayersOld) {
		$('#pName1').val('');
		$('#pCountry1').val('');
		$('#pScore1').val(0);
		$('#pName2').val('');
		$('#pCountry2').val('');
		$('#pScore2').val(0);
		clearPlayersOld = clearPlayers;
	}
	if (clearDraft != clearDraftOld) {
		$('.venueSelect').val('');
		clearDraftOld = clearDraft;
	}
	if (clearCharacter != clearCharacterOld) {
		$('#Rolla').val('');
		clearCharacterOld = clearCharacter;
	}
	if (clearTooltips != clearTooltipsOld) {
		$('#cTipName').val('');
		$('#cTipDesc').val('');
		$('#tText').val('');
		clearTooltipsOld = clearTooltips;
	}
	if (clearDraftPaste != clearDraftPasteOld) {
		$('#venueDecoder').val('');
		clearDraftPasteOld = clearDraftPaste;
	}
	if (clearScorePaste != clearScorePasteOld) {
		$('#scoreSource').val('');
		$('#scorePaste').val('');
		$('#gameCounter').val('0');
		clearScorePasteOld = clearScorePaste;
	}
	if (clearSpyPaste != clearSpyPasteOld) {
		$('#rollPaste').val('');
		clearSpyPasteOld = clearSpyPaste;
	}
	if (match1Old != match1) {
		$('#matchMemory').val('0').change();
		match1Old = match1;
	}
	if (match2Old != match2) {
		$('#matchMemory').val('1').change();
		match2Old = match2;
	}
	if (match3Old != match3) {
		$('#matchMemory').val('2').change();
		match3Old = match3;
	}
	if (match4Old != match4) {
		$('#matchMemory').val('3').change();
		match4Old = match4;
	}
	if (match5Old != match5) {
		$('#matchMemory').val('4').change();
		match5Old = match5;
	}
	if (match6Old != match6) {
		$('#matchMemory').val('5').change();
		match6Old = match6;
	}
	if (bigUpdate != bigUpdateOld) {
		pleaseWork();
		bigUpdateOld = bigUpdate;
	}
}



//Check hotkey variable states and Match type dropdown every 200ms
function checkUpdates() {
	checkHotkeys();
	updateHotkeys();
}

setInterval(() => (checkSeason(), checkNames(), checkUpdates(), loadOut(), hideSection()), 200);
setTimeout(() => {
	setInterval(() => (matchSaver()), 200);
}, 400);