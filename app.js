// Application data from JSON
const leetMappings = {
  "a": ["4", "@", "∆", "/-\\"],
  "b": ["8", "|3", "13", "|}", "β"],
  "c": ["<", "{", "[", "(", "©", "¢"],
  "d": ["|)", "[)", "|}", "|]"],
  "e": ["3", "&", "£", "€"],
  "f": ["7", "|=", "ph", "|#"],
  "g": ["6", "9", "[", "-"],
  "h": ["#", "4", "|-|", "[-]", "}{"],
  "i": ["1", "|", "!", "9"],
  "j": ["√", "_|", "_/", "_7"],
  "k": ["|<", "1<", "l<", "|{"],
  "l": ["|_", "|", "1", "]["],
  "m": ["44", "|\\/|", "^^", "/\\/\\"],
  "n": ["|\\|", "/\\/", "/V", "И"],
  "o": ["0", "()", "[]", "{}", "Ø"],
  "p": ["|o", "|O", "|>", "|*"],
  "q": ["O_", "(_,)", "0_"],
  "r": ["|2", "12", ".-", "®"],
  "s": ["5", "$", "§", "ş"],
  "t": ["7", "+", "†", "т"],
  "u": ["|_|", "(_)", "µ", "υ"],
  "v": ["\\/", "|/", "\\|"],
  "w": ["\\/\\/", "vv", "\\N", "ω"],
  "x": ["><", "}{", ")(", "×"],
  "y": ["`/", "¥", "\\|/", "ψ"],
  "z": ["2", "7_", "-/_", "ž"]
};

const glitchSubstitutions = [
  {"input": "hello", "outputs": ["BEEP BOOP", "POTATO", "ERROR 404", "TACO TUESDAY"]},
  {"input": "world", "outputs": ["UNIVERSE.EXE", "BANANA REALM", "THE VOID", "CHEESE DIMENSION"]},
  {"input": "computer", "outputs": ["MAGIC BOX", "BEEP MACHINE", "ELECTRONIC POTATO", "THINKING TOASTER"]},
  {"input": "internet", "outputs": ["SERIES OF TUBES", "DIGITAL HIGHWAY", "THE WEBS", "CYBER SPACE THING"]},
  {"input": "code", "outputs": ["DARK MAGIC", "FORBIDDEN SPELLS", "ROBOT LANGUAGE", "MATRIX STUFF"]},
  {"input": "hacker", "outputs": ["KEYBOARD WIZARD", "1337 MASTER", "DIGITAL NINJA", "CODE WHISPERER"]},
  {"input": "password", "outputs": ["SECRET SAUCE", "MAGIC WORDS", "OPEN SESAME", "ADMIN123"]},
  {"input": "data", "outputs": ["DIGITAL BREADCRUMBS", "CYBER DUST", "INFO NUGGETS", "BYTE SIZED SNACKS"]},
  {"input": "system", "outputs": ["THE MACHINE", "ROBOT OVERLORD", "DIGITAL ECOSYSTEM", "COMPUTER BRAIN"]},
  {"input": "error", "outputs": ["OOPSIE WOOPSIE", "BROKEN DREAMS", "DIGITAL SADNESS", "SYSTEM HICCUP"]}
];

const randomAsciiArt = [
  "  ¯\\_(ツ)_/¯",
  "(╯°□°）╯︵ ┻━┻",
  "ಠ_ಠ",
  "( ͡° ͜ʖ ͡°)",
  "┬─┬ノ( º _ ºノ)",
  "(╯°o°）╯︵ ┻━┻",
  "¯\\(°_o)/¯",
  "ლ(╹◡╹ლ)",
  "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  "┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻"
];

const funnyResponses = [
  "ENHANCING... COMPLETE",
  "HACKING THE MAINFRAME...",
  "ACCESSING THE GIBSON...",
  "BYPASSING THE FIREWALL...",
  "DOWNLOADING MORE RAM...",
  "COMPILING THE INTERNET...",
  "REVERSING THE POLARITY...",
  "TRIANGULATING THE COORDINATES...",
  "INITIATING QUANTUM FLUX...",
  "CALIBRATING THE FLUX CAPACITOR..."
];

