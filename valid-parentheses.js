/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

 */

const isValid = function (string) {
    const stack = []
    const map = Object.freeze({
        ')': '(',
        '}': '{',
        ']': '[',
    })

    for (var i = 0; i < string.length; i++) {
        if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
            stack.push(string[i])
        } else if (stack[stack.length - 1] === map[string[i]]) {
            stack.pop()
        } else return false
    }

    console.log('\n', "STACK::", stack, "LENGTH::", stack.length, '\n')

    return stack.length ? false : true
};


const res = isValid('()')

console.log('\n', "RES::", res, '\n')