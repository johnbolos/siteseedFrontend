// import _ from 'lodash'

ssAnimateInit = () => {
    console.log('sss.p initiated')
    // =======================================Main==========================================
    controller = null;
    tl = null;
    if (typeof (scene) === 'undefined') {
        scene = [];
    } else if (scene.find((item) => item !== null)) {
        //	object present
        scene.forEach((scn, key) => {
            scn.removeTween(true);
            scn.destroy(true);
        });
        scene = []
    }
    // =====================================================================================

    // scroll, mouse, enterance animation
    const allScrollElem = document.querySelectorAll("[data-ss-scroll-effect]")
    const allMouseElem = document.querySelectorAll("[data-ss-mouse-effect]")
    const allEnteranceEffectElem = document.querySelectorAll("[data-aos]")
    if (allEnteranceEffectElem.length) {
        if (AOS) {
            AOS.init();
        }
    }
    if (allScrollElem.length) {
        allScrollElem.forEach((item, key) => {
            createScrollAnim(item)
        })
    }
    if (allMouseElem.length) {
        createMouseAnim(allMouseElem)
    }
}

createScrollAnim = (node) => {
    if (node.getAttributeNode("data-ss-scroll-effect") && !node.getAttributeNode("data-ss-scroll-effect").value) {
        console.log('sss.p nottt....working...', node)
        return
    }
    console.log('sss.p working...', node)
    let valArr = node.getAttributeNode("data-ss-scroll-effect").value.split(', ')
    const nodeTopPercent = ((node.getBoundingClientRect().top + window.pageYOffset) / window.innerHeight) * 100
    _.forEach(valArr, item => {
        const arr = item.split(' ')
        const type = arr[0].trim()
        let direction = arr[1].trim(), speed = parseInt(arr[2].trim()), vpBottom = parseInt(arr[3].trim()), vpTop = parseInt(arr[4].trim());
        let tweenConfig = {
            ease: Linear.easeNone
        }, triggerConfig = {}
        switch (type.trim()) {
            case 'vertical':
                if (direction == 'top') {
                    direction = -1
                } else if (direction == 'bottom') {
                    direction = 1
                }
                speed = speed * 3
                tweenConfig.y = `${direction * speed}%`
                break;
            case 'horizontal':
                if (direction == 'left') {
                    direction = -1
                } else if (direction == 'right') {
                    direction = 1
                }
                speed = speed * 3
                tweenConfig.x = `${direction * speed}%`
                break;
            case 'transparent':
                tweenConfig.autoAlpha = 1 - (speed / 100)
                break;
            case 'blur':
                tweenConfig = {
                    ...tweenConfig,
                    '-webkit-filter': `blur(${speed / 10}px)`,
                    'filter': `blur(${speed / 10}px)`,
                }
                break;
            case 'rotation':
                if (direction == 'anticlockwise') {
                    direction = -1
                } else if (direction == 'clockwise') {
                    direction = 1
                }
                speed = 360 * (speed / 10)
                tweenConfig.rotation = direction * speed
                break;
            case 'scale':
                if (direction == 'shrink') {
                    direction = -1
                } else if (direction == 'grow') {
                    direction = 1
                }
                // speed = speed    // no change
                tweenConfig.rotation = direction * speed
                break;
        }


        TweenLite.to(node, 1, {
            rotationY: 0,
            rotationX: 0,
            y: 0,
            x: 0,
            transformOrigin: "50% 50%",
            ease: Power1.easeOut,
        });

        triggerConfig = {
            ...triggerConfig,
            triggerHook: vpBottom / 100,
            duration: `${vpTop - vpBottom}%`,
            offset: `${((nodeTopPercent - vpTop) / 100) * window.innerHeight}px`
        }
        // =======================================Main==========================================
        controller = new ScrollMagic.Controller();

        tl = new TimelineMax();
        tl.to(node, 1, tweenConfig);

        scene.push(
            new ScrollMagic.Scene(triggerConfig)
                .setTween(tl)
                // .addIndicators({
                //     colorTrigger: "black",
                //     colorStart: "black",
                //     colorEnd: "black",
                //     indent: 10
                // })
                .addTo(controller)
        );
        // ========================================================================================
    })
}

createMouseAnim = (nodes) => {
    console.log('sss.p mouse effect started')
    $(document).mousemove(function (event) {
        nodes.forEach((node, key) => {
            if (node.getAttributeNode("data-ss-mouse-effect") && !node.getAttributeNode("data-ss-mouse-effect").value) {
                return
            }
            let valArr = node.getAttributeNode("data-ss-mouse-effect").value.split(' ')
            var xPos = (event.clientX / $(window).width()) - 0.5,
                yPos = (event.clientY / $(window).height()) - 0.5

            const type = valArr[0]
            const direction = valArr[1] == 'direct' ? 1 : -1
            const speed = parseInt(valArr[2])
            let tweenConfig = {}
            if (type == 'track') {
                tweenConfig = {
                    rotationY: 0,
                    rotationX: 0,
                    y: yPos * (direction * 2 * speed),
                    x: xPos * (direction * 2 * speed),
                }
            } else {
                tweenConfig = {
                    rotationY: xPos * (direction * 2 * speed),
                    rotationX: yPos * (direction * -2 * speed),
                    y: 0,
                    x: 0,
                }
            }
            TweenLite.to(node, 1, {
                ...tweenConfig,
                transformOrigin: "50% 50%",
                ease: Power1.easeOut,
            });
        })
    })

}