
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
						class="down breakdownSeer"></button>
					<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
						class="up breakdownSeer"></button>
				</div>
				<input type="button" class="buttony" id="swapNames" value="Swap">
				<input type="text" class="storable playerNames scoreBoard draft" id="pName2" placeholder="Player Two Name" />
				<input type="text" class="country storable scoreBoard" id="pCountry2" placeholder="Flag" />
				<div class="scoreSpinners regScore" id="scoreSpinner2">
					<input class="spinBoy storable scoreBoard" id="pScore2" type="number" name="value" value="0" min="0"
						readonly>
					<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
						class="down breakdownSeer"></button>
					<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
						class="up breakdownSeer"></button>
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
					<option value="spy">Generic</option>
				</select>
				<input type="button" class="buttony" id="clearRolls" value="Clear" />
				<input type="button" class="buttony" id="breakdownButton" value="Breakdown Toggle" />
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
var pScore1int;
var pScore2int;
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


		/*Broadcast channels for getting score from the scoreboard
		and sending it to the breakdown overlay when using score automation.*/

		const srbc = new BroadcastChannel('scoreReturn');
		const bdbtbc = new BroadcastChannel("BreakdownDraftToggle");


		srbc.onmessage = function (ev) {
			const received_data = ev.data;
			var { pScore1IntGC,pScore2IntGC } = received_data;
			pScore1int = pScore1IntGC;
			pScore2int = pScore2IntGC;

			scoreBreakdowner();
			breakdownVars = inputSaver('breakDraft');

				bdbc.postMessage({
					breakdownVars
				});


		}
		//Toggle button for showing/hiding the score breakdown overlay.
		$('#breakdownButton').on('click', function() {
			bdbtbc.postMessage('hello');
		});

		/* Replaces the generic PICK text in the score breakdown with the venue names 
		currently selected in the SCL Draft section of the controller. */
		setInterval(() => {
			if ($('#venue13').val() != "") {
				venue13Transfer = $('#venue13').val();
				tempArr = venue13Transfer.split(';');
				$('#venue13BreakdownName').html(tempArr[0].toUpperCase());
			}
			else if ($('#venue13').val() == "") {
				$('#venue13BreakdownName').html('PICK 1');
			}

			if ($('#venue23').val() != "") {
				venue23Transfer = $('#venue23').val();
				tempArr = venue23Transfer.split(';');
				$('#venue23BreakdownName').html(tempArr[0].toUpperCase());
			}
			else if ($('#venue23').val() == "") {
				$('#venue23BreakdownName').html('PICK 2');
			}

			if ($('#venue14').val() != "") {
				venue14Transfer = $('#venue14').val();
				tempArr = venue14Transfer.split(';');
				$('#venue14BreakdownName').html(tempArr[0].toUpperCase());
			}
			else if ($('#venue14').val() == "") {
				$('#venue14BreakdownName').html('PICK 3');
			}

			if ($('#venue24').val() != "") {
				venue24Transfer = $('#venue24').val();
				tempArr = venue24Transfer.split(';');
				$('#venue24BreakdownName').html(tempArr[0].toUpperCase());
			}
			else if ($('#venue24').val() == "") {
				$('#venue24BreakdownName').html('PICK 4');
			}

			if ($('#venue15').val() != "") {
				venue15Transfer = $('#venue15').val();
				tempArr = venue15Transfer.split(';');
				$('#venue15BreakdownName').html(tempArr[0].toUpperCase());
			}
			else if ($('#venue15').val() == "") {
				$('#venue15BreakdownName').html('PICK 5');
			}

			if ($('#venue25').val() != "") {
				venue25Transfer = $('#venue25').val();
				tempArr = venue25Transfer.split(';');
				$('#venue25BreakdownName').html(tempArr[0].toUpperCase());
			}
			else if ($('#venue25').val() == "") {
				$('#venue25BreakdownName').html('PICK 6');
			}

			if ($('#venue16').val() != "") {
				venue16Transfer = $('#venue16').val();
				tempArr = venue16Transfer.split(';');
				$('#venue16BreakdownName').html(tempArr[0].toUpperCase());
			}
			else if ($('#venue16').val() == "") {
				$('#venue16BreakdownName').html('PICK 7');
			}

			if ($('#venue26').val() != "") {
				venue26Transfer = $('#venue26').val();
				tempArr = venue26Transfer.split(';');
				$('#venue26BreakdownName').html(tempArr[0].toUpperCase());
			}
			else if ($('#venue26').val() == "") {
				$('#venue26BreakdownName').html('PICK 8');
			}

			
		}, 500);
		
		/* Two switch statements (one for normal matches, and one for the championship match) 
		that take in the current score and automatically distributes the points to the spin boxes 
		for the score breakdown overlay.  */
        function scoreBreakdowner() {

			if ($('#scorePaste').val() == "") {
				pScore1int = parseInt($('#pScore1').val());
				pScore2int = parseInt($('#pScore2').val());
			}

            pScoreTotal = 0;
            pScore11int = parseInt($('#pScore11').val());    
            pScore21int = parseInt($('#pScore21').val());
            pScore12int = parseInt($('#pScore12').val());    
            pScore22int = parseInt($('#pScore22').val());
            pScore13int = parseInt($('#pScore13').val());    
            pScore23int = parseInt($('#pScore23').val());
            pScore14int = parseInt($('#pScore14').val());    
            pScore24int = parseInt($('#pScore24').val());
			pScore15int = parseInt($('#pScore15').val());    
            pScore25int = parseInt($('#pScore25').val());
			pScore16int = parseInt($('#pScore16').val());    
            pScore26int = parseInt($('#pScore26').val());
			pScore17int = parseInt($('#pScore17').val());    
            pScore27int = parseInt($('#pScore27').val());
			pScore18int = parseInt($('#pScore18').val());    
            pScore28int = parseInt($('#pScore28').val());
            pScoreTotal = pScore1int + pScore2int;
			console.log(pScoreTotal);
			if ($('#matchType').val() != 'championship') {
				switch (pScoreTotal) {
					case 0:
						$('#pScore11').val(0);
						$('#pScore12').val(0);
						$('#pScore13').val(0);
						$('#pScore14').val(0);
						$('#pScore15').val(0);
						$('#pScore16').val(0);
						$('#pScore17').val(0);
						$('#pScore18').val(0);
						$('#pScore21').val(0);
						$('#pScore22').val(0);
						$('#pScore23').val(0);
						$('#pScore24').val(0);
						$('#pScore25').val(0);
						$('#pScore26').val(0);
						$('#pScore27').val(0);
						$('#pScore28').val(0);						
					case 1:
					case 2:
					case 3:
					case 4:
						$('#pScore11').val(pScore1int);
						$('#pScore21').val(pScore2int);
						$('#pScore12').val(0);
						$('#pScore22').val(0);
						$('#pScore13').val(0);
						$('#pScore23').val(0);   
						$('#pScore14').val(0);
						$('#pScore24').val(0);    
						$('#pScore15').val(0);
						$('#pScore25').val(0);
						$('#pScore16').val(0);
						$('#pScore26').val(0); 
						$('#pScore17').val(0);
						$('#pScore27').val(0); 
						$('#pScore18').val(0);
						$('#pScore28').val(0); 
						break;
					case 5:
					case 6:
					case 7:
					case 8:    
					$('#pScore12').val(pScore1int - pScore11int);
					$('#pScore22').val(pScore2int - pScore21int);  
					$('#pScore13').val(0);
					$('#pScore23').val(0);   
					$('#pScore14').val(0);
					$('#pScore24').val(0);    
					$('#pScore15').val(0);
					$('#pScore25').val(0);
					$('#pScore16').val(0);
					$('#pScore26').val(0); 
					$('#pScore17').val(0);
					$('#pScore27').val(0); 
					$('#pScore18').val(0);
					$('#pScore28').val(0);          
					break;
					case 9:
					case 10:    
						$('#pScore13').val(pScore1int - pScore11int - pScore12int);
						$('#pScore23').val(pScore2int - pScore21int  - pScore22int);     
						$('#pScore14').val(0);
						$('#pScore24').val(0);    
						$('#pScore15').val(0);
						$('#pScore25').val(0);
						$('#pScore16').val(0);
						$('#pScore26').val(0);  
						$('#pScore17').val(0);
						$('#pScore27').val(0); 
						$('#pScore18').val(0);
						$('#pScore28').val(0);   
							break;    
					case 11:
					case 12:    
						$('#pScore14').val(pScore1int - pScore11int - pScore12int - pScore13int);
						$('#pScore24').val(pScore2int - pScore21int  - pScore22int - pScore23int);            
						$('#pScore15').val(0);
						$('#pScore25').val(0);
						$('#pScore16').val(0);
						$('#pScore26').val(0);   
						$('#pScore17').val(0);
						$('#pScore27').val(0); 
						$('#pScore18').val(0);
						$('#pScore28').val(0);    
						break;	
					case 13:
					case 14:    
						$('#pScore15').val(pScore1int - pScore11int - pScore12int - pScore13int - pScore14int);
						$('#pScore25').val(pScore2int - pScore21int  - pScore22int - pScore23int - pScore24int);
						$('#pScore16').val(0);
						$('#pScore26').val(0);  
						$('#pScore17').val(0);
						$('#pScore27').val(0); 
						$('#pScore18').val(0);
						$('#pScore28').val(0);           
							break;		   
					case 15:
					case 16:    
						$('#pScore16').val(pScore1int - pScore11int - pScore12int - pScore13int - pScore14int - pScore15int);
						$('#pScore26').val(pScore2int - pScore21int  - pScore22int - pScore23int - pScore24int - pScore25int); 
						$('#pScore17').val(0);
						$('#pScore27').val(0); 
						$('#pScore18').val(0);
						$('#pScore28').val(0);               
							break;		     
					default:
						break;
				}
			} else 	if ($('#matchType').val() == 'championship') {
				switch (pScoreTotal) {
					case 0:
						$('#pScore11').val(0);
						$('#pScore12').val(0);
						$('#pScore13').val(0);
						$('#pScore14').val(0);
						$('#pScore15').val(0);
						$('#pScore16').val(0);
						$('#pScore17').val(0);
						$('#pScore18').val(0);
						$('#pScore21').val(0);
						$('#pScore22').val(0);
						$('#pScore23').val(0);
						$('#pScore24').val(0);
						$('#pScore25').val(0);
						$('#pScore26').val(0);
						$('#pScore27').val(0);
						$('#pScore28').val(0);	
	
					case 1:
					case 2:
					case 3:
					case 4:
						$('#pScore11').val(pScore1int);
						$('#pScore21').val(pScore2int);
						$('#pScore12').val(0);
						$('#pScore22').val(0);
						$('#pScore13').val(0);
						$('#pScore23').val(0);   
						$('#pScore14').val(0);
						$('#pScore24').val(0);    
						$('#pScore15').val(0);
						$('#pScore25').val(0);
						$('#pScore16').val(0);
						$('#pScore26').val(0); 
						$('#pScore17').val(0);
						$('#pScore27').val(0); 
						$('#pScore18').val(0);
						$('#pScore28').val(0); 
						break;
					case 5:
					case 6:
					case 7:
					case 8:    
					$('#pScore12').val(pScore1int - pScore11int);
					$('#pScore22').val(pScore2int - pScore21int);  
					$('#pScore13').val(0);
					$('#pScore23').val(0);   
					$('#pScore14').val(0);
					$('#pScore24').val(0);    
					$('#pScore15').val(0);
					$('#pScore25').val(0);
					$('#pScore16').val(0);
					$('#pScore26').val(0);  
					$('#pScore17').val(0);
					$('#pScore27').val(0); 
					$('#pScore18').val(0);
					$('#pScore28').val(0);         
					break;
					case 9:
					case 10:    
					case 11:
					case 12:    
						$('#pScore13').val(pScore1int - pScore11int - pScore12int);
						$('#pScore23').val(pScore2int - pScore21int  - pScore22int);     
						$('#pScore14').val(0);
						$('#pScore24').val(0);    
						$('#pScore15').val(0);
						$('#pScore25').val(0);
						$('#pScore16').val(0);
						$('#pScore26').val(0); 
						$('#pScore17').val(0);
						$('#pScore27').val(0); 
						$('#pScore18').val(0);
						$('#pScore28').val(0);    
							break;    
					case 13:
					case 14: 
					case 15:
					case 16:   
						$('#pScore14').val(pScore1int - pScore11int - pScore12int - pScore13int);
						$('#pScore24').val(pScore2int - pScore21int  - pScore22int - pScore23int);            
						$('#pScore15').val(0);
						$('#pScore25').val(0);
						$('#pScore16').val(0);
						$('#pScore26').val(0);  
						$('#pScore17').val(0);
						$('#pScore27').val(0); 
						$('#pScore18').val(0);
						$('#pScore28').val(0);     
						break;	
					case 17:
					case 18:    
						$('#pScore15').val(pScore1int - pScore11int - pScore12int - pScore13int - pScore14int);
						$('#pScore25').val(pScore2int - pScore21int  - pScore22int - pScore23int - pScore24int);
						$('#pScore16').val(0);
						$('#pScore26').val(0);   
						$('#pScore17').val(0);
						$('#pScore27').val(0); 
						$('#pScore18').val(0);
						$('#pScore28').val(0);          
							break;		   
					case 19:
					case 20:    
						$('#pScore16').val(pScore1int - pScore11int - pScore12int - pScore13int - pScore14int - pScore15int);
						$('#pScore26').val(pScore2int - pScore21int  - pScore22int - pScore23int - pScore24int - pScore25int);
						$('#pScore17').val(0);
						$('#pScore27').val(0); 
						$('#pScore18').val(0);
						$('#pScore28').val(0);             
							break;		
					case 21:
					case 22:    
							$('#pScore17').val(pScore1int - pScore11int - pScore12int - pScore13int - pScore14int - pScore15int - pScore16int);
							$('#pScore27').val(pScore2int - pScore21int  - pScore22int - pScore23int - pScore24int - pScore25int - pScore26int); 
							$('#pScore18').val(0);
							$('#pScore28').val(0);            
								break;
					case 23:
					case 24:    
						$('#pScore18').val(pScore1int - pScore11int - pScore12int - pScore13int - pScore14int - pScore15int - pScore16int - pScore17int);
						$('#pScore28').val(pScore2int - pScore21int  - pScore22int - pScore23int - pScore24int - pScore25int - pScore26int - pScore27int);            
							break;     
					default:
						break;
				}
			}
        }

		//Run score breakdown function any thime score up/down buttons are pressed.
		$('.breakdownSeer').on('click' , function() {
			scoreBreakdowner();
		});

        //Swap button for Players and Score Division.
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

		//Clear button for Players and Score Division.
		document.getElementById("blankNames").addEventListener("click", function () {
			$('#pName1').val('');
			$('#pCountry1').val('');
			$('#pScore1').val(0);
			$('#pName2').val('');
			$('#pCountry2').val('');
			$('#pScore2').val(0);
			$('#gameCounter').val('0');
			scoreBreakdowner();
		});

				//Clear button for Spy character.
		document.getElementById("clearRolls").addEventListener("click", function () {
			$('#Rolla').val('');
		});

		function namesClear() {
			$('#pName1').val('');
			$('#pName2').val('');
			$('#pScore1').val('0');
			$('#pScore2').val('0');
			$('#gameCounter').val('0');
			$('#pCountry1').val('');
			$('#pCountry2').val('');
		}