// ASCII art patterns for different fonts
const asciiFonts = {
  standard: {
    'A': ['  █  ', ' █ █ ', '█████', '█   █', '█   █'],
    'B': ['████ ', '█   █', '████ ', '█   █', '████ '],
    'C': [' ████', '█    ', '█    ', '█    ', ' ████'],
    'D': ['████ ', '█   █', '█   █', '█   █', '████ '],
    'E': ['█████', '█    ', '███  ', '█    ', '█████'],
    'F': ['█████', '█    ', '███  ', '█    ', '█    '],
    'G': [' ████', '█    ', '█ ███', '█   █', ' ████'],
    'H': ['█   █', '█   █', '█████', '█   █', '█   █'],
    'I': ['█████', '  █  ', '  █  ', '  █  ', '█████'],
    'J': ['█████', '    █', '    █', '█   █', ' ████'],
    'K': ['█   █', '█  █ ', '███  ', '█  █ ', '█   █'],
    'L': ['█    ', '█    ', '█    ', '█    ', '█████'],
    'M': ['█   █', '██ ██', '█ █ █', '█   █', '█   █'],
    'N': ['█   █', '██  █', '█ █ █', '█  ██', '█   █'],
    'O': [' ███ ', '█   █', '█   █', '█   █', ' ███ '],
    'P': ['████ ', '█   █', '████ ', '█    ', '█    '],
    'Q': [' ███ ', '█   █', '█ █ █', '█  █ ', ' ██ █'],
    'R': ['████ ', '█   █', '████ ', '█  █ ', '█   █'],
    'S': [' ████', '█    ', ' ███ ', '    █', '████ '],
    'T': ['█████', '  █  ', '  █  ', '  █  ', '  █  '],
    'U': ['█   █', '█   █', '█   █', '█   █', ' ███ '],
    'V': ['█   █', '█   █', '█   █', ' █ █ ', '  █  '],
    'W': ['█   █', '█   █', '█ █ █', '██ ██', '█   █'],
    'X': ['█   █', ' █ █ ', '  █  ', ' █ █ ', '█   █'],
    'Y': ['█   █', ' █ █ ', '  █  ', '  █  ', '  █  '],
    'Z': ['█████', '   █ ', '  █  ', ' █   ', '█████'],
    '0': [' ███ ', '█  ██', '█ █ █', '██  █', ' ███ '],
    '1': ['  █  ', ' ██  ', '  █  ', '  █  ', '█████'],
    '2': [' ███ ', '█   █', '  ██ ', ' █   ', '█████'],
    '3': [' ███ ', '█   █', '  ██ ', '█   █', ' ███ '],
    '4': ['█   █', '█   █', '█████', '    █', '    █'],
    '5': ['█████', '█    ', '████ ', '    █', '████ '],
    '6': [' ███ ', '█    ', '████ ', '█   █', ' ███ '],
    '7': ['█████', '    █', '   █ ', '  █  ', ' █   '],
    '8': [' ███ ', '█   █', ' ███ ', '█   █', ' ███ '],
    '9': [' ███ ', '█   █', ' ████', '    █', ' ███ '],
    ' ': ['     ', '     ', '     ', '     ', '     ']
  },
  big: {
    'A': ['  ██████  ', ' ██    ██ ', '██      ██', '██████████', '██      ██', '██      ██'],
    'B': ['██████████', '██      ██', '██████████', '██████████', '██      ██', '██████████'],
    'C': [' █████████', '██        ', '██        ', '██        ', '██        ', ' █████████'],
    ' ': ['          ', '          ', '          ', '          ', '          ', '          ']
  },
  digital: {
    'A': [' ▄▀█ ', '█▀▀█', '█▄▄█', '▀  █', '  █ '],
    'B': ['█▀▀▄', '█▀▀▄', '█▄▄▀', '█▀▀▄', '█▄▄▀'],
    'C': [' ▄▀█▄', '█▄▄ ', '█   ', '█▄▄ ', ' ▀▀█▄'],
    ' ': ['     ', '     ', '     ', '     ', '     ']
  }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupTabNavigation();
    setupKeyboardShortcuts();
    displayLeetMapping();
    
    // Add real-time translation for traditional leet
    const leetInput = document.getElementById('leet-input');
    if (leetInput) {
        leetInput.addEventListener('input', translateLeet);
    }
    
    // Add real-time ASCII generation
    const asciiInput = document.getElementById('ascii-input');
    const asciiFont = document.getElementById('ascii-font');
    if (asciiInput) {
        asciiInput.addEventListener('input', generateAscii);
    }
    if (asciiFont) {
        asciiFont.addEventListener('change', generateAscii);
    }
    
    console.log('%c13375p34k Terminal Initialized', 'color: #00FF00; font-family: monospace; font-size: 14px;');
    console.log('%cType HELP for available commands', 'color: #FFFF00; font-family: monospace;');
}

