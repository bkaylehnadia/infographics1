
/* DoorDash Motion Infographic
   GSAP Animation - Continuous Loop
*/

window.onload = function () {

    // Create the three animation timelines
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();

    // SCOOTER ANIMATION
    tl.from(".scooter", {
        opacity: 0
    })
    .to(".scooter", {
        duration: 3,
        x: -300
    })
    .to(".scooter", {
        x: -200,
        duration: 2
    })
    .to(".scooter", {
        x: -3000,
        duration: 2
    });

    // TEXT ENTRANCE
    tl2.from(".text1", {
        x: -900,
        delay: 2,
        ease: "power1.out"
    })
    .to(".text1", {
        delay: 2,
        x: 400,
        opacity: 0
    });

    tl2.from(".text1", {
        x: -900,
        delay: 2,
        ease: "power1.out"
    })
    .to(".text1", {
        delay: 2,
        x: 400,
        opacity: 0
    });

    tl3.from(".text2", {
        x: 900,
        delay: 2,
        ease: "power1.out"
    })
    .to(".text2", {
        delay: 2,
        x: -400,
        opacity: 0
    });

    // BUTTON ANIMATION
    tl3.from(".btn", {
        scale: 0,
        duration: 2,
        ease: "elastic.out(1,0.3)"
    })
    .to(".btn", {
        x: -700,
        delay: 1
    });

    // RED BACKGROUND
    tl.from(".red", {
        x: -1000,
        opacity: 0
    })
    .to(".red", {
        opacity: 1
    });

    // PHONE ANIMATION
    tl.from(".phone", {
        y: 1000,
        opacity: 0
    })
    .to(".phone", {
        opacity: 1
    });

    // FOOD ANIMATIONS
    tl.from(".burger", {
        ease: "expo.out",
        x: -500
    });

    tl.from(".sushi", {
        ease: "expo.out",
        x: -500
    });

    tl.from(".thai", {
        ease: "expo.out",
        x: -500
    });

    // TEXT ANIMATIONS
    tl.from(".text3", {
        ease: "back.out(1.7)",
        y: -500
    });

    tl.from(".text4", {
        ease: "back.out(1.7)",
        x: -500
    });

    tl.from(".text5", {
        ease: "bounce.out",
        scale: 0
    });

    // WHITE BACKGROUND TRANSITION
    tl.from(".white2", {
        x: -1000,
        opacity: 0,
        delay: 2
    })
    .to(".white2", {
        opacity: 1
    });

    // FINAL LOGO ANIMATION
    tl.from(".final", {
        opacity: 0
    })
    .to(".final", {
        opacity: 1,
        rotation: 360,
        duration: 1,
        ease: "back.out(1.7)"
    })
    .to(".final", {
        x: 900,
        delay: 1.4
    });

    // MASTER LOOP
    // Synchronize all three timelines
    const master = gsap.timeline({
        repeat: -1,
        repeatDelay: 2
    });

    master.add(tl, 0);
    master.add(tl2, 0);
    master.add(tl3, 0);

};
