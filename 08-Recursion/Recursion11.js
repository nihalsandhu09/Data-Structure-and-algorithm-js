// check if string is palindrome or Not using Recursion 

function isPalindrome(s, i = 0) {
    if (i >= s.length / 2) return true;
    if (s.charAt(i) !== s.charAt(s.length - i - 1)) return false;
    return isPalindrome(s, i + 1);
}

function checkPalindrome(s) {
    return isPalindrome(s) ? "Palindrome" : "Not Palindrome";
}

// Example string.
let s = "madam";
console.log(checkPalindrome(s));
