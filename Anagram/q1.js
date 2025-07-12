const vowels = ['a', 'e', 'i', 'o', 'u'];

let check_anagram = () => {
    let word1 = document.querySelector("#word1").value.trim().toLowerCase();
    let word2 = document.querySelector("#word2").value.trim().toLowerCase();

    let show = document.querySelector("#show");
    let error = document.querySelector("#error");
    let error1 = document.querySelector("#error1");
    let v = document.querySelector("#count");

    error.innerHTML = "";
    error1.innerHTML = "";
    show.innerHTML = "";
    v.innerHTML = "";

    if (word1.length == 0 || word2.length == 0) {
        error.innerHTML = "Both words must be provided.";
        return;
    }

    // Count vowels in both words
    let count = 0;
    for (let char of word1 + word2) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    v.innerHTML = `Vowel Count: ${count}`;

    // Check anagram
    if (word1.length !== word2.length) {
        show.innerHTML = "Not an Anagram";
        return;
    }

    let sorted1 = word1.split('').sort().join(''); //split string  to convert array
    let sorted2 = word2.split('').sort().join(''); // sort array sort //join array convert to string

    if (sorted1 == sorted2) {
        show.innerHTML = "Anagram";
    } else {
        show.innerHTML = "Not an Anagram";
    }
}
