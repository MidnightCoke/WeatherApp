const formatUnixDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000); 
    const today = new Date();
    const options = { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
        return 'Today, ' + date.toLocaleDateString('en-US', options).replace(/,/g, '');
    } else {
        const futureOptions = { 
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        const formattedDate = date.toLocaleDateString('en-US', futureOptions).replace(/,/g, '');
        return formattedDate;
    }
}

const formatUnixTime = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000); 
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    return hours + ':' + minutes;
}

export {formatUnixDate,formatUnixTime};