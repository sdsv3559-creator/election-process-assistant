function chatbot(){
let input=document.getElementById("chatInput").value.toLowerCase().trim();
let output=document.getElementById("chatOutput");
if(!input){
output.innerText="Please ask a question.";
return;
}
let reply="I'm sorry, I don't understand. Try asking about voting steps, eligibility, ID requirements, or election timeline.";
if(input.includes("vote") || input.includes("voting") || input.includes("cast") || input.includes("ballot")){
reply="To vote: 1. Register as a voter. 2. Check the voter list. 3. Visit your polling booth on election day with valid ID. 4. Cast your vote securely.";
}
else if(input.includes("eligibility") || input.includes("eligible") || input.includes("can i vote") || input.includes("age") || input.includes("citizen")){
reply="You are eligible to vote if you are 18 years or older and a citizen of the country. Check the eligibility page for more details.";
}
else if(input.includes("id") || input.includes("identification") || input.includes("card") || input.includes("proof")){
reply="You need a valid voter ID card or other accepted identification to vote. Bring it to the polling station.";
}
else if(input.includes("date") || input.includes("when") || input.includes("timeline") || input.includes("schedule") || input.includes("election day")){
reply="Election dates are announced by the commission. See the Timeline page for the full schedule: Announcement, Campaign, Voting Day, Results.";
}
else if(input.includes("register") || input.includes("registration") || input.includes("sign up")){
reply="To register: Visit your local election office or website, provide your ID and address details.";
}
else if(input.includes("polling") || input.includes("booth") || input.includes("station") || input.includes("where to vote")){
reply="Go to your assigned polling station on election day. Check the voter list to confirm your polling place.";
}
else if(input.includes("faq") || input.includes("question") || input.includes("help") || input.includes("how") || input.includes("what") || input.includes("who") || input.includes("why")){
reply="Check the FAQ page for common questions. You can also ask me about voting steps, eligibility, ID, or timeline.";
}
output.innerText=reply;
}
function checkEligibility(){
let age=document.getElementById("age").value;
let citizen=document.getElementById("citizen").checked;
let result=document.getElementById("result");
if(!age) result.innerText="Enter age.";
else if(age<18) result.innerText="Not eligible: Under 18.";
else if(!citizen) result.innerText="Not eligible: Must be a citizen.";
else result.innerText="Eligible.";
}