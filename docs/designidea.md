<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PodCraft - Modern Studio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-dark: #1a1b1e;
            --surface: #25262b;
            --surface-light: #2c2e33;
            --accent: #ffae00; /* Amber Glow */
            --accent-dim: #946c00;
            --text-main: #e1e3e6;
            --text-muted: #a0a0a0;
            --shadow-light: rgba(255, 255, 255, 0.05);
            --shadow-dark: rgba(0, 0, 0, 0.4);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-dark);
            /* Subtle noise texture for that analog feel */
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)" opacity="0.03"/></svg>');
            color: var(--text-main);
            overflow-x: hidden;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        /* --- Header Section --- */
       /* --- NEW HERO CONSOLE STYLES --- */
.hero-wrapper {
    perspective: 1000px; /* Gives 3D depth */
    margin-bottom: 80px;
}

.hero-console {
    background: linear-gradient(145deg, #2a2c30, #1f2024);
    border-radius: 20px;
    padding: 15px; /* The bezel */
    box-shadow: 
        0 20px 50px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.1);
    border: 1px solid #000;
    position: relative;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr; /* Split: Screen on left, Controls on right */
    gap: 20px;
}

/* The "Screws" in the corners */
.hero-console::after, .hero-console::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, #111, #333);
    border-radius: 50%;
    box-shadow: 0 1px 0 rgba(255,255,255,0.1);
    z-index: 10;
}
.hero-console::before { top: 15px; left: 15px; }
.hero-console::after { top: 15px; right: 15px; }

/* --- LEFT SIDE: THE LCD SCREEN --- */
.console-screen {
    background: #111;
    border-radius: 10px;
    padding: 40px;
    position: relative;
    overflow: hidden;
    /* The "Glass" reflection */
    box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
    border: 2px solid #333;
    border-bottom: 2px solid #444;
}

/* Scanlines on the screen */
.console-screen::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
    z-index: 2;
}

.hero-title {
    font-family: 'DM Serif Display', serif;
    font-size: 3.5em;
    color: #e0e0e0;
    line-height: 1.1;
    margin-bottom: 20px;
    text-shadow: 0 0 10px rgba(255,255,255,0.1);
    position: relative;
    z-index: 3;
}

.hero-sub {
    font-family: 'Outfit', monospace; /* Tech font */
    color: var(--accent);
    font-size: 1.1em;
    letter-spacing: 1px;
    opacity: 0.9;
    margin-bottom: 30px;
    position: relative;
    z-index: 3;
}

/* --- RIGHT SIDE: THE ANALOG CONTROLS --- */
.console-controls {
    background: #222327;
    border-radius: 10px;
    padding: 20px;
    box-shadow: inset 2px 2px 10px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(255,255,255,0.02);
}

/* The VU Meter (Needle) */
.vu-meter {
    width: 100%;
    height: 120px;
    background: #e8e6e1; /* Off-white paper look */
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 0 15px rgba(0,0,0,0.2);
    margin-bottom: 20px;
}

.vu-glass {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%);
    z-index: 5;
}

.vu-scale {
    position: absolute;
    bottom: 0; left: 10%; width: 80%; height: 80%;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    border: 1px dashed #999;
    border-bottom: none;
}

