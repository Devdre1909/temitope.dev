---
title: "Use CSS Vars like a Pro"
description: "A deep dive into CSS custom properties — from defining variables and scoping to using them with media queries, JavaScript, and animations."
pubDate: 2023-02-21
tags: ["css", "frontend", "web-development"]
draft: false
---

Like [Pablo Picasso](https://www.goodreads.com/quotes/558213-learn-the-rules-like-a-pro-so-you-can-break) said, "Learn the rules like a Pro, so you can break 'em like an artist". I as a developer always strive to do that, understand the toolset available in the toolbox, get familiar with the basic principles of things, then I can design them the way I want "...break em like an artist"

CSS variables, also known as CSS custom properties, were first proposed in 2012 but were not officially part of the CSS specification until 2017. However, many modern browsers had already implemented them prior to their official standardization. Today, CSS variables are widely supported by modern browsers, which allows web developers to create more dynamic and efficient stylesheets. You can check the level of support for CSS variables in various browsers on the website [caniuse.com/css-variables](https://caniuse.com/css-variables).

### The Why?

*Picture this: you're working on a massive project with tons of CSS files, and you need to update the color scheme to match the latest design trends. You find yourself drowning in a sea of #ffffff and #000000 values, with no idea where to start. This is one of the places where CSS variables come to the rescue!*

In addition, CSS variables allow you to create a more consistent and cohesive design language for your website. You can define variables for things like font sizes, spacing, and colors, ensuring that all of your design elements are aligned.

Finally, CSS variables can also improve the performance of your website. By reducing the amount of repetitive code, your website will load faster and use fewer resources, resulting in a better user experience for your visitors.

With CSS variables, you can define a value once and use it throughout your CSS code, providing a more elegant, maintainable stylesheet.

### The what?

CSS variables, also known as CSS custom properties, are a powerful feature of modern CSS that allows developers to define and reuse values throughout their stylesheets. With CSS variables, you can define a value once and use it multiple times, making your code more efficient and maintainable.

In this article, we will discuss how to use CSS variables like a pro, and explore some of the most useful techniques for working with them.

### The how?

**Defining Variables**

To define a CSS variable, you need to use the var() function, followed by the name of the variable enclosed in two hyphens. For example:

```css
:root {
  --primary-color: #554021;
}

h1 {
  color: var(--primary-color);
}
```

In this example, we have defined a variable called `--primary-color`, and set its value to a shade of brown. We have then used this variable in the color property of an h1 element, using the `var()` function. It's that simple.

### The Applications

**Using CSS Variables with Media Queries**

One of the most useful techniques for working with CSS variables is to use them in media queries. With CSS variables, you can define a single value that is used throughout your stylesheet, and then change it in a media query to create a responsive design.

```css
:root {
  --primary-color: #554021;
}

h1 {
  color: var(--primary-color);
}

@media (min-width: 768px) {
  :root {
    --primary-color: #ffa745;
  }
}
```

In a media query, we have changed the value `--primary-color` to a shade of orange, creating a responsive design that changes the color of the h1 element at a specific breakpoint.

**Using CSS Variables with JavaScript**

CSS variables can also be used with JavaScript to create dynamic stylesheets. You can use JavaScript to update the value of a CSS variable, and then use that variable throughout your stylesheet.

```css
:root {
  --primary-color: #554021;
}

h1 {
  color: var(--primary-color);
}
```

```javascript
document.documentElement.style.setProperty('--primary-color', '#ffa745');
```

See a live example on [CodePen](https://codepen.io/Devdre1909/pen/RwYrJyv).

**Using CSS Variables in Animations**

CSS variables can also be used in animations to create dynamic and interactive designs. You can define a CSS variable to control the duration, delay, or other parameters of an animation, and then use that variable throughout your stylesheet.

Check out this [animation example on CodePen](https://codepen.io/Devdre1909/pen/ZEMQRVy).

**A Note on Scope**

CSS variables can be scoped using a variety of methods, including using the `:root` pseudo-class, class or ID selectors, and the `var()` function. When you define a variable within a specific scope, such as a class or ID, that variable will only apply to elements within that scope, and any child elements will inherit the variable value. If you define a variable using the `:root` selector, it will apply to the entire document.

It's also important to note that CSS variables follow the same cascading and inheritance rules as other CSS properties. This means that if you define a variable with the same name in multiple scopes, the variable value will be inherited from the closest scope.

```css
:root {
  --color: red;
}

.d1 {
  --color: green;
}

h1 {
  color: var(--color);
}
```

See this [scoping demo on CodePen](https://codepen.io/Devdre1909/pen/wvEMXPV).

**A note on Pre-processors**

CSS pre-processors such as Sass, Less, and Stylus offer additional features and syntactic sugar that can make writing CSS more efficient and organized. They also support variables that can be used throughout a stylesheet, similar to CSS variables.

However, I believe one of the main advantages of CSS variables over pre-processor variables is that CSS variables can be updated and created using JavaScript at runtime. This means that you can dynamically change the value of a CSS variable based on user interaction, viewport size, or any other condition, allowing you to create more dynamic and interactive web experiences.

CSS pre-processors, on the other hand, cannot be updated at runtime and require compilation to generate the final CSS code. While pre-processors can offer some benefits in terms of code organization and efficiency, they cannot match the flexibility and interactivity of CSS variables.

### The Conclusion

CSS variables are a powerful and versatile feature of modern CSS that can help you create more **efficient, maintainable, and dynamic stylesheets**. By defining and reusing CSS variables, you can create responsive designs, dynamic animations, and much more. With the techniques we've discussed in this article, you can use CSS variables like a pro and take your CSS skills to the next level.
