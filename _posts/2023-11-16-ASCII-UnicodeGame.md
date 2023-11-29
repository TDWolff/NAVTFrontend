---
toc: True
comments: True
title: ASCII Game
description: An ASCII Game
courses: {'compsci': {'week': 13}}
type: hacks
permalink: /basics/ascii
---
{% include nav-warmup.html %}
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ASCII Game</title>
    <p id="win-streak">Win streak: 0</p>
    <style>
        .enemy {
            color: #8B0000;
        }
        .main {
            color: #ADD8E6;
        }
        .obstacle {
            color: #8B8000;
        }
        .player{
            color: #ADD8E6;
        }
        .goal{
            color: green;
        }
        {
            font-family: 'Courier New', monospace;
            white-space: pre;
        }
    </style>
</head>
<body>
    <div id="game-container"></div>
    <script src="{{site.baseurl}}/scripts/asciigame.js"></script>
</body>
</html>