.vu-needle {
    width: 2px;
    height: 90px;
    background: #d00;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform-origin: bottom center;
    transform: rotate(-45deg);
    animation: vu-bounce 0.4s infinite alternate ease-in-out;
    z-index: 2;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

@keyframes vu-bounce {
    0% { transform: rotate(-35deg); }
    20% { transform: rotate(-10deg); }
    40% { transform: rotate(-25deg); }
    60% { transform: rotate(15deg); }
    80% { transform: rotate(5deg); }
    100% { transform: rotate(25deg); }
}

/* The Big Record Button */
.rec-button-container {
    text-align: center;
    margin-top: auto;
}

.rec-btn {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #ff4444, #990000);
    border: none;
    box-shadow: 
        0 5px 10px rgba(0,0,0,0.5),
        0 0 0 4px #1a1a1a, /* Dark ring */
        0 0 0 5px #333;    /* Outer metal ring */
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
}

.rec-btn:active {
    transform: scale(0.95);
    background: radial-gradient(circle at 30% 30%, #cc0000, #800000);
    box-shadow: 
        0 2px 5px rgba(0,0,0,0.5),
        0 0 0 4px #1a1a1a,
        0 0 0 5px #333;
}

.rec-label {
    display: block;
    margin-top: 10px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.8em;
    color: #666;
    letter-spacing: 2px;
    font-weight: bold;
}

/* Responsive fix for mobile */
@media (max-width: 768px) {
    .hero-console {
        grid-template-columns: 1fr;
    }
    .vu-meter {
        height: 100px;
    }
}

        h1 {
            font-family: 'DM Serif Display', serif; /* Keeping a serif for the logo only */
            font-size: 4em;
            background: linear-gradient(to right, #ffffff, #a0a0a0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }

        .tagline {
            font-size: 1.2em;
            color: var(--accent);
            text-transform: uppercase;
            letter-spacing: 3px;
            font-weight: 600;
            opacity: 0.8;
        }

        /* --- The Recording Indicator --- */
        .status-panel {
            display: inline-flex;
            align-items: center;
            background: #111;
            padding: 8px 20px;
            border-radius: 50px;
            margin-top: 25px;
            box-shadow: inset 2px 2px 5px rgba(0,0,0,0.7), inset -1px -1px 2px rgba(255,255,255,0.1);
        }

        .led-indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ff4444;
            box-shadow: 0 0 10px #ff4444;
            animation: blink 2s infinite ease-in-out;
            margin-right: 10px;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; box-shadow: 0 0 15px #ff4444; }
            50% { opacity: 0.4; box-shadow: 0 0 2px #ff4444; }
        }

        /* --- Main Studio Deck --- */
        .studio-deck {
            position: relative;
            margin-bottom: 60px;
        }

        .studio-deck h2 {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 40px;
            font-weight: 300;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .feature-card {
            background: var(--surface);
            padding: 35px;
            border-radius: 20px;
            /* The "Soft" Card look */
            box-shadow: 
                -5px -5px 15px var(--shadow-light),
                5px 5px 15px var(--shadow-dark);
            border: 1px solid rgba(255,255,255,0.02);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 
                -8px -8px 20px var(--shadow-light),
                8px 8px 25px var(--shadow-dark);
        }

        /* Subtle glowing line on hover */
        .feature-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 4px; height: 100%;
            background: var(--accent);
            opacity: 0;
            transition: opacity 0.3s;
        }
        .feature-card:hover::before { opacity: 1; }

        .feature-icon {
            font-size: 2.5em;
            margin-bottom: 20px;
            display: inline-block;
            background: linear-gradient(145deg, #333, #222);
            width: 70px;
            height: 70px;
            line-height: 70px;
            text-align: center;
            border-radius: 15px;
            box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5), inset -1px -1px 2px rgba(255,255,255,0.1);
        }

        .feature-card h3 {
            font-size: 1.4em;
            margin-bottom: 10px;
            color: var(--text-main);
        }

        .feature-card p {
            color: var(--text-muted);
            font-size: 0.95em;
        }

        /* --- Microphone/CTA Section --- */
        .microphone-section {
            text-align: center;
            padding: 80px 20px;
            background: linear-gradient(180deg, var(--surface) 0%, var(--bg-dark) 100%);
            border-radius: 30px;
            border: 1px solid rgba(255,255,255,0.05);
            margin-bottom: 60px;
            position: relative;
        }

        .mic-wrapper {
            width: 120px;
            height: 120px;
            background: var(--surface);
            border-radius: 50%;
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4em;
            box-shadow: 
                inset 5px 5px 10px rgba(0,0,0,0.5), 
                inset -5px -5px 10px rgba(255,255,255,0.05),
                0 0 30px rgba(255, 174, 0, 0.1); /* Ambient glow */
        }

        .cta-button {
            display: inline-block;
            padding: 22px 60px;
            font-size: 1.2em;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #1a1b1e;
            background: var(--accent);
            border: none;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.1s;
            /* Physical Button Look */
            box-shadow: 
                0 6px 0 var(--accent-dim),
                0 15px 20px rgba(0,0,0,0.4);
            position: relative;
            top: 0;
        }

        .cta-button:hover {
            filter: brightness(1.1);
            box-shadow: 
                0 6px 0 var(--accent-dim),
                0 15px 25px rgba(255, 174, 0, 0.3);
        }

        .cta-button:active {
            top: 6px;
            box-shadow: 
                0 0 0 var(--accent-dim),
                inset 0 2px 5px rgba(0,0,0,0.2);
        }

        /* --- Pricing --- */
        .pricing-table {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin: 60px 0;
        }

        .price-card {
            background: var(--surface);
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.03);
            /* Soft shadow */
            box-shadow: 
                -5px -5px 15px var(--shadow-light),
                5px 5px 15px var(--shadow-dark);
            position: relative;
        }

        .price-card.featured {
            border: 1px solid var(--accent);
            box-shadow: 0 0 30px rgba(255, 174, 0, 0.1);
        }

        .price-card h3 {
            font-size: 1.5em;
            color: var(--text-muted);
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .price {
            font-size: 3.5em;
            font-weight: 700;
            color: var(--text-main);
            margin-bottom: 30px;
            text-shadow: 0 2px 5px rgba(0,0,0,0.5);
        }

        .price span {
            font-size: 0.3em;
            color: var(--text-muted);
            font-weight: 400;
        }

        .price-features {
            list-style: none;
            text-align: left;
            margin-bottom: 30px;
        }

        .price-features li {
            padding: 12px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            color: var(--text-muted);
            display: flex;
            align-items: center;
        }

        .price-features li::before {
            content: '';
            display: inline-block;
            width: 8px;
            height: 8px;
            background: var(--accent);
            border-radius: 50%;
            margin-right: 15px;
            box-shadow: 0 0 8px var(--accent);
        }

        .footer {
            text-align: center;
            padding: 40px;
            color: var(--text-muted);
            border-top: 1px solid rgba(255,255,255,0.05);
            margin-top: 60px;
        }

        /* Audio Visualizer Animation */
        .visualizer {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            height: 30px;
            gap: 3px;
            margin-bottom: 20px;
        }
        .bar {
            width: 4px;
            background: var(--accent);
            animation: equalize 1s infinite;
            border-radius: 2px;
        }
        @keyframes equalize {
            0% { height: 5px; opacity: 0.5; }
            50% { height: 25px; opacity: 1; }
            100% { height: 5px; opacity: 0.5; }
        }
        /* Stagger animations */
        .bar:nth-child(1) { animation-delay: 0.1s; }
        .bar:nth-child(2) { animation-delay: 0.3s; }
        .bar:nth-child(3) { animation-delay: 0.5s; }
        .bar:nth-child(4) { animation-delay: 0.2s; }
        .bar:nth-child(5) { animation-delay: 0.4s; }

    </style>
</head>
<body>
    <div class="container">
        <div class="hero-wrapper">
    <div class="hero-console">
        <!-- Left Side: The Digital Screen -->
        <div class="console-screen">
            <h1 class="hero-title">PodCraft<br>Studio.</h1>
            <p class="hero-sub">> INITIALIZING AUDIO ENGINE...<br>> READY TO RECORD.</p>
            
            <!-- A decorative progress bar -->
            <div style="width: 100%; height: 4px; background: #333; margin-top: 20px; border-radius: 2px;">
                <div style="width: 65%; height: 100%; background: var(--accent); box-shadow: 0 0 10px var(--accent);"></div>
            </div>
            
            <p style="margin-top: 20px; color: #888; font-size: 0.9em;">
                Professional grade audio processing right in your browser. No plugins required.
            </p>
        </div>

        <!-- Right Side: The Analog Controls -->
        <div class="console-controls">
            <!-- Decorative "screws" or model number -->
            <div style="width: 100%; display: flex; justify-content: space-between; margin-bottom: 10px; color: #444; font-size: 0.7em; font-family: monospace;">
                <span>MODEL: MK-II</span>
                <span>CH: 01</span>
            </div>

            <!-- The Bouncing Needle -->
            <div class="vu-meter">
                <div class="vu-glass"></div>
                <div class="vu-scale"></div>
                <div class="vu-needle"></div>
                <div style="position: absolute; bottom: 5px; width: 100%; text-align: center; color: #333; font-size: 0.6em; font-weight: bold; font-family: sans-serif;">VU</div>
            </div>

            <!-- The Big Button -->
            <div class="rec-button-container">
                <button class="rec-btn" onclick="startTrial()"></button>
                <span class="rec-label">REC / START</span>
            </div>
        </div>
    </div>
</div>

        <div class="studio-deck">
            <h2>The Virtual Console</h2>
            
            <div class="feature-grid">
                <div class="feature-card">
                    <span class="feature-icon">🎚️</span>
                    <h3>Analog Mixing</h3>
                    <p>Warm, vintage-style EQ and compression algorithms that give your voice a broadcast-ready tone immediately.</p>
                </div>
                
                <div class="feature-card">
                    <span class="feature-icon">📡</span>
                    <h3>Low-Latency Sync</h3>
                    <p>Connect with guests via our dedicated P2P server nodes. Zero drift, crystal clear 48kHz audio.</p>
                </div>
                
                <div class="feature-card">
                    <span class="feature-icon">⚡</span>
                    <h3>Silence Gate</h3>
                    <p>Smart AI noise gates that feel natural. Removes background hiss without clipping your words.</p>
                </div>
                
                <div class="feature-card">
                    <span class="feature-icon">📊</span>
                    <h3>Signal Analytics</h3>
                    <p>Real-time audience retention graphs visualized exactly like a frequency spectrum analyzer.</p>
                </div>
                
                <div class="feature-card">
                    <span class="feature-icon">📻</span>
                    <h3>Multi-Cast</h3>
                    <p>Push your signal to Spotify, Apple, and RSS feeds simultaneously with a single master fader.</p>
                </div>
                
                <div class="feature-card">
                    <span class="feature-icon">📼</span>
                    <h3>Tape Backup</h3>
                    <p>Redundant cloud storage that automatically versions your edits like a non-destructive tape reel.</p>
                </div>
            </div>
        </div>

        <div class="microphone-section">
            <div class="mic-wrapper">🎤</div>
            <h2 style="color: var(--text-main); margin-bottom: 15px;">Session Setup</h2>
            <p style="color: var(--text-muted); font-size: 1.1em; margin-bottom: 40px;">Initialize your workspace and start recording in seconds.</p>
            <button class="cta-button" onclick="startTrial()">Initialize Studio</button>
        </div>

        <h2 style="text-align: center; margin-bottom: 40px;">Studio Passes</h2>
        <div class="pricing-table">
            <div class="price-card">
                <h3>Bedroom</h3>
                <div class="price">$9<span>/mo</span></div>
                <ul class="price-features">
                    <li>5 hours recording</li>
                    <li>2-Track Mixing</li>
                    <li>Standard MP3 Export</li>
                </ul>
            </div>
            
            <div class="price-card featured">
                <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--accent); color: #000; padding: 2px 10px; font-size: 0.7em; font-weight: bold; border-radius: 4px;">RECOMMENDED</div>
                <h3>Broadcast</h3>
                <div class="price">$29<span>/mo</span></div>
                <ul class="price-features">
                    <li>Unlimited recording</li>
                    <li>Multi-Track Mixing</li>
                    <li>Lossless WAV Export</li>
                    <li>Noise Removal AI</li>
                </ul>
            </div>
            
            <div class="price-card">
                <h3>Network</h3>
                <div class="price">$99<span>/mo</span></div>
                <ul class="price-features">
                    <li>Team Collaboration</li>
                    <li>White-label Player</li>
                    <li>Priority Processing</li>
                    <li>API Access</li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <p>© 2026 PodCraft Studio. Engineered for fidelity.</p>
        </div>
    </div>

    <script>
        function startTrial() {
            // Simple animation on click
            const btn = document.querySelector('.cta-button');
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
                alert('⚡ SYSTEM INITIALIZED ⚡\n\nWelcome to the studio.');
            }, 100);
        }

        // Add subtle parallax effect on cards
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.feature-card');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            cards.forEach(card => {
                card.style.transform = `translate(-${x * 10}px, -${y * 10}px)`;
            });
        });
    </script>
</body>
</html>