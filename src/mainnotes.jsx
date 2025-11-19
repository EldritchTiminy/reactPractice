import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

let container = document.getElementById('root');
let root = createRoot(container);

root.render(App);

/*
The following is JSX. It looks like HTML, but it's slightly different and can be treated like JS.

  <h1>Hello world</h1>

The above is referred to as a 'JSX element'. JSX elements can go anywhere that javascript expressions can go: saved as a variable, passed to a function, etc.
Here's a JSX element saved to a variable:

  const myArticle = <article></article>;

Just like HTML, JSX elements can have attributes. The only difference is that JSX elements must have their attributes defined in camelCase instead of kebab-case. Also, instead of 'class=""', in React/JSX we would use 'className=""'.
Here's a JSX element with an id attribute:
*/

const title = <h1 id="title">Introduction to React.js: Part 1</h1>;

/* JSX elements can nest inside one another just like HTML. HTML style line breaks and indentation are often used for readability. However, JSX has some rules that must be followed:
1st: if a JSX expression takes up more than one line, it must be wrapped in parenthesis.
2nd: a JSX expression must have exactly ONE outermost element.

example: */

const blog = (
  <div>
    <h1>Welcome to Dan's Blog!</h1>
    <article>
      Wow I had the tastiest sandwich today. I<strong>literally</strong> almost freaked out.
    </article>
  </div>
);

/* The following code can be used to render a JSX expression:

  const container = document.getElementById('app');
  const root = createRoot(container);
  root.render(<h1>Hello world</h1>);

The 'createRoot()' function comes from the react-dom/client library. Here we use it to create a root from container and store it in root. This tells the program where to put what we want to render. We can then use root to render a JSX expression.

root.render() tells the program what to render.

There are subtle differences between the grammar in HTML and in React. In html, you could use the word "class" for instance. But in React, we have to use the word "className" instead.
When JSX is rendered, JSX className attributes are automatically rendered as class attributes.

Here's an example of how className would be used: */

const myDiv = <div className="big">I AM A BIG DIV</div>;

/*
Another difference between HTML and JSX that causes a lot of errors is self closing tags. In HTML we have tags like <img> and <input> that have no closing tag.
In JSX, these tags must have a "/" at the end to "close" them like so: <img />

We can also add JavaScript into our JSC expressions. Any code written between JSX tags will be read as JSX, not as regular JavaScript.
If you want the code to be read as JS, then we need to wrap it in curly braces: {}
Like so:
*/

const mySum = <p>{5 + 9}</p>;

/*
Variables in JSX: when you inject JS into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.
That means that you can access variables while inside of a JSX expression, even if those variables were declared outside of the JSX code block.

When writing JSX it's common to use variables to set attributes.
Here's an example of how that might work:
*/

let sideLength = "200px";
const panda = (
  <img
    src="#"
    alt="panda image"
    height={sideLength}
    width={sideLength}
  />
);

/*
Notice how each attribute gets its own line. This makes the code more readable.
Object properties are also often used to set attributes.
Here's an example of how that might work:
*/

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
};

const panda2 = (
  <img
    src={pics.panda}
    alt="Lazy Panda Imae"
  />
);

const owl = (
  <img
    src={pics.owl}
    alt="Unimpressed Owl Image"
  />
);

const owlCat = (
  <img
    src={pics.owlCat}
    alt="Ghastly Abomination Image"
  />
);

/*
Event Listeners in JSX: You can create event listeners by giving a JSX element a special attribute. ex:

  <img onClick={clickAlert} />

An event listener's name should be something like onClick or onMouseOver. An event listener's value should be a function.
Note that in HTML event listeners are written in all lowercase like "onclick" in JSX, however, event listeners are written in camelCase.

IMPORTANT RULE: you can not inject an "if" statement into a JSX expression. The following example code will break:

  (
    <h1>
      {
        if (purchase.complete) {
          'Thank you for placing an order!'
        }
      }
    </h1>
  )

If we want to use conditionals, we can't inject them into JSX expressions, we have to keep them outside of JSX. Here's an example:

  if (user.age >= drinkingAge) {
    message = (
      <h1>
        Hey, check out this alcoholic beverage!
      </h1>
    );
  } else {
    message = (
      <h1>
        Hey, check out these earrings I got at Claire's!
      </h1>
    );
  }

This works because it's written in JavaScript that is outside of any JSX.

Alternatively we can use the Ternary Operator: x ? y : z
The following code works:

  const headline = (
    <h1>
      { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
    </h1>
  );

JSX Conditionals: The && operator
&& works best for conditionals that will sometimes do an action but other times do nothing at all.
Example:

  const tasty = (
    <ul>
      <li>Applesauce</li>
      { !baby && <li>Pizza</li> }
      { age > 15 && <li>Brussels Sprouts</li> }
      { age > 20 && <li>Oysters</li> }
      { age > 25 && <li>Grappa</li> }
    </ul>
  );

If the expression on the left of the && evaluates as true, then the JSX on the right of the && will be rendered.
If the expression on the left of the && evaluates as false, then the JSX on the right of the && will be ignored and not rendered.

.map in JSX:
*/