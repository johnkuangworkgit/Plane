/**
 * Configuration constants for the game
 */

export const NETWORK = {
    // Server domain configuration
    SERVER_DOMAIN: 'plane-zp6f.onrender.com',
    SERVER_PORT: 8080,
    
    // WebSocket server URL
    get WS_URL() {
        return `ws://${this.SERVER_DOMAIN}:${this.SERVER_PORT}`;
    },
    
    // Function to get WebSocket URL with protocol based on page security
    getSecureWsUrl: function() {
        const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        return `${protocol}//${this.SERVER_DOMAIN}:${this.SERVER_PORT}`;
    }
};

// Export other config constants as needed
export const GAME = {
    // Game configuration constants can be added here
}; 