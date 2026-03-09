# Task 8: CSS Preprocessing with Sass

## Overview

This task demonstrates CSS preprocessing using **Sass (SCSS syntax)**.
The entire stylesheet is authored in modular `.scss` files and compiled to `style.css`.

## Sass File Structure

```
scss/
├── styles.scss       ← Main entry point (@use imports all partials)
├── _variables.scss   ← Design tokens: colors, fonts, spacing, radii, shadows
├── _mixins.scss      ← Reusable mixins: flex, card, btn-base, input-base, breakpoints
├── _base.scss        ← Reset and body/global defaults
├── _layout.scss      ← Wrapper, sidebar, main content, page header, responsive
└── _components.scss  ← Cards, buttons, inputs, badges, tasks, stats, API, form
```

## Key Sass Features Used

### 1. Variables (`_variables.scss`)

All design tokens defined once and reused everywhere:

```scss
$color-primary: #38bdf8;
$font-heading: "Plus Jakarta Sans", sans-serif;
$radius-xl: 12px;
$shadow-sm: 0 1px 4px rgba(0, 0, 0, 0.06);
```

### 2. Mixins (`_mixins.scss`)

Reusable patterns to avoid repetition:

```scss
@mixin card($bg: $color-card-bg, $radius: $radius-xl) {
  background: $bg;
  border-radius: $radius;
  border: none;
}

@mixin btn-base($bg, $color, $hover-bg) {
  background-color: $bg;
  &:hover {
    background-color: $hover-bg;
  }
}

@mixin tablet {
  @media (max-width: 900px) {
    @content;
  }
}
```

### 3. Nesting (`_layout.scss`, `_components.scss`)

Keeping related styles grouped:

```scss
.sidebar {
  width: $sidebar-width;

  &-brand {
    margin-bottom: $spacing-xl;
  }

  &-nav .nav-link {
    &:hover {
      background-color: $color-sidebar-hover;
    }
    &.active {
      background-color: $color-primary;
    }
  }
}
```

### 4. Partials & @use Imports (`styles.scss`)

Modular architecture — one entry file imports everything:

```scss
@use "variables" as *;
@use "mixins" as *;
@use "base";
@use "layout";
@use "components";
```

### 5. Dark Mode Mixin

A custom mixin for scoped dark mode styles:

```scss
@mixin dark {
  .dark-mode & {
    @content;
  }
}

.ts-card {
  background: white;
  @include dark {
    background: $dark-card-bg;
  }
}
```

## How to Compile

Install Sass:

```bash
npm install -g sass
```

Compile once:

```bash
sass scss/styles.scss style.css
```

Watch for changes:

```bash
sass --watch scss/styles.scss style.css
```

The compiled `style.css` is already included so the page renders without needing to compile locally.