// Improved Tab Navigation System
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.nav-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const targetTab = button.dataset.tab;
            switchTab(targetTab);
            playTerminalSound();
        });
        
        // Add mousedown for more responsive feedback
        button.addEventListener('mousedown', (e) => {
            e.preventDefault();
        });
    });
}

function switchTab(targetTab) {
    // Force synchronous update to prevent timing issues
    requestAnimationFrame(() => {
        // Remove active class from all tabs and panes immediately
        const allTabs = document.querySelectorAll('.nav-tab');
        const allPanes = document.querySelectorAll('.tab-pane');
        
        allTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        allPanes.forEach(pane => {
            pane.classList.remove('active');
            pane.style.display = 'none';
        });
        
        // Add active class to selected tab and pane
        const targetButton = document.querySelector(`[data-tab="${targetTab}"]`);
        const targetPane = document.getElementById(targetTab);
        
        if (targetButton && targetPane) {
            targetButton.classList.add('active');
            targetPane.classList.add('active');
            targetPane.style.display = 'block';
            
            // Add screen transition effect
            targetPane.style.animation = 'none';
            setTimeout(() => {
                targetPane.style.animation = 'fadeIn 0.3s ease-in-out';
            }, 10);
        }
    });
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Tab navigation with number keys
        if (e.ctrlKey) {
            switch(e.key) {
                case '1':
                    switchTab('leet-traditional');
                    e.preventDefault();
                    break;
                case '2':
                    switchTab('leet-glitch');
                    e.preventDefault();
                    break;
                case '3':
                    switchTab('ascii-traditional');
                    e.preventDefault();
                    break;
                case '4':
                    switchTab('ascii-glitch');
                    e.preventDefault();
                    break;
                case '5':
                    switchTab('help');
                    e.preventDefault();
                    break;
            }
        }
        
        // ESC to clear inputs
        if (e.key === 'Escape') {
            clearCurrentInput();
        }
    });
}

function clearCurrentInput() {
    const activeTab = document.querySelector('.tab-pane.active');
    if (activeTab) {
        const inputs = activeTab.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.value = '';
            input.dispatchEvent(new Event('input'));
        });
        playTerminalSound();
    }
}

// Traditional Leet Translator
function translateLeet() {
    const input = document.getElementById('leet-input').value.toLowerCase();
    const output = document.getElementById('leet-output');
    
    if (!input.trim()) {
        output.textContent = '';
        return;
    }
    
    let result = '';
    for (let char of input) {
        if (leetMappings[char]) {
            // Randomly select one of the available substitutions
            const substitutions = leetMappings[char];
            result += substitutions[Math.floor(Math.random() * substitutions.length)];
        } else {
            result += char;
        }
    }
    
    // Add terminal-style formatting
    const terminalOutput = `> Processing input: "${input}"\n> Leetspeak translation complete.\n> Output: ${result}`;
    output.textContent = terminalOutput;
    
    // Add processing animation
    output.classList.add('processing');
    setTimeout(() => {
        output.classList.remove('processing');
    }, 500);
}

// Glitch Leet Generator
function glitchLeet() {
    const input = document.getElementById('glitch-input').value.toLowerCase();
    const output = document.getElementById('glitch-output');
    
    if (!input.trim()) {
        output.textContent = 'ERROR: NO INPUT DETECTED\nSYSTEM CONFUSION LEVEL: MAXIMUM';
        return;
    }
    
    // Show loading with funny response
    const loadingMsg = funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
    output.textContent = loadingMsg;
    output.classList.add('processing');
    
    setTimeout(() => {
        let result = generateGlitchTranslation(input);
        
        // Special case for "hello world" easter egg
        if (input.includes('hello world')) {
            result = "GREETINGS, FELLOW HUMAN!\nI AM DEFINITELY NOT A ROBOT\nPLEASE INSERT COIN TO CONTINUE\n*MECHANICAL WHIRRING NOISES*";
        }
        
        const terminalOutput = `> GLITCH MATRIX ACCESSED\n> Input processed through broken algorithm\n> WARNING: TRANSLATION MAY CAUSE EXISTENTIAL CRISIS\n\n${result}`;
        output.textContent = terminalOutput;
        output.classList.remove('processing');
        
        // Add glitch effect
        triggerGlitchEffect(output);
    }, 1500);
}

