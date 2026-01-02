// Tailwind CSS configuration for Repomix Project
// This config is used with the Tailwind CDN via inline script in index.html

tailwind.config = {
    theme: {
        extend: {
            colors: {
                "primary": "#3B82F6", 
                "neu-base": "#E0E5EC",
                "neu-dark-shadow": "#A3B1C6",
                "neu-light-shadow": "#FFFFFF",
                "neu-text": "#4A5568",
                "neu-text-sub": "#A0AEC0",
            },
            boxShadow: {
                "neu-out": "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)",
                "neu-out-sm": "6px 6px 10px rgb(163,177,198,0.6), -6px -6px 10px rgba(255,255,255, 0.6)",
                "neu-in": "inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)",
                "neu-in-sm": "inset 3px 3px 6px 0 rgba(163,177,198, 0.7), inset -3px -3px 6px 0 rgba(255,255,255, 0.8)",
                "neu-pressed": "inset 4px 4px 8px 0 rgba(163,177,198, 0.7), inset -4px -4px 8px 0 rgba(255,255,255, 0.9)",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px"
            },
        },
    },
};

