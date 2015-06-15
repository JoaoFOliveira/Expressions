# Expressions

Producer/Consumer system using NodeJS services
- Producer generates random arithmetic expressions (e.g. "4+5=")
- Consumer computes expressions and returns result
- Allows concurrency
- Log messages
- Tests


To run:
- npm install && npm start to run consumer
- node lib/producer.js on N terminals to launch N expression producers at 100ms rate each
- npm test
