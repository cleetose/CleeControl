
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