Standard Library
===

I/O
---

### TextStream

* TextStream(const IO): TextStream
* read(var value) !!
* readLine(): string
* write(const value) !!
* writeLine(const value: string)

### BinaryStream

* BinaryStream(const IO): BinaryStream

// TODO

### IO

* IO(): char
* IO() in: char

### StandardIO(): IO !!

### FileIO(const fileName: string): IO

### BufferIO(???): IO // TODO

Strings
---

### String

// TODO: remove native string and implement string as a class

### RegExp

// TODO

Containers
---

### Tuple

* Tuple(const ...): Tuple

### Array

// TODO: remove native array and implement array as a container (like stl vector)

### Map

// TODO

Math
---

// TODO

Utilities
---

### Time

// TODO

### Random

// TODO

Language Facilities
===

Operators
---

* __assign(out left, const right)
* __positive(const value)
* __negative(const value)
* __add(const left, const right)
* __subtract(const left, const right)
* __multiply(const left, const right)
* __divide(const left, const right)
* __modulo(const left, const right)
* __equal(const left, const right)
* __notEqual(const left, const right)
* __less(const left, const right)
* __greater(const left, const right)
* __lessEqual(const left, const right)
* __greaterEqual(const left, const right)
* __not(const value)
* __and(const left, const right)
* __or(const left, const right)
* __xor(const left, const right)
* __shiftLeft(const left, const right)
* __shiftRight(const left, const right)
* __rollLeft(const left, const right)
* __rollRight(const left, const right)
* __index(const var1, const index)

Language Structure
---

* __do(const ...)
* __receive(???) // TODO
* __return(???) // TODO
* __callcc(const func)

// TODO: Import / Export

Control Flows
---

* __if(const cond func, const br1 func, const br2 func)
* __while(const cond func, const body func)
* __for() // TODO
* __forEach() // TODO

Error
---

// TODO: Error Information

// TODO: Error Handling

Compile Time Facilities
===

Type Info
---

* basic() // TODO
* array() // TODO
* closure() // TODO
* instance() // TODO

AST
---

// see libpepper spec for reference

Compile Time Control Flow
---

// TODO
