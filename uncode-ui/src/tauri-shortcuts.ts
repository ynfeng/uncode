import hotkeys from 'hotkeys-js';
import TauriBridge from './tauri-bridge';

const TauriShortcuts = {
  init() {
    hotkeys('f5', function (event, handler) {
      event.preventDefault();
      return false;
    });

    hotkeys('ctrl+o, command+o', function () {
      TauriBridge.openDialog();
      return false;
    });
  },
};

export default TauriShortcuts;
