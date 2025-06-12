## Notes

---

- Day04 Notes

---

analyzing how JavaScript **hoisting** and **scoping** work, especially when the same variable name (`a`) is declared both outside and inside a function using `var`.

---

### ✅ **Example 1: Using `var a` inside the function**

```javascript
console.log(a); // undefined
var a = 10;

function f1() {
  console.log(a); // undefined
  var a = 15;
  console.log(a); // 15
}
f1();
```

#### 🔍 Explanation:

1. **Global scope**:

   ```js
   console.log(a); // undefined
   var a = 10;
   ```

   Due to **hoisting**, `var a` is moved to the top, but it's still `undefined` until the assignment happens. So `console.log(a)` prints `undefined`.

2. **Inside function `f1()`**:

   ```js
   console.log(a); // undefined
   var a = 15;
   console.log(a); // 15
   ```

   Inside the function, `var a` **declares a new local variable**, which **shadows** the global one. Because of hoisting, `var a` is hoisted to the top of `f1()`, so the first `console.log(a)` accesses the **local** `a` (which is still undefined at that point), and then it's assigned `15`.

---

### ✅ **Example 2: No `var a` inside the function**

```javascript
console.log(a); // undefined
var a = 10;

function f1() {
  console.log(a); // 10
  a = 15;
  console.log(a); // 15
}
f1();
```

#### 🔍 Explanation:

1. **Global scope**:

   ```js
   console.log(a); // undefined
   var a = 10;
   ```

   Same as before—`a` is hoisted, so it logs `undefined`.

2. **Inside function `f1()`**:

   - There's **no `var` inside `f1()`**, so it refers to the **global `a`**.

   ```js
   console.log(a); // 10
   a = 15;
   console.log(a); // 15
   ```

   - The value of `a` is `10` (assigned globally), so it logs `10`, then it's updated to `15`.

---

### 🔁 Summary of Differences:

| Aspect                         | Example 1 (`var a` inside)          | Example 2 (no `var a`)     |
| ------------------------------ | ----------------------------------- | -------------------------- |
| Variable scope                 | Function-local                      | Global                     |
| First `console.log` in `f1()`  | `undefined` (due to local hoisting) | `10` (accesses global `a`) |
| Second `console.log` in `f1()` | `15`                                | `15`                       |

---

Let me know if you'd like a diagram or animation to visualize this!
