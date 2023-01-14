## Contents
- [Exercise](#introduction)
- [Installation](#installation)
- [Run unit tests suite](#unit-tests)
- [Full documentation](#full-documentation)
- [GitHub Actions](#github-actions)

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

<img width="635" alt="Screenshot 2023-01-14 at 20 01 42" src="https://user-images.githubusercontent.com/6089438/212500824-e447e800-66c3-48ab-9b79-343a5d0c7099.png">


You will find the `coverage report` in the next [link](https://machi3mfl.github.io/zoo-exercise/index.html).

<img width="1440" alt="Screenshot 2023-01-14 at 19 59 54" src="https://user-images.githubusercontent.com/6089438/212500763-7becb3be-405f-4cff-aae9-e5bb0b2b1330.png">

Also, you can check the unit tests files to see how to use the solution implemented.

# GitHub Actions

Added GitHub actions implementing CI/CD (Continuous Integration/Continuous Deployment) workflows like:

### Unit test suite

Added unit test suite for every file with `100% coverage`.

### Deploy

Deploy [Coverage test report](https://machi3mfl.github.io/zoo-exercise/index.html) in GitHub Pages.

You can check the actions in the following [link](https://github.com/Machi3mfl/zoo-exercise/actions)