function generateGlitchTranslation(input) {
    const words = input.split(' ');
    let result = [];
    
    words.forEach(word => {
        // Check for specific glitch substitutions
        const substitution = glitchSubstitutions.find(sub => sub.input === word);
        if (substitution) {
            result.push(substitution.outputs[Math.floor(Math.random() * substitution.outputs.length)]);
        } else {
            // Generate random glitchy transformation
            result.push(generateRandomGlitch(word));
        }
    });
    
    // Add some random chaos
    const chaos = ['!!!', '???', '...', 'ERROR', 'BEEP', 'BOOP', '*GLITCH*'];
    if (Math.random() > 0.7) {
        result.push(chaos[Math.floor(Math.random() * chaos.length)]);
    }
    
    return result.join(' ');
}

function generateRandomGlitch(word) {
    const glitchPatterns = [
        () => word.toUpperCase() + '.EXE',
        () => word.split('').reverse().join('') + '_V2',
        () => word.replace(/[aeiou]/g, 'X'),
        () => '???' + word + '???',
        () => word + '_ERROR_404',
        () => word.split('').join('-').toUpperCase(),
        () => 'INVALID_' + word.toUpperCase(),
        () => word + '.zip.exe.jpg'
    ];
    
    const pattern = glitchPatterns[Math.floor(Math.random() * glitchPatterns.length)];
    return pattern();
}

// Traditional ASCII Generator
function generateAscii() {
    const input = document.getElementById('ascii-input').value.toUpperCase();
    const font = document.getElementById('ascii-font').value;
    const output = document.getElementById('ascii-output');
    
    if (!input.trim()) {
        output.textContent = '';
        return;
    }
    
    // Limit input length for performance
    const limitedInput = input.substring(0, 10);
    const result = createAsciiArt(limitedInput, font);
    output.textContent = result;
}

function createAsciiArt(text, fontStyle = 'standard') {
    const font = asciiFonts[fontStyle] || asciiFonts.standard;
    const height = font.A ? font.A.length : 5;
    let result = [];
    
    // Initialize result array
    for (let i = 0; i < height; i++) {
        result[i] = '';
    }
    
    // Process each character
    for (let char of text) {
        const pattern = font[char] || font[' '];
        if (pattern) {
            for (let i = 0; i < height; i++) {
                result[i] += (pattern[i] || '     ') + ' ';
            }
        }
    }
    
    return result.join('\n');
}

// Glitch ASCII Generator
function glitchAscii() {
    const input = document.getElementById('ascii-glitch-input').value;
    const output = document.getElementById('ascii-glitch-output');
    
    if (!input.trim()) {
        output.textContent = 'NO INPUT = NO CHAOS\nPLEASE FEED THE GLITCH MACHINE';
        return;
    }
    
    // Show loading
    output.textContent = 'BREAKING ART PRINTER...\nPLEASE STAND BY...';
    output.classList.add('processing');
    
    setTimeout(() => {
        let result = generateGlitchAscii(input);
        output.textContent = result;
        output.classList.remove('processing');
        
        // Add glitch effect
        triggerGlitchEffect(output);
    }, 1000);
}

function generateGlitchAscii(input) {
    const glitchModes = [
        () => generateRandomSymbols(),
        () => generateBrokenText(input),
        () => getRandomAsciiArt(),
        () => generateCorruptedArt(input),
        () => generateMemeArt()
    ];
    
    const mode = glitchModes[Math.floor(Math.random() * glitchModes.length)];
    return mode();
}

function generateRandomSymbols() {
    const symbols = ['█', '▓', '▒', '░', '▄', '▀', '■', '□', '▲', '▼', '◆', '◇', '●', '○'];
    let result = '';
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 20; j++) {
            result += symbols[Math.floor(Math.random() * symbols.length)];
        }
        result += '\n';
    }
    
    return result;
}

function generateBrokenText(input) {
    let broken = `ATTEMPTING TO RENDER: "${input}"\n\n`;
    broken += '████ ERROR IN LINE 42 ████\n';
    broken += '░░▒▒▓▓██ CORRUPTED DATA ██▓▓▒▒░░\n';
    broken += '┌─ STACK OVERFLOW ─┐\n';
    broken += '│ SEGMENTATION FAULT │\n';
    broken += '│ PLEASE REBOOT     │\n';
    broken += '└─ AND TRY AGAIN   ─┘\n';
    return broken;
}

