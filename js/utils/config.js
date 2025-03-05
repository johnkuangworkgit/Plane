/**
 * Configuration constants for the game
 */

export const NETWORK = {
    // WebSocket server URL
    // Use this constant whenever you need to connect to the WebSocket server
    WS_URL: 'ws://plane-zp6f.onrender.com:8080',
    
    // Function to get WebSocket URL with protocol based on page security
    getSecureWsUrl: () => {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        return `${protocol}//plane-zp6f.onrender.com:8080`;
    }
};

// Export other config constants as needed
export const GAME = {
    // Game configuration constants can be added here
}; 