--[[
      OBS Studio Lua script : Hotkeys for the CleeControl Browser Dock
      Author: NoeAL
      Version: 0.2
      Released: 2020-09-28
--]]


local obs = obslua
local debug
local hk = {}
local pScore1Up = 0;
local pScore2Up = 0;
local gamesPlayedUp = 0;
local clearPlayers = 0;
local clearDraft = 0;
local clearCharacter = 0;
local clearTooltips = 0;
local clearDraftPaste = 0;
local clearScorePaste = 0;
local clearSpyPaste = 0;
local match1 = 0;
local match2 = 0;
local match3 = 0;
local bigUpdate = 0;




-- if you are extending the script, you can add more hotkeys here
-- then add actions in the 'onHotKey' function further below
local hotkeys = {
	P_1_Score_Up = "Player One Score Up",
	P_2_Score_Up = "Player Two Score Up",
	Clear_Player_Names = "Clear Players and Scores",
	Clear_Draft = "Clear Draft",
	Clear_Characters = "Clear Spy Character",
	Clear_Tooltips = "Clear Tooltips",
	match_1 = "Switch to Match 1",
	match_2 = "Switch to Match 2",
	match_3 = "Switch to Match 3",
	Big_Update = "Update All",

}

-- add any custom actions here
local function onHotKey(action)
	--obs.timer_remove(rotate)
	if debug then obs.script_log(obs.LOG_INFO, string.format("Hotkey : %s", action)) end

	if action == "P_1_Score_Up" then
		if pScore1Up == 0 then
			pScore1Up = 1
		else
			pScore1Up = 0
		end
		update_hotkeys_js()
	elseif action == "P_2_Score_Up" then
		if pScore2Up == 0 then
			pScore2Up = 1
	else
		pScore2Up = 0
	end
	update_hotkeys_js()
	elseif action == "Games_Played_Up" then
		if gamesPlayedUp == 0 then
		gamesPlayedUp = 1
	else
		gamesPlayedUp = 0
	end
	update_hotkeys_js()
	elseif action == "Clear_Player_Names" then
		if clearPlayers == 0 then
		clearPlayers = 1
	else
		clearPlayers = 0
	end
	update_hotkeys_js()
	elseif action == "Clear_Draft" then
		if clearDraft == 0 then
			clearDraft = 1
	else
		clearDraft = 0
	end
	update_hotkeys_js()
	elseif action == "Clear_Characters" then
		if clearCharacter == 0 then
			clearCharacter = 1
	else
		clearCharacter = 0
	end
	update_hotkeys_js()
	elseif action == "Clear_Tooltips" then
		if clearTooltips == 0 then
			clearTooltips = 1
	else
		clearTooltips = 0
	end
	update_hotkeys_js()
	elseif action == "Clear_Auto_Draft" then
		if clearDraftPaste == 0 then
			clearDraftPaste = 1
	else
		clearDraftPaste = 0
	end
	update_hotkeys_js()
	elseif action == "Clear_Score_Paste" then
		if clearScorePaste == 0 then
			clearScorePaste = 1
	else
		clearScorePaste = 0
	end
	update_hotkeys_js()
	elseif action == "Clear_Spy_Paste" then
	if clearSpyPaste == 0 then
		clearSpyPaste = 1
	else
		clearSpyPaste = 0
	end
	update_hotkeys_js()
elseif action == "match_1" then
	if match1 == 0 then
		match1 = 1
	else
		match1 = 0
	end
	update_hotkeys_js()
elseif action == "match_2" then
	if match2 == 0 then
		match2 = 1
	else
		match2 = 0
	end
	update_hotkeys_js()
elseif action == "match_3" then
	if match3 == 0 then
		match3 = 1
	else
		match3 = 0
	end
	update_hotkeys_js()
elseif action == "Big_Update" then
	if bigUpdate == 0 then
		bigUpdate = 1
	else
		bigUpdate = 0
	end
	update_hotkeys_js()
	end
	
end



-- write settings to js file
function update_hotkeys_js()
    local output = assert(io.open(script_path() .. 'js/hotkeys.js', "w"))
    output:write('pScore1Up = '.. pScore1Up .. ';\n')
	output:write('pScore2Up = '.. pScore2Up .. ';\n')
	output:write('gamesPlayedUp = '.. gamesPlayedUp .. ';\n')
	output:write('clearPlayers = '.. clearPlayers .. ';\n')
	output:write('clearDraft = '.. clearDraft .. ';\n')
	output:write('clearCharacter = '.. clearCharacter .. ';\n')
	output:write('clearTooltips = '.. clearTooltips .. ';\n')
	output:write('clearDraftPaste = '.. clearDraftPaste .. ';\n')
	output:write('clearScorePaste = '.. clearScorePaste .. ';\n')
	output:write('clearSpyPaste = '.. clearSpyPaste .. ';\n')
	output:write('match1 = '.. match1 .. ';\n')
	output:write('match2 = '.. match2 .. ';\n')
	output:write('match3 = '.. match3 .. ';\n')
	output:write('bigUpdate = '.. bigUpdate .. ';\n')
	output:close()
end

----------------------------------------------------------

-- called on startup
function script_load(settings)
	function pairsByKeys (t, f)
		local a = {}
		for n in pairs(t) do table.insert(a, n) end
		table.sort(a, f)
		local i = 0
		local iter = function ()
		  i = i + 1
		  if a[i] == nil then return nil
		  else return a[i], t[a[i]]
		  end
		end
		return iter
	end	

	for name, line in pairsByKeys(hotkeys) do
		hk[name] = obs.obs_hotkey_register_frontend(name, line, function(pressed) if pressed then onHotKey(name) end end)
		local hotkeyArray = obs.obs_data_get_array(settings, name)
		obs.obs_hotkey_load(hk[name], hotkeyArray)
		obs.obs_data_array_release(hotkeyArray)
	end	
	update_hotkeys_js()
end


-- called on unload
function script_unload()
end


-- called when settings changed
function script_update(settings)
	debug = obs.obs_data_get_bool(settings, "debug")
end


-- return description shown to user
function script_description()
	return "Hotkeys for the CleeControl Browser Dock"
end


-- define properties that user can change
function script_properties()
	local props = obs.obs_properties_create()
	obs.obs_properties_add_bool(props, "debug", "Debug")
	return props
end


-- set default values
function script_defaults(settings)
	obs.obs_data_set_default_bool(settings, "debug", false)
end


-- save additional data not set by user
function script_save(settings)
	for k, v in pairs(hotkeys) do
		local hotkeyArray = obs.obs_hotkey_save(hk[k])
		obs.obs_data_set_array(settings, k, hotkeyArray)
		obs.obs_data_array_release(hotkeyArray)
	end
end