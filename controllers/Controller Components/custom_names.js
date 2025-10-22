
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