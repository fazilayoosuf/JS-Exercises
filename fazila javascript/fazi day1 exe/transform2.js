const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

const usersByLikes = myUsers.map((item,index) => {
    const container = {};

    container[item.name] = [item[item[index]]];
    
    return container;
})

console.log(usersByLikes);