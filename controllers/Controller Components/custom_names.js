
class PlayersScores extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `

		<p class="titleBox">Names - Scores - Characters</p>
		<button class="accordion" id="accordionplayersPan">Expand</button>
		<div class="panel" id="playersPan">
			<div id="player1">
				<input type="text" class="storable playerNames scoreBoard draft" id="pName1" placeholder="Player One Name" />
				<input type="text" class="country storable scoreBoard" id="pCountry1" placeholder="Flag" />
				<div class="scoreSpinners regScore" id="scoreSpinner1">
					<input class="spinBoy storable scoreBoard" id="pScore1" type="number" name="value" value="0" min="0"
						readonly>
					<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
						class="down"></button>
					<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
						class="up"></button>
				</div>
				<input type="button" class="buttony" id="swapNames" value="Swap">
				<input type="text" class="storable playerNames scoreBoard draft" id="pName2" placeholder="Player Two Name" />
				<input type="text" class="country storable scoreBoard" id="pCountry2" placeholder="Flag" />
				<div class="scoreSpinners regScore" id="scoreSpinner2">
					<input class="spinBoy storable scoreBoard" id="pScore2" type="number" name="value" value="0" min="0"
						readonly>
					<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
						class="down"></button>
					<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
						class="up"></button>
				</div>
				<div class="scoreSpinners" id="gameCounterDiv">
					<input title="Game Counter. Used with Auto Score." class="spinBoy storable scoreBoard" type="number"
						id="gameCounter" type="number" name="value" value="0" min="0" readonly>
					<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
						class="down"></button>
					<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
						class="up"></button>
				</div>
				<input type="button" class="buttony" id="blankNames" value="Clear">

				<select class="storable scoreBoard" id="Rolla">
					<option value="" selected="selected">Spy Character</option>
					<option value="f">Alice</option>
					<option value="a">Andrew Ryan</option>
					<option value="n">Bling Twin</option>
					<option value="b">Boots</option>
					<option value="u">Duke</option>
					<option value="g">General</option>
					<option value="o">Irish</option>
					<option value="h">Oprah</option>
					<option value="t">Orange Sari</option>
					<option value="d">Papa Danger</option>
					<option value="e">Pearls</option>
					<option value="m">Plain Twin</option>
					<option value="j">Queen</option>
					<option value="l">Rocker</option>
					<option value="q">Salmon</option>
					<option value="k">Sikh</option>
					<option value="s">Smallman</option>
					<option value="c">Taft</option>
					<option value="r">Teal</option>
					<option value="p">Tex</option>
					<option value="i">Wheels</option>
				</select>
				<input type="button" class="buttony" id="clearRolls" value="Clear" />
			</div>
			<input type="text" class="storable2 banner" id="hostName" placeholder="Host Name">
			<input type="text" class="storable2 banner" id="casterNames" placeholder="Caster Names">
		</div>

		`;
	}
}

window.customElements.define('players-scores', PlayersScores);

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