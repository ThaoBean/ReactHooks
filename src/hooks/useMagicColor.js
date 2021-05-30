import React, { useEffect, useRef, useState } from 'react';

function randomColor(){
    const COLOR_LIST = ['red', 'yellow', 'pink', 'skyblue'];
    
    // const currentIndex = COLOR_LIST.indexOf();
    // let newIndex = currentIndex;

    // 
    let newIndex = Math.trunc(Math.random() * 3);
    
    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    //change color every 1 second

    useEffect(() => {
        const colorInterval = setInterval(() => {
            // console.log('First color: ', color);
            // console.log('Change color: ', colorRef.current);

            const newColor = randomColor();
            setColor(newColor);
            
            colorRef.current = newColor;
        }, 1000);

        return ()=>{
            clearInterval(colorInterval);
        }
    }, []);
    return color;
}

export default useMagicColor;