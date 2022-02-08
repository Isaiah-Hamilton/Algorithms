package main

import "fmt"

const str = "racecar"

func isPalindrome(str string) bool {
    reversedStr := ""
    for i := len(str)-1; i >= 0; i-- {
        reversedStr += string(str[i])
    }
    for i := range(str) {
        if str[i] != reversedStr[i] {
            fmt.Println(str, "is not a palindrome")
            return false
        }
    }
    fmt.Println(str, "is a palindrome")
    return true
}

func main() {
  isPalindrome(str)
}
