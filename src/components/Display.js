import React from 'react'
import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

function Display({ selectedDisplay }) {

    const [menuSelected, setMenuSelected] = useState(null)

    return (
        <div className = "Display">
            
            <div className="Content">
                
                <h2>
                    This is were the different displays will go.
                </h2>

                <br />

                <p>
                    Selecting an option from the menu will change the display in here.
                </p>

                <br />

                <p>
                    Try it! Select an item from the menu :)
                </p>

                <br />

                <AnimatePresence>
                    {selectedDisplay && <motion.p
                
                        style={{
                            display:"inline"
                        }}

                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        exit    = {{opacity: 0}}
                    >
                        You've selected:&nbsp;

                        <AnimatePresence exitBeforeEnter>
                        <motion.div

                        key = { selectedDisplay }
                        
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        exit    = {{opacity: 0}}

                        className="selected-display" style={{display:"inline"}}>{ selectedDisplay }</motion.div>
                        </AnimatePresence>

                        </motion.p>}
                </AnimatePresence>

            </div>

        </div>
    )
}

export default Display