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
