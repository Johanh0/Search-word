//Const
 
const txtInput = document.querySelector('.word-input');
const btnSearch = document.querySelector('.btn-search');
 
const researchWord = document.querySelector('.research-word');
const meaning = document.querySelector('.meaning');
const synonyms = document.querySelector('.synonyms');
const antonyms = document.querySelector('.antonyms');
 
//Listeners
 
btnSearch.addEventListener('click', getWord);
 
//Functions
 
async function getWord(event){
 
   event.preventDefault();
 
   const requestUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${txtInput.value}`;
   const request = new Request(requestUrl);
   const response = await fetch(request);
   const answer = await response.json();
 
   researchWord.innerHTML = answer[0]["word"];
 
   meaning.innerHTML = `<strong>Definition: </strong>` + answer[0]["meanings"][0]["definitions"][0]["definition"];
 
   synonyms.innerHTML = `<strong>Synonyms: </strong> ` + answer[0]["meanings"][0]["synonyms"];
 
   antonyms.innerHTML = `<strong>Antonyms: </strong> ` + answer[0]["meanings"][0]["antonyms"];
 
 
   txtInput.value = ' ';
 
 
   console.log(answer);
  
};
