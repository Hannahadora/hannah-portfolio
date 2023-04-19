import gsap from "gsap";

const modalEaseInAndOut = (modalRef, isOpen) => {
    if (isOpen) {
        gsap.fromTo(modalRef.current, {
            x: '-100%',
            opacity: 0,
        }, {
            duration: 0.5,
            x: 0,
            opacity: 1,
            ease: 'slow(0.5, 0.5, false)',
        });
    } else {
        gsap.to(modalRef.current, {
            duration: 0.5,
            x: '-100%',
            opacity: 0,
            ease: 'slow(0.5, 0.5, false)',
        });
    }
}

const easeIn = (ref) => {
    gsap.fromTo(ref.current, {
        x: '-100%',
        opacity: 0,
    }, {
        duration: 0.8,
        x: 0,
        opacity: 1,
        ease: 'slow(0.7, 0.7, false)',
    });
}

const slideDown = (ref) => {
    gsap.fromTo(ref.current, {
        y: '-100%',
        opacity: 0,
    }, {
        duration: 0.9,
        y: 0,
        opacity: 1,
        ease: 'slow(0.7, 0.7, false)',
    });
}
const zoomOut = (ref, duration) => {
    gsap.fromTo(ref.current,
        { duration: duration, scale: 0.2, opacity: 0 },
        { duration: duration, scale: 1, opacity: 1 }
    );
}
const slideDownAndZoomOut = (ref) => {
    gsap.fromTo(ref.current, {
        y: '-100%',
        opacity: 0,
        scale: 0.2
    }, {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: 'slow(0.7, 0.7, false)',
        scale: 1
    });
}
const ZoomInAndSlideUp = (ref) => {
    gsap.fromTo(ref.current, {
        y: 0,
        opacity: 1,
        scale: 1
    }, {
        duration: 1.5,
        y: '-100%',
        opacity: 0,
        ease: 'slow(0.7, 0.7, false)',
        scale: 0.2
    });
}


const spinningCircle = (ref) => {
    gsap.to(ref, {
        duration: 2,
        rotate: 360,
        repeat: -1,
        ease: 'none',
    });
}

export {
    modalEaseInAndOut,
    easeIn,
    slideDown,
    zoomOut,
    spinningCircle,
    slideDownAndZoomOut,
    ZoomInAndSlideUp
}