//export object config particles bubble properties
export const configParticles = {
    background: {
        color: {
          value: "#001011",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#CACFD2",
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 2000,
          },
          value: 80,
        },
        opacity: {
          value: 0.4,
          blur: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
}