# <p align ="center"> HTML NOTES</p>

## HTML commands

- Starting with <!-- and
- Ending with -->

## HTML Tags Types

1. Block Tags : h1 tag, p tag, div tag.
2. Inline Tags : a tag, span tag.

## What is anchor tag explain it with example?

- **_Anchor tag:_** The HTML code for creating a link to another page or to a particular section within a page.Example: The 'a' tag defines a hyperlink, which is used to link from one page to another.
- The most important attribute of the 'a' element is the href attribute, which indicates the link's destination.

## What is img tag?

- The < img > tag is used to load an image in an HTML page.

- The < img > tag has two required attributes:

  - **_src:_** Specifies the path to the image

  - **_alt:_** Specifies an alternate text for the image, if the image for some reason cannot be displayed

- IMG tag is inline tag.
- IMG tag is self closing tag.

## Video Tag

- The < video > tag is used to embed video content in a document, such as a movie clip or other video streams.
- The < video> tag contains one or more < source> tags with different video sources. The browser will choose the first source it supports.
- The text between the < video> and </> tags will only be displayed in browsers that do not support the < video> element.

## HTML Table Colspan & Rowspan

- To make a cell span over multiple columns, use the colspan attribute. The value of the colspan attribute represents the number of columns to span.
- To make a cell span over multiple rows, use the rowspan attribute.The value of the rowspan attribute represents the number of rows to span.

## The < form> Element

- The HTML < form> element is used to create an HTML form for user input.
- The < form> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

### The < input> Element

- An < input> element can be displayed in many ways, depending on the type attribute.
  ex: 1. **< input type="text">** Displays a single-line text input field.

  2. **< input type="radio">** Displays a radio button (for selecting one of many choices.)
  3. **< input type="checkbox">** Displays a checkbox (for selecting zero or more of many choices)
  4. **< input type="submit">** Displays a submit button (for submitting the form)
  5. **< input type="button">** Displays a clickable button

## HTML Form Attributes

### The Action Attribute

- The action attribute defines the action to be performed when the form is submitted.
- Usually, the form data is sent to a file on the server when the user clicks on the submit button.

## what is Placeholder text?

- Placeholder text is what is displayed in your input element before your user has inputted anything.

---

# CSS

## HTML style Attribute

- The style attribute specifies an inline style for an element.

- The style attribute will override any style set globally, e.g. styles specified in the < style> tag or in an external style sheet.

## CSS properties

![alt text](img/property.jpeg)

- CSS properties are the styles used on specified selectors. They are written before values in the CSS ruleset and are separated from property values by a colon.

## CSS classes

![alt text](img/css_class.png)

- The HTML class attribute is used to specify a class for an HTML element.
- The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.

## CSS ID

- The #id selector styles the element with the specified id.
- An id also has a higher specificity (importance) than a class so if both are applied to the same element and have conflicting styles, the styles of the id will be applied.

- #id {
  css declarations;
  }

## HTML Block and Inline Elements

- **_Block-level Elements:_**
  - A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
  - A block-level element always takes up the full width available
  - Two commonly used block elements are: < p> and < div>.
- **_Inline Elements:_**
  - An inline element does not start on a new line.
  - An inline element only takes up as much width as necessary.
  - This is a < span> element inside a paragraph.

### The < input> Element

- An < input> element can be displayed in many ways, depending on the type attribute.
  ex: 1. **< input type="text">** Displays a single-line text input field.

  2. **< input type="radio">** Displays a radio button (for selecting one of many choices.)
  3. **< input type="checkbox">** Displays a checkbox (for selecting zero or more of many choices)
  4. **< input type="submit">** Displays a submit button (for submitting the form)
  5. **< input type="button">** Displays a clickable button

## HTML Form Attributes

### The Action Attribute

- The action attribute defines the action to be performed when the form is submitted.
- Usually, the form data is sent to a file on the server when the user clicks on the submit button.

## what is Placeholder text?

- Placeholder text is what is displayed in your input element before your user has inputted anything.

---

# CSS

## HTML style Attribute

- The style attribute specifies an inline style for an element.

- The style attribute will override any style set globally, e.g. styles specified in the < style> tag or in an external style sheet.

## CSS properties

![alt text](img/property.jpeg)

- CSS properties are the styles used on specified selectors. They are written before values in the CSS ruleset and are separated from property values by a colon.

## CSS classes

![alt text](img/css_class.png)

- The HTML class attribute is used to specify a class for an HTML element.
- The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.

## CSS ID

- The #id selector styles the element with the specified id.
- An id also has a higher specificity (importance) than a class so if both are applied to the same element and have conflicting styles, the styles of the id will be applied.

- #id {
  css declarations;
  }

## HTML Block and Inline Elements

- **_Block-level Elements:_**
  - A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
  - A block-level element always takes up the full width available
  - Two commonly used block elements are: < p> and < div>.
- **_Inline Elements:_**
  - An inline element does not start on a new line.
  - An inline element only takes up as much width as necessary.
  - This is a < span> element inside a paragraph.
