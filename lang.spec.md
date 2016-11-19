# Spec

## Lex

### Comments

    // comments

### String

               | ""                     | ``
:-------------:|:----------------------:|:----------:
accepted char  | except '"' and newline | except '`'
escaped        | Yes                    | No

    "String"
    `String`
    "\n"  // newline
    `
    ` // newline

### Char

    'c'  // char c
    '\n' // newline

### Int

    1
    12
    123

### Float

    0.    // num after dot can be elided
    0.1
    .1    // num before dot can be elided
    0.e1
    0.1e1
    1e10
    1E10  // both e / E is acceptable
    1e+10 // +
    1e-10 // -

### Null


## Type

    bool // int
    int
    float
    byte // int
    array
    map

## Decl

### Const

    const n = 0
    const n int = 0 // int as int64
    const a, b
    const a, b = 1, 2

### Var

#### Standard

    var n = 0
    var n int = 0 // int as int64
    var a, b
    var a, b = 1, 2

#### Short

    n := 0
    a, b := 1, 2
    a := []int{}
    m := map[string]int{}

### Func

    func foo(a int, b int) (int, int) {
        return 0, 0
    }
    foo := func(a int, b int) (int, int) {
        return 0, 0
    }
    func bar(int) {}
    func bar(int, int) {}
    func bar(a int, b int, c ...int) {}

## Expr

### Array / Map

    a[0] = 1
    m["a"] = 1

### Operator

    || // or
    && // and
    == // equal
    != // n equal
    <  // less
    <= // less or equal
    >  // greater
    >= // greater or equal
    +  // add
    -  // sub
    *  // multi
    /  // div
    %  // mod
    !  // not

## Statement

### Return

    return 1

### Assign

    a = 1

### If

    if a < 1 {
        // bala
    } else if a < 2 {
        // balala
    } else {
        // balalala
    }

### Loop

    for i := 0; i < 10; i = i + 1 {
        // body
    }
    while n < 10 {
        // body
    }

### Break

    while n < 10 {
        break
    }

### Continue

    while n < 10 {
        continue
    }
