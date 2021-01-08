// Make a valid HTML5 document
// Display "Hello, World" centered horizontally on the page
// Change the color of "World" to white, and give it a black background
// Using Javascript, add a greeting for each of your friends to the page, each on their own line and centered.
// Friends: Ray, Oscar, Gwen, Bob, and Marie
// Write each of their names in their favorite color: red, orange, green, blue, and magenta, respectively.
// Add a colored background to each of their names that provides reasonable contrast with their favorite color.
// Make the text bigger and add a couple of CSS styles of your choice.
// You don't want to show any favoritism: randomize the order that their names appear on the page each time the page is loaded.

const randomizeFriendList = function(){
    let friendList = [
        {name: "Ray", greeting: "Hey, ", color:"red", bgcolor:"yellow"},
        {name: "Oscar", greeting: "Yo! ", color:"orange", bgcolor:"brown"},
        {name: "Gwen", greeting: "Good-day, ", color:"green", bgcolor:"pink"},
        {name: "Bob", greeting: "Hi, ", color:"blue", bgcolor:"orange"},
        {name: "Marie", greeting: "Morning, ", color:"magenta", bgcolor:"purple"}
    ];

    let randomIndex, currentFriend;
    for(let i = friendList.length - 1; i >= 0; i--){
        currentFriend = friendList[i];
        randomIndex = Math.floor(Math.random() * (i + 1));
        friendList[i] = friendList[randomIndex];
        friendList[randomIndex] = currentFriend;
        console.log(friendList[i].name)
    }
    
    return friendList;
};

const greetFriends = function(friendList){
    const friendDiv = document.querySelector('.friends');
    let divNode;

    friendList.forEach((friend)=>
    {
        divNode = document.createElement('div');
        divNode.style.color = friend.color;
        divNode.style.backgroundColor = friend.bgcolor;
        divNode.innerHTML = friend.greeting + friend.name;
        friendDiv.appendChild(divNode);
    })   
}

greetFriends(randomizeFriendList());