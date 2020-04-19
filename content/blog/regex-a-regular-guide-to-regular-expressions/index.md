---
author: Aashni
comments: true
date: 2018-03-12 07:25:11+00:00
description: Regular Expression, or RegEx, is confusing. Here's a quick guide to break things down for you.
layout: post
link: https://aashni.me/blog/regex-a-regular-guide-to-regular-expressions/
slug: regex-a-regular-guide-to-regular-expressions
title: "Regex: A Regular Guide to Regular Expressions"
wordpress_id: 433
categories:
  - Javascript
  - Regex
  - Tutorial
---

I’ve used Regular Expressions (Regex) over the years, but my usage has often been spotty. This week, I’ve spent a lot of time working with regular expressions for various parts of work I’m doing, and I thought I’d do a quick overview on some Regex in Javascript as a result. A regex is a string based pattern to match or replace parts of a string. With javascript you can use regex commands off the string object, or bring in additional functions through other libraries.

## Regular Building Blocks

To use a regex, you first construct the regex rule, then use one of the optional functions like `match`, `replace` or `test` depending on your need. As an example, let’s test to see if a given string has the letters `abc` in them. To create the regex, we can do `var re = /abc/`. Note here that all regex rules are encompassed between a pair of `/` with no quotes - there’s more about this that I’ll touch on later. Once we have the regex setup, we can use it to test some strings. I’ll put the expected output in the comment.

```javascript
re.test("this is a string") // false
re.test("this is a string with abc in it") // true
```

## Metacharacters