function getRandomAsciiArt() {
    return randomAsciiArt[Math.floor(Math.random() * randomAsciiArt.length)] + '\n\n' +
           'SYSTEM: ASCII ART RETRIEVED FROM CHAOS.DB\n' +
           'WARNING: ARTISTIC INTEGRITY NOT GUARANTEED';
}

function generateCorruptedArt(input) {
    let art = `RENDERING "${input.toUpperCase()}"...\n\n`;
    art += '██▓▓▓░░   ░░▓▓▓██\n';
    art += '█▓░ ERROR ERROR ░▓█\n';
    art += '▓░  PRINT DRIVER ░▓\n';
    art += '░   NOT FOUND    ░\n';
    art += '▓░ PLEASE INSERT ░▓\n';
    art += '█▓░ NEW TONER  ░▓█\n';
    art += '██▓▓▓░░   ░░▓▓▓██\n';
    return art;
}

function generateMemeArt() {
    const memes = [
        '    ┌─┐\n    ┴─┴\n    ಠ_ರೃ\n   <⌐■_■>\n    / \\\n   DEAL WITH IT',
        '       ▄▄▄▄▄▄▄\n     ▄█████████▄\n   ▄███████████▄\n ▄█████████████▄\n▄███████████████▄\n   SUCH WOW\n     VERY ASCII\n    MUCH GLITCH',
        '    ¯\\_(ツ)_/¯\n\n "404 ART NOT FOUND"\n\n Have you tried turning\n your creativity\n off and on again?'
    ];
    
    return memes[Math.floor(Math.random() * memes.length)];
}

// Display Leet Mapping Reference
function displayLeetMapping() {
    const mappingDisplay = document.getElementById('leet-mapping');
    if (!mappingDisplay) return;
    
    let html = '';
    Object.keys(leetMappings).forEach(letter => {
        const mappings = leetMappings[letter].join(' ');
        html += `<div class="mapping-item">${letter.toUpperCase()} → ${mappings}</div>`;
    });
    
    mappingDisplay.innerHTML = html;
}

// Copy to Clipboard Function
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent || element.innerText;
    
    if (!text.trim()) {
        showNotification('Nothing to copy!', 'error');
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
        playTerminalSound();
        
        // Visual feedback
        element.classList.add('processing');
        setTimeout(() => {
            element.classList.remove('processing');
        }, 300);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        showNotification('Copied to clipboard!', 'success');
    });
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #000;
        color: #00FF00;
        border: 2px solid #00FF00;
        padding: 12px 20px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 14px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    if (type === 'error') {
        notification.style.color = '#FF0000';
        notification.style.borderColor = '#FF0000';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

function triggerGlitchEffect(element) {
    element.classList.add('glitch-text');
    setTimeout(() => {
        element.classList.remove('glitch-text');
    }, 2000);
}

function playTerminalSound() {
    // Create a simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Audio not supported, fail silently
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Console Easter Eggs
setTimeout(() => {
    console.log('%c', 'font-size: 1px; padding: 20px 40px; background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjUwIiB5PSIyMCIgZmlsbD0iIzAwRkYwMCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+MTMzNzVwMzRrPC90ZXh0Pjwvc3ZnPg==") no-repeat;');
    console.log('%cYou found a console easter egg! 🎉\nTry these commands:\n- help()\n- matrix()\n- hack()', 'color: #00FF00; font-family: monospace;');
}, 2000);

// Console commands
window.help = () => {
    console.log('%cAvailable commands:\n- matrix() - Show digital rain\n- hack() - Activate hacker mode\n- clear() - Clear console', 'color: #FFFF00; font-family: monospace;');
};

window.matrix = () => {
    console.log('%c' + '01'.repeat(200), 'color: #00FF00; font-family: monospace; letter-spacing: 2px;');
    console.log('%cNeo... follow the white rabbit 🐰', 'color: #00FF00; font-family: monospace;');
};

window.hack = () => {
    console.log('%cACCESS GRANTED\nWelcome to the mainframe...\nYou have 1337 privileges', 'color: #00FF00; font-family: monospace; font-weight: bold;');
};