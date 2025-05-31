/*:
 * @plugindesc [Custom] Open the HUD Maker editor with a key (like "T"). 
 * @author ChatGPT
 *
 * @help
 * Press T during playtesting to open the HUD Maker editor.
 * 
 * Requires:
 * - SRD_SuperToolsEngine
 * - SRD_HUDMaker
 */

(function() {
    var alias_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        alias_update.call(this);
        if (Input.isTriggered('t')) {
            if (SceneManager._scene._hudMaker) {
                SceneManager._scene._hudMaker.open();
            }
        }
    };
})();
