import React, { useEffect, useState } from 'react';

function formatDate(date){
    if(!date) return '';
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `${date.getMinutes()}`.slice(-2);
    const seconds  = `${date.getSeconds()}`.slice(-2);
    return `${hours} - ${minutes} - ${seconds} `;
}

function useClock() {
    const [timeString, setTimeString] = useState('');
    useEffect(() => {
       const clearInterval_ =  setInterval(() => {
           const now = new Date();
           const newTimeString  = formatDate(now);
           setTimeString(newTimeString);
           console.log('Test2');
       }, 1000); 

       return () => {
           console.log('Clock cleanup');
           clearInterval(clearInterval_);
       }
    }, []);
    return {timeString};
}

export default useClock;
