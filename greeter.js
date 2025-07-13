function getGreetings(hours) {
    if (hours < 4 || hours >= 19) return "Good Night";
    if (hours < 9) return "Good Morning";
    if (hours < 16) return "Good Afternoon ";
    return "Good Evening";
}

// module.exports=getGreetings;

export default getGreetings;  