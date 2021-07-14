class ColorChanger extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <p class="titleBox">Custom Colors</p>
        <button class="accordion" id="accordioncolorsPan">Expand</button>
        <div class="panel" id="colorsPan">
            <div id="colorPickers">
                <form>
                    <p class="colorNames">Left Colors &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        Right Colors</p>
                    <div class="cPicker" id="colorpickerA"></div>
                    <div class="cPicker" id="colorpickerB"></div>
                    <input class="storable2 colorText" type="text" id="colorA" name="colorA" value="#123456" />
                    <input class="storable2 colorText" type="text" id="colorB" name="colorB" value="#123456" />
                    <p class="colorNames">Left Text Color&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Right Text Color
                    </p>
                    <div class="cPicker" id="colorpickerC"></div>
                    <div class="cPicker" id="colorpickerD"></div>
                    <input class="storable2 colorText" type="text" id="colorC" name="colorC" value="#ffffff" />
                    <input class="storable2 colorText" type="text" id="colorD" name="colorD" value="#ffffff" />
                    <p class="colorNames">Divider Color</p>
                    <div class="cPicker" id="colorpickerE"></div>
                    <input class="storable2 colorText" type="text" id="colorE" name="colorE" value="#123456" />
                    <label id="selectImgText" for="img">Middle image:</label>
                    <input class="storable2" type="text" id="img"
                        title="Enter image name and extension. Image needs to be in the images folder." name="img">
                    <input type="reset" id="resetColors" class="buttony">
                </form>
            </div>
        </div>
        `
    }
}

window.customElements.define('color-changer', ColorChanger);

var colorA;
var colorB;
var colorC;
var colorD;
var colorE;
var middleImage;

$(document).ready(function() {
    $('#colorpickerA').farbtastic('#colorA');
    $('#colorpickerB').farbtastic('#colorB');
    $('#colorpickerC').farbtastic('#colorC');
    $('#colorpickerD').farbtastic('#colorD');
    $('#colorpickerE').farbtastic('#colorE');
})