// Function to find emails in a given text
function findEmails(text) {
    //This regex looks for patterns that match typical email formats
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const emails = text.match(emailPattern);
    //If no emails are found, return an empty array to avoid errors
    return emails ||[];
}

// Function to find phone numbers in a given text
function findPhoneNumbers(text) {T
    //This regex is designed to match various phone number formats
    const phonePattern = /\+?\d{0,2}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{3,4}/g;
    const phones = text.match(phonePattern);
    //If no phone numbers are found, return an empty array
    return phones ||[];
}

// Function to find hashtags in a given text
function findHashtags(text) {
    //This regex matches hashtags, which start with # and are followed by word characters
    const hashtagPattern = /#\w+/g;
    const hashtags = text.match(hashtagPattern);
    //If no hashtags are found, return an empty array
    return hashtags ||[];
}

// Function to find currency amounts in a given text
function findCurrencies(text) {
    //This regex matches currency amounts, specifically those starting with $
    const currencyPattern = /\$\s?\d+(?:,\d{3})*(?:\.\d{2})?/g;
    const currencies = text.match(currencyPattern);
    //If no currencies are found, return an empty array
    return currencies ||[];
}

// Function to find URLs in a given text
function findUrls(text){
    //This regex matches URLs, starting with http or https
    const urlPattern= /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/\S*)?/g;
    const urls= text.match(urlPattern);
    //If no URLs are found, return an empty array
    return urls ||[];
}

// The text we are going to analyze
const sampleText = "Welcome to House of Tayo , Where Fashion Meets Elegance! Get in touch through houseoftayo@gmail.com and you can also contact us via phone calls using 250 784 058 996 or 250-757-3453 for more information. Follow our social medias for daily updates on what is trending in the fashion world on our page #HouseofTayo , #MadeInRwanda and #AfricanFashion. Want to know more about us? check out our website at https://www.houseoftayo.com. Make a statement in every room! As affordable as $30 or $100 and command the attention."
const emails = findEmails(sampleText);
const phoneNumbers = findPhoneNumbers(sampleText);
const hashtags = findHashtags(sampleText);
const currencies = findCurrencies(sampleText);
const urls= findUrls(sampleText);// Displaying the results
console.log("Found Emails:");
emails.forEach(email => console.log(email));

console.log("\nFound Phone Numbers:");
phoneNumbers.forEach(phone => console.log(phone));

console.log("\nFoundHashtags:");
hashtags.forEach(hashtag => console.log(hashtag));

console.log("\nFound Currencies:");
currencies.forEach(currency => console.log(currency));

console.log("\nFound URLs:");
urls.forEach(url => console.log(url))