There are two types of characters in a regex. The first are regular characters, which match literally to a string. In the example above, that would be any of the three letters. The second is a metacharacter, essentially a character with special powers. There’s an in-depth list of these metacharacters on [Mozilla Developer network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Some of the common ones include the following:

```javascript
    \    // a backslash is an escape literal
    ^    // match from the start of a string
    $    // marks the end of a string
    |    // gives an or condition
    x*   // matches ‘x’ 0 or more times
    x+    // matches ‘x’ 1 or more times
    x?    // matches ‘x’ 0 or 1 times
    x{n}    // matches ‘x’ n number of times
```

I’ll build up an example to explain some of the above.

Let’s say I’d like to find all strings that start with `The` in a sentence. I can use `/^The/` as the regex.

```javascript
var re = /^The/
var str1 = "The date is 14th March"
var str2 = "I ate a tasty pineapple today"

re.test(str1) // true
re.test(str2) // false
```

Next, let’s say I’d like to test and see if a has a month, and because we’re so good at this, we’ll only return true if the month is at the end of the string. We can make use of the `or` comparator, `|`, and end of line operator, `$` like so: `(January|February|March|April|May|June|July|August|September|October|November|December)$`.

```javascript
var re = /(January|February|March|April|May|June|July|August|September|October|November|December)$/
var str1 = "The date is 14th March"
var str2 = "The December"
var str3 = "June is a summer month"
var str4 = "I ate a tasty pineapple today"

re.test(str1) // true
re.test(str2) // true
re.test(str3) // false
re.test(str4) // false
```

Next up, I want to combine these two rules together. So match all sentences that start with `The`, and ends with one or the months of the year. The regex for this should be `^The(January|February|March|April|May|June|July|August|September|October|November|December)$`.

```javascript
var re = /^The(January|February|March|April|May|June|July|August|September|October|November|December)$/
var str1 = "The date is 14th March"
var str2 = "The December"
var str3 = "June is a summer month"
var str4 = "I ate a tasty pineapple today"

re.test(str1) // false
re.test(str2) // false
re.test(str3) // false
re.test(str4) // false
```

The reason this fails is because we’re looking for all strings that follow the format `The{month}`. We need to add in `.` to include any additional characters, and it’s a good idea to include `+` to match at least one other character (like a space). That would make our regex `^The.+(January|February|March|April|May|June|July|August|September|October|November|December)$`

```javascript
var re = /^The.+(January|February|March|April|May|June|July|August|September|October|November|December)$/
var str1 = "The date is 14th March"
var str2 = "The December"
var str3 = "June is a summer month"
var str4 = "I ate a tasty pineapple today"

re.test(str1) // true
re.test(str2) // true
re.test(str3) // false
re.test(str4) // false
```

## Other Regex Methods

So far, I’ve shown examples of the `test()` method, however there are other really powerful ones. I’ll cover a few of these with some quick examples. The first is `replace()`. This is extremely useful when you’ve found something, and want to replace it with something else. For example, I could be looking at a text document, and need to replace all instances of `google home` with `Google Home`, since it’s a proper pronoun. I can use the regex `/(G|g)oogle (H|h)ome/` The reason I use `(G|g)` and `(H|h)` is to allow for matches of `Google home` and `google Home` as well.

Once the regex is set, we'll be making use of the `replace` function, which works as `str.replace(re, replacementStr)`, where `str` is the initial string, `re` is the regex and `replacementStr` or `Google Home` in our case.

```javascript
var re = /(G|g)oogle (H|h)ome/
var replacementStr = "Google Home"
var str1 = "This Google home is awesome"
var str2 = "My google home is grey"
var str3 = "Do you use google at home?"

str1.replace(re, replacementStr) // "This Google Home is awesome"
str2.replace(re, replacementStr) // "My Google Home is grey"
str3.replace(re, replacementStr) // "Do you use google at home?"
```

Splitting strings is a really useful skill, where you can take a string, pick a delimiter and split the string into an array based on that delimiter. For example, I have the input `Apples, Pineapples, Bread, Milk, Yogurt` as my shopping list. I can use the split function on the `,`, and turn it into an array.

```javascript
var re = ","
var str1 = "Apples, Pineapples, Bread, Milk, Yogurt"
var arr1 = str1.split(re)
// output: ["Apples", "Pineapples", "Bread", "Milk", "Yogurt"]
```

The two remaining common methods are `search()` and `match()`. The main differences between the two is that search will search the entire string, and works if there’s a new line character present in the input (i.e. `\n`), while match only matches from the start of the line. Match is, however, faster than search which is why it’s used. Both functions will return matches searched, or `None` if nothing was found.

```javascript
var re = "/abc/"
var str1 = "abc is important"
var str2 = "Do you know your abc’s?"
var str3 =
  "abcdefghijklmnop\nqrstuvwxyz.\nNow I know my abc’s, what you come and sing with me?"

re.match(re, str1) // match
re.search(re, str1) // 0

re.match(re, str1) // no match
re.search(re, str1) // 17

re.match(re, str1) // no match
re.search(re, str1) // 0
```

## Flags

The final part of the (simple) regex puzzle, is using flags. Flags are a single character that comes after the second `/` in a regex. For example, in `/abc/g`, `g` is our flag. The flags can be used individually, or together to get the right rules for you.

```javascript
g // global search
i // case insensitive
m // search across multiple lines
u // use unicode
y // use sticky’s to mark where to continue searching from
```

The two more commonly used ones are the `g` and `i`. If we take our earlier example with the Google Home, instead of using `/(G|g)oogle (H|h)ome/` as our regex, we could instead use `/google home/i` and this will automatically take care of both cases of `G` and `H`.

```javascript
var re = /google home/i
var replacementStr = "Google Home"
var str1 = "This Google home is awesome"
var str2 = "My google home is grey"
var str3 = "Do you use google at home?"

str1.replace(re, replacementStr) // "This Google Home is awesome"
str2.replace(re, replacementStr) // "My Google Home is grey"
str3.replace(re, replacementStr) // "Do you use google at home?"
```

That’s it for my basic overview of regular expressions. They are extremely helpful and powerful, and if I get more experience with them, I may share some of my more complicated regexes in the future. I do want to give a shout out to [Regex 101](http://www.regex101.com), a great regex website that let’s you test out your regex, gives you an explanation of what it’s doing, and let’s you build up test cases to make sure your regex does what it’s expected to do. For anyone experimenting with regexes, give it a shot! If you have any cool regexes you’ve created, share them below - I’d love to try figure out how they work!
