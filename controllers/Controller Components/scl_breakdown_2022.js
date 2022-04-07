
class breakdownScores extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
		<p class="titleBox">Score Breakdown</p>
		<button class="accordion" id="accordionbreakdownPan">Expand</button>
		<div class='panel' id="breakdownPan">
		<div id="playerNamesBreakdown">
		<p id='pName1Breakdown'>Player 1</p>
		<p id='pName2Breakdown'>Player 2</p>
		</div>
		<div id="flexFlex">
		<div class="flexdown" id="flexdownTop">
			<div class="scoreSpinners" id="breakdownSpinner1">
			<input class="spinBoy storable breakDraft" id="pScore11" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner2">
			<input class="spinBoy storable breakDraft" id="pScore12" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner3">
			<input class="spinBoy storable breakDraft" id="pScore13" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner4">
			<input class="spinBoy storable breakDraft" id="pScore14" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner5">
			<input class="spinBoy storable breakDraft" id="pScore15" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner6">
			<input class="spinBoy storable breakDraft" id="pScore16" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner7">
			<input class="spinBoy storable breakDraft" id="pScore17" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner8">
			<input class="spinBoy storable breakDraft" id="pScore18" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
		</div>
		<div class="flexdown" id="flexText">
		<p id="venue13BreakdownName">Aquarium</p>
		<p id="venue23BreakdownName">High-Rise</p>
		<p id="venue14BreakdownName">Courtyard</p>
		<p id="venue24BreakdownName">Veranda</p>
		<p id="venue15BreakdownName">Library</p>
		<p id="venue25BreakdownName">Redwoods</p>
		<p id="venue16BreakdownName">Courtyard</p>
		<p id="venue26BreakdownName">Gallery</p>
		</div>
		<div class="flexdown">
			<div class="scoreSpinners" id="breakdownSpinner9">
			<input class="spinBoy storable breakDraft" id="pScore21" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner10">
			<input class="spinBoy storable breakDraft" id="pScore22" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner11">
			<input class="spinBoy storable breakDraft" id="pScore23" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner12">
			<input class="spinBoy storable breakDraft" id="pScore24" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner13">
			<input class="spinBoy storable breakDraft" id="pScore25" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner14">
			<input class="spinBoy storable breakDraft" id="pScore26" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner15">
			<input class="spinBoy storable breakDraft" id="pScore27" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
			<div class="scoreSpinners" id="breakdownSpinner16">
			<input class="spinBoy storable breakDraft" id="pScore28" type="number" name="value" value="0" min="0"
				readonly>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
				class="down"></button>
			<button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
				class="up"></button>
			</div>
		</div>  
		</div>  
		</div>
 
		`;
	}
}

window.customElements.define('breakdown-scores', breakdownScores);

