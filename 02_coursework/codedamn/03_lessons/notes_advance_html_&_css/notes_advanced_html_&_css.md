# HTML5 Concepts notes

## What Are HTML Entities:

- HyperText Markup Language, or HTML, is the primary language for web pages on the internet. It includes support for a number of other languages that add extra functionality and styling such as JavaScript and CSS.

  ![html-entities](img/html-entities-header-600x342.png)

## HTML Iframe :

- An HTML iframe is used to display a web page within a web page.
- **Syntax** : `<iframe src="url" title="description"></iframe>`
  ![iframe](img/CSS-to-iframe-768x432.jpg)

## HTML Input types:

This chapter describes the different types for the HTML `<input>` element.

- `<input type="button">` <input type="button">
- `<input type="checkbox">` <input type="checkbox">
- `<input type="color">` <input type="color">
- `<input type="date">` <input type="date">
- `<input type="datetime-local">` <input type="datetime-local">
- `<input type="email">` <input type="email">
- `<input type="image">` <input type="image">
- `<input type="password">` <input type="password">
- `<input type="radio">` <input type="radio">
- `<input type="range">` <input type="range">
- `<input type="submit">` <input type="submit">

## CSS Box Model:

### What is CSS box model?

- The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.
- CSS has two box models.**_content-box_** and **_border-box_**. Content-box is the default.

  ![box_model](img/Box-model.png)

- The total width of an element should be calculated like this:

  Total element width = width + left padding + right padding + left border + right border + left margin + right margin

- The total height of an element should be calculated like this:

  Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin

## CSS Variables:

- The var() function is used to insert the value of a CSS variable.
- Syntax of var() function: var(--name, value)
- Advantages of using var() are:

  - makes the code easier to read (more understandable)
  - makes it much easier to change the color values

  ![css_variables](img/css-variables-1.png)

## CSS calc() function:

- The calc() function performs a calculation to be used as the property value.
- example:
  #div1 {
  position: absolute;
  left: 50px;
  width: calc(100% - 100px);
  border: 1px solid black;
  background-color: yellow;
  padding: 5px;
  text-align: center;
  }

## What are Pseudo-classes?

- A pseudo-class is used to define a special state of an element.
- For example, it can be used to:

  - Style an element when a user mouses over it
  - Style visited and unvisited links differently
  - Style an element when it gets focus

- The syntax of pseudo-classes: selector:pseudo-class {
  property: value;
  }

| Selector  | Example        | Example description                          |
| --------- | -------------- | -------------------------------------------- |
| :active   | a:active       | Selects the active link                      |
| :focus    | input:focus    | Selects the `<input>` element that has focus |
| :hover    | a:hover        | Selects links on mouse over                  |
| :checked  | input:checked  | Selects every checked `<input>` element      |
| :disabled | input:disabled | Selects every disabled `<input>` element     |

## CSS :nth-child() Selector:

- The :nth-child(n) selector matches every element that is the nth child, regardless of type, of its parent.

- n can be a number, a keyword, or a formula.
- CSS Syntax: -> :nth-child(number) {
  css declarations;
  }
- example:

```<!DOCTYPE html>
<html>
<head>
<style>
p:nth-child(2) {
  background: red;
}
</style>
</head>
<body>

<p>The first paragraph.</p>
<p>The second paragraph.</p>
<p>The third paragraph.</p>
<p>The fourth paragraph.</p>

</body>
</html>
```

## CSS Pseudo-elements:

### What are Pseudo-Elements?

- A CSS pseudo-element is used to style specified parts of an element.

- For example, it can be used to:

  - Style the first letter, or line, of an element
  - Insert content before, or after, the content of an element.
    ![pseudo_elm](img/pseudo-ele.png)

#### CSS - The ::before Pseudo-element

- The ::before pseudo-element can be used to insert some content before the content of an element.

```<!DOCTYPE html>
<html>
<head>
<style>
h1::before {
  content: url(smiley.gif);
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>The ::before pseudo-element inserts content before the content of an element.</p>

<h1>This is a heading</h1>

</body>
</html>
```

#### CSS - The ::after Pseudo-element

- The ::after pseudo-element can be used to insert some content after the content of an element.

```<!DOCTYPE html>
<html>
<head>
<style>
h1::after {
  content: url(smiley.gif);
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>The ::after pseudo-element inserts content after the content of an element.</p>

<h1>This is a heading</h1>

</body>
</html>
```

## CSS Combinators OR Advanced CSS Selector

- There are four different combinators in CSS:

  - descendant selector (space)
  - child selector (>)
  - adjacent sibling selector (+)
  - general sibling selector (~)

| Selector          | Example | Example description                                                                |
| ----------------- | ------- | ---------------------------------------------------------------------------------- |
| element element   | div p   | Selects all `<p> `elements inside `<div>` elements                                 |
| element>element   | div > p | Selects all `<p>` elements where the parent is a `<div>` element                   |
| element+element   | div + p | Selects the first `<p>` element that are placed immediately after `<div>` elements |
| element1~element2 | p ~ ul  | Selects every `<ul>`element that are preceded by a `<p>` element                   |

### CSS \* Selector:

- The \* selector selects all elements.

- The \* selector can also select all elements inside another element
- CSS Syntax: -> \* {
  css declarations;
  }

## CSS Attribute Selectors:

- The [attribute] selector is used to select elements with a specified attribute.
  [click to know more](hhttps://www.w3schools.com/css/css_attribute_selectors.asp)
