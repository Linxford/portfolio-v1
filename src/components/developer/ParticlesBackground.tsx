import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { useThemeStore } from '../../store/themeStore';

export default function ParticlesBackground() {
    const { isDark } = useThemeStore();

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: 'transparent',
                    },
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: isDark ? '#ffffff' : '#000000'
                    },
                    links: {
                        color: isDark ? '#ffffff' : '#000000',
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1
                    },
                    move: {
                        enable: true,
                        direction: "none",
                        outModes: {
                            default: "bounce"
                        },
                        random: false,
                        speed: 2,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 50
                    },
                    opacity: {
                        value: 0.2
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: { min: 1, max: 3 }
                    }
                },
                detectRetina: true
            }}
            className="absolute inset-0 -z-10"
        />
    );
}
