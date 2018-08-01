const msg = 'Hello, world!';

console.log(`startsWith 'Hello': ${msg.startsWith('Hello')}`);
console.log(`endsWith '!': ${msg.endsWith('!')}`);
console.log(`includes 'o': ${msg.includes('o')}`);

console.log(`startsWith 'o' : ${msg.startsWith('o')}`);
console.log(`endsWith 'world!': ${msg.endsWith('world!')}`);
console.log(`includes 's': ${msg.includes('s')}`);

console.log(`startsWith 'o' at 4: ${msg.startsWith('o', 4)}`);
console.log(`endsWith 'o' at 8: ${msg.endsWith('o', 8)}`);
console.log(`includes 'o' at 8: ${msg.includes('o', 8)}`);

// ==================

const message = `Hello,
I'm javascript, es6, to be exact.
`;

console.log(message);
