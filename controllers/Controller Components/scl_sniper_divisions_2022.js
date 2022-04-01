class SnipersDivs extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `

		<!--First sniper & Divisions-->
		<p class="titleBox">First Sniper - Divisions</p>
		<button class="accordion" id="accordionrollsPan">Expand</button>
		<div class="panel" id="rollsPan">
			<form id="behave">
				<select class="storable scoreBoard" id="behavior">
					<option value="radioBased" selected>Double Update to Change Rolls</option>
					<option value="scoreBased">Single Update to Change Rolls</option>
				</select>
			</form>
			<div id="rollSelector">
				<input type="radio" class="storable-ckbx scoreBoard" id="rollSelectorA" name="sniper" value="0" checked>
				<label for="rollSelectorA" id="pRadio1">Player One First Sniper</label>
				<br>
				<input type="radio" class="storable-ckbx" id="rollSelectorB" name="sniper" value="1">
				<label for="rollSelectorB" id="pRadio2">Player Two First Sniper</label>
				<input type="text" class="scoreBoard" id="sniper" style="display:none">
			</div>
			<br>
			<div id="divContent">
				<select class="storable scoreBoard draft" id="pDivision1">
					<option value="" selected>Player 1 Division</option>
					<option value="diamond">Diamond</option>
					<option value="platinum">Platinum</option>
					<option value="gold">Gold</option>
					<option value="silver">Silver</option>
					<option value="bronze">Bronze</option>
					<option value="copper">Copper</option>
					<option value="iron">Iron</option>
					<option value="obsidian">Obsidian</option>
					<option value="oak">Oak</option>
					<option value="Challenger">Challenger</option>
					<option value="aluminum">Aluminum</option>
					<option value="bamboo">Bamboo</option>
				</select>
				<select class="storable scoreBoard draft" title="Only use for multi-divisional matches" id="pDivision2">
					<option value="" selected>Player 2 Division</option>
					<option value="diamond">Diamond</option>
					<option value="platinum">Platinum</option>
					<option value="gold">Gold</option>
					<option value="silver">Silver</option>
					<option value="bronze">Bronze</option>
					<option value="copper">Copper</option>
					<option value="iron">Iron</option>
					<option value="obsidian">Obsidian</option>
					<option value="oak">Oak</option>
					<option value="Challenger">Challenger</option>
					<option value="aluminum">Aluminum</option>
					<option value="bamboo">Bamboo</option>
				</select>
				<input type="button" class="buttony" id="resetter" value="clear">
			</div>
		</div>
`
	}
}

window.customElements.define('sniper-divs', SnipersDivs);

var pDivision1;
var pDivision2;
var Sniper;
var behavior;

/*Sets the value of an invisible text box to be equal to 0 or 1 based on the First Sniper radio buttons.
Makes the value easier to deal with in the scoreboard.*/
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
                $('#pName1Breakdown').html(pName1Current);
			} else {
				$('#pRadio1').html('Player One First Sniper');
				$('#draftPlayer1').html('Player 1');
                $('#pName1Breakdown').html('Player 1');
			}
			if ($('#pName2').val() != "") {
				$('#pRadio2').html(pName2Current + ' First Sniper');
				$('#draftPlayer2').html(pName2Current);
                $('#pName2Breakdown').html(pName2Current);
			} else {
				$('#pRadio2').html('Player Two First Sniper');
				$('#draftPlayer2').html('Player 2');
                $('#pName2Breakdown').html('Player 2');
			}
		}

		function rollClear() {
			$('#pDivision1').val('');
			$('#pDivision2').val('');
			$('#Rolla').val('');
			$("#rollSelectorA").prop('checked', true);
			$('#behavior').val('radioBased');
		}