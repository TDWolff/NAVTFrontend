document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('game-container');
    const rows = 10;
    const columns = 20;
    let playerPosition = { x: 0, y: 0 };
  
    // Initialize game grid
    const grid = Array.from(Array(rows), () => Array(columns).fill('.'));
  
    // Function to render the game grid
    function renderGame() {
      gameContainer.textContent = grid.map(row => row.join('')).join('\n');
    }
  
    // Function to update player position
    function movePlayer(direction) {
      switch (direction) {
        case 'up':
          playerPosition.y = Math.max(0, playerPosition.y - 1);
          break;
        case 'down':
          playerPosition.y = Math.min(rows - 1, playerPosition.y + 1);
          break;
        case 'left':
          playerPosition.x = Math.max(0, playerPosition.x - 1);
          break;
        case 'right':
          playerPosition.x = Math.min(columns - 1, playerPosition.x + 1);
          break;
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
  });
  