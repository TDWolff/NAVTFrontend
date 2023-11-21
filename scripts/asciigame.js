document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('game-container');
    const rows = 20;
    const columns = 100; // Increased the game width to 100
    let playerPosition = { x: 0, y: 0 };
    let goalPosition = { x: columns - 1, y: rows - 1 };
    let obstacles = Array.from({length: 90}, () => {
        let position;
        do {
            position = {
                x: Math.floor(Math.random() * columns),
                y: Math.floor(Math.random() * rows)
            };
        } while (position.x === playerPosition.x && position.y === playerPosition.y);
        return position;
    });

    let enemies = Array.from({length: Math.min(15, columns)}, () => {
        let position;
        do {
            position = {
                x: Math.floor(Math.random() * columns),
                y: Math.floor(Math.random() * rows),
                direction: Math.random() > 0.5 ? 1 : -1
            };
        } while (position.x === playerPosition.x && position.y === playerPosition.y);
        return position;
    });

    // Initialize game grid
    const grid = Array.from(Array(rows), () => Array(columns).fill('.'));

    let wins = 0;

    function resetGame() {
        playerPosition = { x: 0, y: 0 };
        goalPosition = { x: columns - 1, y: rows - 1 };
        obstacles = Array.from({length: 20}, () => {
            let position;
            do {
                position = {
                    x: Math.floor(Math.random() * columns),
                    y: Math.floor(Math.random() * rows)
                };
            } while (position.x === playerPosition.x && position.y === playerPosition.y);
            return position;
        });
        enemies = Array.from({length: 5}, () => {
            let position;
            do {
                position = {
                    x: Math.floor(Math.random() * columns),
                    y: Math.floor(Math.random() * rows),
                    direction: Math.random() > 0.5 ? 1 : -1
                };
            } while (position.x === playerPosition.x && position.y === playerPosition.y);
            return position;
        });
        document.getElementById('win-streak').textContent = 'Win streak: ' + wins;
        renderGame();
    }


        // Function to render the game grid
    function renderGame() {
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < columns; x++) {
                if (x === playerPosition.x && y === playerPosition.y) {
                    grid[y][x] = '<span class="player">P</span>';
                } else if (x === goalPosition.x && y === goalPosition.y) {
                    grid[y][x] = '<span class="goal">G</span>';
                } else if (obstacles.some(obstacle => obstacle.x === x && obstacle.y === y)) {
                    grid[y][x] = '<span class="obstacle">O</span>';
                } else if (enemies.some(enemy => enemy.x === x && enemy.y === y)) {
                    grid[y][x] = '<span class="enemy">E</span>';
                } else {
                    grid[y][x] = '<span class="main">.</span>';
                }
            }
        }
        gameContainer.innerHTML = grid.map(row => row.join('')).join('<br>');
    }

    // Function to update enemy positions
    function moveEnemies() {
        for (let enemy of enemies) {
            let newX = enemy.x + enemy.direction;
            let newY = enemy.y;
            if (newX === 0) {
                enemy.x = columns - 1;
            } else if (newX === columns) {
                enemy.x = 0;
            } else if (obstacles.some(obstacle => obstacle.x === newX && obstacle.y === enemy.y)) {
                enemy.direction *= -1;
            } else {
                enemy.x = newX;
            }
            if (enemy.x === 0) {
                newY -= 1;
            } else if (enemy.x === columns - 1) {
                newY += 1;
            }
            enemy.y = Math.max(0, Math.min(rows - 1, newY));
        }
        renderGame();
    }

    // Function to update player position
    function movePlayer(direction) {
        let newPosition = { ...playerPosition };
        switch (direction) {
            case 'up':
                newPosition.y = Math.max(0, playerPosition.y - 1);
                break;
            case 'down':
                newPosition.y = Math.min(rows - 1, playerPosition.y + 1);
                break;
            case 'left':
                if (playerPosition.x === 0 && playerPosition.y === 0) {
                    // Prevent moving off the left edge of the top row
                    return;
                } else if (playerPosition.x === 0) {
                    newPosition.x = columns - 1;
                    newPosition.y = (playerPosition.y - 1 + rows) % rows;
                } else {
                    newPosition.x = playerPosition.x - 1;
                }
                break;
            case 'right':
                if (playerPosition.x === columns - 1) {
                    newPosition.x = 0;
                    newPosition.y = (playerPosition.y + 1) % rows;
                } else {
                    newPosition.x = playerPosition.x + 1;
                }
                break;
        }

        if (!obstacles.some(obstacle => obstacle.x === newPosition.x && obstacle.y === newPosition.y)) {
            playerPosition = newPosition;
        }

        if (playerPosition.x === goalPosition.x && playerPosition.y === goalPosition.y) {
            wins += 1;
            alert('You win!');
            resetGame();
        }
        
        if (enemies.some(enemy => enemy.x === playerPosition.x && enemy.y === playerPosition.y)) {
            alert('Game over!');
            resetGame();
        }
    }

    // Function to handle keyboard input
    function handleKeyPress(event) {
        const key = event.key.toLowerCase();
        if (['w', 'a', 's', 'd'].includes(key)) {
            movePlayer(key === 'w' ? 'up' : key === 'a' ? 'left' : key === 's' ? 'down' : 'right');
            renderGame();
        }
    }

    // Set up keyboard event listener
    document.addEventListener('keydown', handleKeyPress);

    // Initial rendering
    renderGame();

    // Start moving enemies
    setInterval(moveEnemies, 1000);
});