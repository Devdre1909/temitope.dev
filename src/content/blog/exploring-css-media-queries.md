---
title: "Exploring CSS Media Queries"
description: "A deep dive into the various media queries CSS offers — from width and height to aspect ratio, orientation, resolution, and pointer types."
pubDate: 2023-02-04
tags: ["css", "responsive-design", "frontend"]
draft: false
---

Media Queries have been a crucial part of front-end development since the emergence of responsive design. Previously, separate mobile versions of websites were common, often using a sub-domain such as [m.example.com](http://m.example.com), which utilized separate HTML, CSS, and JavaScript. However, with the growing usage of mobile devices, the need for optimized websites across various screen sizes became increasingly important, leading to the adoption of responsive design and the widespread use of media queries.

Responsiveness can be achieved in various ways, both entirely on the client side or with some help from the server side. These methods include media queries, Flexbox, Grid Layout, viewport units, responsive images, responsive typography, and server-side techniques. The focus of this article, however, is on media queries, which are used to apply different styles to different devices or screen sizes based on conditions defined in the query.

For example, the following media query tests the maximum width of the viewport:

```css
@media (max-width: 767px) {
  body {
    font-size: 14px;
  }
}
```

If the viewport width is less than or equal to 767 pixels, the styles inside the media query will be applied, in this case, setting the font size of the `body` element to 14px. Similarly, the following media query tests the maximum height of the viewport:

```css
@media (max-height: 400px) {
  body {
    font-size: 14px;
  }
}
```

It is worth noting that media queries testing the height of the viewport are less commonly used than those testing the width. However, this approach can be useful for solving specific design problems, particularly when it comes to controlling the layout of a website based on the height of the screen.

In addition to these two media queries, CSS also provides other options for testing various aspects of a device, such as an aspect ratio, orientation, and resolution of the screen, pointer. These can be defined using media queries such as:

```css
@media (aspect-ratio: 16/9) {
  body {
    font-size: 14px;
  }
}

@media (orientation: portrait) {
  body {
    font-size: 14px;
  }
}

@media (orientation: landscape) {
  body {
    font-size: 16px;
  }
}

@media (resolution: 300dpi) {
  body {
    font-size: 14px;
  }
}

@media (pointer: coarse) {
  /* styles for touch devices */
}

@media (pointer: fine) {
  /* styles for mouse or pen devices */
}
```

These media queries demonstrate the various options available to developers when it comes to creating responsive websites, and highlight the importance of having a solid understanding of media queries and their capabilities.

This article was written to explore the various media queries that CSS offers, and to serve as a reminder of the tools available to developers in their toolkits. Thank you for reading.

## References

- [Using media queries — MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
