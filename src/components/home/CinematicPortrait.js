import React from 'react';
import sideProfile from '../../assets/images/side-profile.png';

// The hero "photograph": a side profile looking into warm light that falls
// through ribbed glass. Pure CSS layers over one image, so it scales from the
// full-screen hero down to the laptop screen in the intro section.
export default function CinematicPortrait({ className = '', imageClassName = '' }) {
    return (
        <div className={`absolute inset-0 overflow-hidden bg-[#040404] ${className}`}>
            {/* Ribbed glass wall, only visible where light hits it */}
            <div
                className="absolute inset-0 fluted"
                style={{
                    opacity: 0.55,
                    WebkitMaskImage: 'linear-gradient(105deg, transparent 38%, #000 62%)',
                    maskImage: 'linear-gradient(105deg, transparent 38%, #000 62%)',
                }}
            />

            {/* Diagonal beam of light, broken up by the ribs */}
            <div className="absolute inset-0 fluted-mask">
                <div
                    className="absolute -top-[30%] right-[-30%] w-[95%] h-[160%] origin-center rotate-[24deg]"
                    style={{
                        background:
                            'linear-gradient(90deg, transparent 0%, rgba(255,228,200,0.0) 18%, rgba(255,222,190,0.62) 42%, rgba(255,170,110,0.45) 58%, rgba(200,121,79,0.18) 72%, transparent 88%)',
                        filter: 'blur(26px)',
                    }}
                />
            </div>

            {/* Warm glow where he is looking */}
            <div
                className="absolute top-[18%] left-[42%] w-[46%] h-[70%] rounded-full"
                style={{
                    background: 'radial-gradient(closest-side, rgba(232,120,52,0.55), rgba(200,90,40,0.18) 55%, transparent 100%)',
                    filter: 'blur(40px)',
                }}
            />

            {/* The portrait: "lighten" lets its black backdrop dissolve into the scene */}
            <img
                src={sideProfile}
                alt=""
                className={`absolute bottom-0 h-full w-auto max-w-none select-none ${imageClassName}`}
                style={{
                    mixBlendMode: 'lighten',
                    filter: 'sepia(0.28) saturate(1.15) contrast(1.08) brightness(0.98)',
                }}
                draggable="false"
            />

            {/* Cinematic falloff */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_45%,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
    );
}
