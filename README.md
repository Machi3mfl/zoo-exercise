## Contents
- [Exercise](#introduction)
- [Installation](#installation)
- [Run unit tests suite](#unit-tests)
- [Full documentation](#full-documentation)

# Exercise

We are building a zoo inside a computer. Each animal species in our zoo has lots
of different, particular, behaviors, but all animals talk to each other in a similar
way. Specifically, they all implement a speak method, the output of which is the
arbitrary input string interspersed with an "animal sound" that is particular to that
type of animal. For example, the lion's speak function behaves like so:

> lion.speak( "I'm a lion" );
< "I'm roar a roar lion roar"

The tiger's speak function behaves similarly but with a different sound:

> tiger.speak( "Lions suck" );
< "Lions grrr suck grrr"

Please write logic and classes to support our zoo in JavaScript (using whatever
class model you like) with attention to code structure and readability.

## Installation

Installing the current exercise using npm package

```bash
git clone https://github.com/Machi3mfl/zoo-exercise.git
npm install
```

## Run unit tests suite

The current exercise only have unit test script, you can run it using the following command:

```bash
npm run test:coverage
```

You will find the `coverage report` in the next [link](https://machi3mfl.github.io/url-parser-exercise/index.html).


Also, you can check the unit tests files to see how to use the solution implemented.

## Full Documentation

See the [Wiki](https://github.com/Machi3mfl/url-parser-exercise/wiki/) for full documentation, examples, operational details and other information.