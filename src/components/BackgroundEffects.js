import React from 'react';

export default function BackgroundEffects() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Primary gradient orb — reduced blur + GPU-promoted */}
            <div
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[80px]"
                style={{
                    background: 'var(--color-primary)',
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                }}
            />
            {/* Accent gradient orb */}
            <div
                className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[60px]"
                style={{
                    background: 'var(--color-accent)',
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                }}
            />
            {/* Subtle dot grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(var(--color-typography) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                }}
            />
        </div>
    );
}
