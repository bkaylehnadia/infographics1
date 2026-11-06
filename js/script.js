    // nadiabkayleh 
    // doordash

    function startNextMotionGraphic(){
        window.parent.postMessage("complete", '*');
    }
    window.onload = function() {
        let tl = gsap.timeline();
        let tl2 = gsap.timeline();
        let tl3 = gsap.timeline();


        //start with scooter animation
        tl.from(".scooter", { 

            opacity: 0, 
            })

        .to(".scooter", { 
            duration: 3, 
            x: -300
        });


        tl.to(".scooter", { 
            x: -200, 
            duration: 2 
        })
    .pause(1) // Pause ani
    .to(".scooter", { 
        x: -3000, 
        duration: 2
    }) 
    .resume(); // Resume 

    //text entrance

    tl2.from(".text1",{
        x:-900,
        delay: 2,
        ease: "power1.out",
    })
    .to(".text1", { 
        delay:2, 
        x:400,
        opacity:0
    }) 

    tl2.from(".text1",{
        x:-900,
        delay: 2,
        ease: "power1.out",
    })
    .to(".text1", { 
        delay:2, 
        x:400,
        opacity:0
    }) 
    tl3.from(".text2",{
        x:900,
        delay: 2,
        ease: "power1.out",
    })
    .to(".text2", { 
        delay:2, 
        x:-400,
        opacity:0
    }) 

    tl3.from(".btn", {
        scale:0,
        duration:2,
        ease: "elastic.out(1,0.3)",
    })

    .to(".btn",{
        x:-700,
        delay:1
    })

    tl.from(".red", {
        x:-1000,
        opacity:0
      })

    //new scene

    .to(".red",{
        opacity:1
    })

    tl.from(".phone", {
        y:1000,
        opacity:0
      })

    .to(".phone",{
        opacity:1
    })

    tl.from(".burger", {
        ease: "expo.out",
        x: -500, 
    });

    tl.from(".sushi", {
        ease: "expo.out",
        x: -500,
    })
    tl.from(".thai", {
        ease: "expo.out",
        x: -500, 
    });
    tl.from(".text3", {
        ease: "back.out(1.7)",
        y: -500, 
    });
    tl.from(".text4", {
        ease: "back.out(1.7)",
        x: -500, 
    });
    tl.from(".text5", {
        ease: "bounce.out", 
        scale: 0
    });

    tl.from(".white2", {
        x:-1000,
        opacity:0,
        delay:2
      })

    //new scene

    .to(".white2",{
        opacity:1
        
    })
    
    tl.from('.final', {
        opacity:0
      })

    .to('.final', {
        opacity: 1,

        rotation: 360, 
        duration: 1,
        ease: "back.out(1.7)",
    })

    .to('.final ', {
       x:900,
        delay: 1.4
    })
    }
