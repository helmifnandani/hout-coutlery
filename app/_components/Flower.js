'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

const Flower = ({
    children,
    className,
    startEnd = [0, 10000],
    endStart = [0, -500],
}) => {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, startEnd, endStart)
    return (
        <motion.div
            style={{ y }}
            className={`fixed ${className} z-0 h-[300px] w-[300px] rounded-full`}
        >
            {children}
        </motion.div>
    )
}

export default Flower

// import { motion, useScroll, useTransform } from 'framer-motion'
// import { useRef } from 'react'

// const MultiLayerParallax = () => {
//     const containerRef = useRef(null)

//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ['start end', 'end start'],
//     })

//     // Different transform values for each layer
//     const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
//     const middlegroundY = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])
//     const foregroundY = useTransform(scrollYProgress, [0, 1], ['200%', '-50%'])

//     const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

//     return (
//         <div className="world-container">
//             {/* First Viewport (Empty or Initial Content) */}
//             <div className="flex h-screen items-center justify-center">
//                 <h1>Scroll to Enter New World</h1>
//             </div>

//             {/* Parallax Section */}
//             <div
//                 ref={containerRef}
//                 className="relative min-h-screen overflow-hidden"
//             >
//                 {/* Background Layer (Mountains) */}
//                 <motion.div
//                     style={{ y: backgroundY, opacity }}
//                     className="absolute inset-0"
//                 >
//                     <div className="bg-layer">Far Mountains</div>
//                 </motion.div>

//                 {/* Middleground Layer (Hills) */}
//                 <motion.div
//                     style={{ y: middlegroundY, opacity }}
//                     className="absolute inset-0"
//                 >
//                     <div className="middle-layer">Near Hills</div>
//                 </motion.div>

//                 {/* Foreground Layer (Trees) */}
//                 <motion.div
//                     style={{ y: foregroundY, opacity }}
//                     className="absolute inset-0"
//                 >
//                     <div className="fore-layer">Local Scenery</div>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }

// export default MultiLayerParallax
