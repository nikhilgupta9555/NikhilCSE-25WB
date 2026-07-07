let ch = prompt("Enter a character:").toLowerCase();

if (
    ch === 'a' ||
    ch === 'e' ||
    ch === 'i' ||
    ch === 'o' ||
    ch === 'u'
) {
    console.log(ch + " is a Vowel");
} else {
    console.log(ch + " is a Consonant");
}