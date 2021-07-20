class ToolTips extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <p class="titleBox">Tooltips</p>
        <button class="accordion" id="accordiontooltipsPan">Expand</button>
        <div class="panel" id="tooltipsPan">
            <div id="flexTips">
                <label for="cTipName" id="custom">Custom Tooltips</label>
                <label for="tText" id="premade">Premade Tooltips</label>
                <input class="storable tooltips" title="This is a tooltip about tooltips" type="text" id="cTipName"
                    placeholder="Title">
                <select class="storable tooltips"
                    title="Will not drop for the same selection twice in a row (select Reset/Blank and then update if you want to get around that)."
                    id="tText">
                    <option value="">Reset/Blank</option>
                    <option value="BananaBread (BB);This is the code phrase the spy uses to contact the  agent.">BB
                    </option>
                    <option
                        value="Ambassador (Amba);The ambassador is known to the sniper and is important in the “fingerprint” and “bug ambassador” missions.">
                        Amba</option>
                    <option
                        value="Bug the Ambassador (bug);A mission that requires the spy to stand close to the ambassador to plant a bug onto their body. Skilled spies can plant bugs while walking past the ambassador.">
                        Bug</option>
                    <option
                        value="Reverse Drive-by Bug;Instead of the spy walking past and bugging on a stationary Ambassador, the spy stands still and plants the bug while the ambassador walks by.">
                        Reverse Drive-by</option>
                    <option
                        value="Seduction Target (ST); A cast member which the spy must flirt with to complete a mission. Their identity is unknown to the sniper.">
                        Seduction Target</option>
                    <option
                        value="Double Agent;A cast member the spy contacts to complete a mission. The sniper may see multiple Suspected Double Agents, or none at all.">
                        Double Agent</option>
                    <option
                        value="Hard Tell;An action only the spy can perform which can confirm their identity to the sniper. Some missions require hard tells.">
                        Hard Tell</option>
                    <option
                        value="Soft Tell;An action that any AI and the spy can perform. If the sniper sees a character perform a lot of soft tells, they may suspect that they are the spy.">
                        Soft Tell</option>
                    <option
                        value="Purloin the Guest List;A mission where the spy needs to steal the guest list from Toby, the waiter. The guest list may be located on Toby's tray or in his pocket at the bar.">
                        Purloin</option>
                    <option
                        value="Time Add;Spies can go to any window pad and add 45 seconds to the game clock by checking their watch. Spies and AI can also check their watch without adding time.">
                        Time Add</option>
                    <option
                        value="Overtime;If the spy completes a mission in the last seconds, the game will go into overtime. If mission is pending, the clock will hang at 00:00 till it's completed.">
                        Overtime</option>
                </select>
                <textarea class="storable tooltips"
                    title="Tooltip will not appear if descrition is blank (enter a single space if you want a descriptionless tooltip). Will also not drop for the same Description twice in a row."
                    id="cTipDesc" placeholder="Description"></textarea>
            </div>
            <input type="button" class="buttony" id="clearTooltips" value="Clear" />
        </div>
        `
    }
}

window.customElements.define('tool-tips', ToolTips);

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