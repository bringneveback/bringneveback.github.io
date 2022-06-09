var quotes = [
    "Pay women what they're worth! This franchise wouldn't even exist without Neve Campbell!",
    'Neve deserves to get paid for what she has done for this franchise',
    'Neve deserves to be paid her worth',
    'She deserves everything because SHE IS the franchise',
    'Because Neve has been true to the franchise and a very loyal participant and not to mention she is part of the reason Scream is so successful! She deserves to be treated with loyalty and respect back!',
    'Neve Campbell is the heart and soul of the franchise and deserves to be paid accordingly. She deserves it so much and so do the fans',
    'Scream is not just Scream without Neve. Should Neve get paid what she is worth? IDK, does Sidney Prescott own a gun?',
    "Scream has had an impact on my entire life since I started watching the franchise at way-too-young, and Neve Campbell’s performance and presence as Sidney Prescott has meant so much to me, especially as I have gotten older. She deserves the world but at the very least pay the woman what she deserves!",
    "Without Neve there is no Scream. It won’t have the same energy or the same stakes. She brings stability even if we all know she will be in briefly and pad the story",
    "I believe the series lives because of Neve's iconic portrayal of Sidney Prescott. Yes, Sidney's story might have had an end but it's her LEGACY that is allowing us to have more successful movies.",
    "Neve Campbell is the MAIN character ALWAYS will be, us the fans pay to see HER and she had made this franchise MILLIONS. She deserves better and had Wes Craven been alive, he would fight tooth and nail to keep her.",
    "Neve carried this franchise on her back for 26 years. Scream 3 even suffered its original writer so NEVE can return. The franchise is nothing without her.",
    "Neve deserves better. She is the heart and soul of the franchise, the movies would not be what they are without her. Pay her what she’s worth!",
    "Because you can't have a bona fide Halloween without Jamie Lee. Neve Campbell is the face of Scream, the franchise would not have been successful without her.",
    "Neve Campbell deserves way better since she’s the star of the franchise and is basically the queen of Scream",
    "Neve IS this franchise! SCREAM is meaningless without her! You don’t disrespect the OG Final Girl - you just don’t!"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = '"' + quotes[randomNumber] + '"';
}

document.addEventListener("DOMContentLoaded", newQuote());