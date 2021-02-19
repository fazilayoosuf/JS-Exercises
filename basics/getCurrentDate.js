const date =new Date();

function getCurrentDate(){
    const days=date.getDate()+1;
    const month=date.getMonth()+1;
    const years=date.getFullYear();

    return `${days}/${month}/${years}`;
}

console.log(getCurrentDate())