document.addEventListener('DOMContentLoaded', () => {
    const gifScreen = document.getElementById('gif-screen');
    const lockScreen = document.getElementById('lock-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const desktop = document.getElementById('desktop');
    const passwordInput = document.getElementById('password-input');
    const unlockButton = document.getElementById('unlock-button');
    const startMenuIcon = document.getElementById('start-button');
    const startMenu = document.getElementById('start-menu');
    const closeButtons = document.querySelectorAll('.window-control.close');
    const startFileExplorer = document.getElementById('start-file-explorer');
    const fileExplorerWindow = document.getElementById('file-explorer-window');
    const startNotepad = document.getElementById('start-notepad');
    const notepadWindow = document.getElementById('notepad-window');
    const startCalendar = document.getElementById('start-calendar');
    const calendarWindow = document.getElementById('calendar-window');
    const dateDisplay = document.getElementById('date-display');
    const startCamera = document.getElementById('start-camera');
    const cameraWindow = document.getElementById('camera-window');
    const video = document.querySelector('video');
    const startBrowser = document.getElementById('start-browser');
    const browserWindow = document.getElementById('browser-window');
    const urlInput = document.getElementById('url-input');
    const goButton = document.getElementById('go-button');
    const browserFrame = document.getElementById('browser-frame');
    const startControlPanel = document.getElementById('start-control-panel');
    const controlPanelWindow = document.getElementById('control-panel-window');
    const saveSettingsButton = document.getElementById('save-settings-button');
    const startCommandPrompt = document.getElementById('start-command-prompt');
    const commandPromptWindow = document.getElementById('command-prompt-window');
    const commandInput = document.getElementById('command-input');
    const executeButton = document.getElementById('execute-button');
    const outputArea = document.getElementById('output-area');
    const startSetup = document.getElementById('start-setup');
    const setupWindow = document.getElementById('setup-window');
    const saveSetupButton = document.getElementById('save-setup-button');
    const startPaint = document.getElementById('start-paint');
    const paintWindow = document.getElementById('paint-window');

    // 最初のGIF画面の表示時間
    setTimeout(() => {
        gifScreen.style.display = 'none';
        lockScreen.style.display = 'flex';
    }, 3000); // 3秒表示

    // ロック画面の解除
    unlockButton.addEventListener('click', () => {
        const password = passwordInput.value;
        if (password === '1234') {
            lockScreen.style.display = 'none';
            loadingScreen.style.display = 'flex';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                desktop.style.display = 'block';
            }, 3000); // 3秒待機
        } else {
            alert('パスワードが違います');
        }
    });

    // スタートメニューの表示/非表示
    startMenuIcon.addEventListener('click', () => {
        startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
    });

    // ウィンドウを閉じる
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.closest('.window').style.display = 'none';
        });
    });

    // ファイルエクスプローラーを開く
    startFileExplorer.addEventListener('click', () => {
        fileExplorerWindow.style.display = 'block';
    });

    // メモ帳を開く
    startNotepad.addEventListener('click', () => {
        notepadWindow.style.display = 'block';
    });

    // カレンダーを開く
    startCalendar.addEventListener('click', () => {
        calendarWindow.style.display = 'block';
        dateDisplay.innerText = new Date().toLocaleDateString();
    });

    // カメラを開く
    startCamera.addEventListener('click', () => {
        cameraWindow.style.display = 'block';
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(err => {
                console.error('カメラのアクセスに失敗しました', err);
            });
    });

    // ブラウザを開く
    startBrowser.addEventListener('click', () => {
        browserWindow.style.display = 'block';
    });

    goButton.addEventListener('click', () => {
        const url = urlInput.value;
        browserFrame.src = url;
    });

    // コントロールパネルを開く
    startControlPanel.addEventListener('click', () => {
        controlPanelWindow.style.display = 'block';
    });

    saveSettingsButton.addEventListener('click', () => {
        // 設定保存の処理
        alert('設定が保存されました');
    });

    // コマンドプロンプトを開く
    startCommandPrompt.addEventListener('click', () => {
        commandPromptWindow.style.display = 'block';
    });

    executeButton.addEventListener('click', () => {
        const command = commandInput.value;
        // コマンド実行の処理
        outputArea.value += `> ${command}\n`;
        commandInput.value = '';
    });

    // セットアップを開く
    startSetup.addEventListener('click', () => {
        setupWindow.style.display = 'block';
    });

    saveSetupButton.addEventListener('click', () => {
        // セットアップの保存処理
        alert('セットアップが保存されました');
    });

    // ペイントを開く
    startPaint.addEventListener('click', () => {
        paintWindow.style.display = 'block';
    });

    // ドラッグ可能なウィンドウ
    const windows = document.querySelectorAll('.window');
    windows.forEach(win => {
        const header = win.querySelector('.window-header');
        header.addEventListener('mousedown', (e) => {
            const rect = win.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;

            function onMouseMove(e) {
                win.style.left = `${e.clientX - offsetX}px`;
                win.style.top = `${e.clientY - offsetY}px`;
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
});
