
let newsnameInput = document.getElementById('newsname');
let newsemailInput = document.getElementById('newsemail');

// check local storage for user data
let userInfo = JSON.parse(localStorage.getItem("userInfo"));

if (userInfo){
    newsnameInput.value = userInfo.newsname;
    newsemailInput.value = userInfo.newsemail;
}

//if local storage is not supported, it displays a message on the console log
if(!window.localStorage){
    console.log("Local storage not supported!");
}

else{
    if(localStorage.userInfo){ //if it is supported and has a value stored already, display that value
        document.getElementById('welcome').innerHTML = "Welcome back, " + userInfo.newsname + " (" + userInfo.newsemail + ")";
    }
}

//for the newsletter form, start function() on submit
document
    .getElementById("newsletter-form")
    .addEventListener("submit", function (
                      //event
                     ) {

        //event.preventDefault();

        //get values from the input
        let newsname = newsnameInput.value.trim();
        let newsemail = newsemailInput.value.trim();
        console.log(newsname, newsemail)

        //if values are valid
        if (!newsname || !newsemail) {
            return;
        } 

        //save them in local storage
        let userInfo = {
            newsname: newsname,
            newsemail: newsemail
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        console.log("welcome back", newsname, newsemail)
        document.getElementById('welcome').innerHTML = "Welcome back " + localStorage.newsname;
    });
