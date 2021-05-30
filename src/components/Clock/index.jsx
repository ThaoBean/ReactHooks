import React, { useEffect, useState } from 'react';
import useClock from '../../hooks/useClock';

function formatDate(date){
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `${date.getMinutes()}`.slice(-2);
    const seconds  = `${date.getSeconds()}`.slice(-2);
    return `${hours} - ${minutes} - ${seconds} `;
}

function Clock() {
    const {timeString} = useClock();
    return (
        <div>
            
            <p style = {{fontSize : '40px'}}>{timeString}</p>
        </div>
    );
}

export default Clock;