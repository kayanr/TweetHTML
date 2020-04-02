let tweet = [{ "username": "Kaleb Burd", "userHandle": "@kburd", "userImageUrl": "https://pythonprogramming.net/static/images/finance/python-programming-language.png", "message": "Hello Twitter! Goodbye MySpace" },
{ "username": "Rando Cardician", "userHandle": "@seedNull", "userImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png", "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet nisi ac metus imperdiet fermentum at ut sem. Morbi. " }, 
{ "username": "Donald J. Trump", "userHandle": "@realDonaldTrump", "userImageUrl": "https://compote.slate.com/images/abd6b1ce-a885-4f81-a682-214877a93edd.jpeg", "message": "*censored*" }, 
{ "username": "John Smith", "userHandle": "@notRussianBot", "userImageUrl": "https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392__340.png", "message": "Who censored Trump???" }];


let tweetHTML = "";

for(let i=0;i<tweet.length; i++){
   let myTweet = tweet[i];

tweetHTML += "<div id =content>"
tweetHTML += "<div id='timage'><img src=" + myTweet.userImageUrl +" width=60px height=40px> </div>"
tweetHTML += "<div id='tuser'>"+ myTweet.username + "<br/>" + myTweet.userHandle + "</div>"
tweetHTML += "<div id='tfooter'>" + myTweet.message + "</div>"
tweetHTML+="</div>"
tweetHTML+="<br/>"

}

document.getElementById("container").innerHTML=tweetHTML


        /*  <div id="tuser">Donald J. Trump <br/> @realDonaldTrump </div>
         <div id="tfooter">*censored*</div> */

/* /*old values
tweetHTML += "<div style='border-width:"+myTweet.size+"; border-color: "+myTweet.color+ "; border-style: solid;'>"
tweetHTML+= myTweet.text
tweetHTML+="</div>"*/ 