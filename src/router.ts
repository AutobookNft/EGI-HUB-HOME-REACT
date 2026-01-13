import { useState, useEffect } from 'react';

// Simple Observer Pattern for Router
// This array holds all active 'setPath' functions from components using useLocation
const listeners: (() => void)[] = [];

// Helper to notify all listeners
const notify = () => {
    listeners.forEach(l => l());
};

export const useLocation = () => {
    // Initialize with current path
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        // Define the update function
        const handleChange = () => {
            console.log(`[Router] Path updated to: ${window.location.pathname}`);
            setPath(window.location.pathname);
        };

        // Register this component's update function
        listeners.push(handleChange);

        // Also listen to browser Back/Forward buttons
        window.addEventListener('popstate', handleChange);

        return () => {
            // Cleanup: remove from listeners array
            const index = listeners.indexOf(handleChange);
            if (index > -1) listeners.splice(index, 1);
            window.removeEventListener('popstate', handleChange);
        };
    }, []);

    return path;
};

export const navigate = (to: string) => {
    console.log(`[Router] Navigating to: ${to}`);
    // 1. Update Browser History (URL Bar)
    window.history.pushState({}, '', to);
    // 2. Notify all connected components (App.tsx)
    notify();
};
