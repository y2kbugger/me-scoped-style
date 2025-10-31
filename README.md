# 🌘 CSS Scope Inline

A tiny script that scopes your inline `<style>` blocks using modern CSS `@scope`.

## Why does this exist?

* You want to co-locate your styles with your markup for ⚡️ [Locality of Behavior (LoB)](https://htmx.org/essays/locality-of-behaviour/)
* You want all CSS features: [Nesting](https://caniuse.com/css-nesting), animations, `@keyframes`, etc.
* Only 17 lines. No build step. No dependencies.
* Pairs well with [htmx](https://htmx.org)

## 👁️ How does it look?
```html
<section id="container">
    <style me-scoped>
        me { background: red; }
        h2 { color: blue; }
    </style>
    <h2>I'm blue</h2>
</section>
```
See the [Live Example](https://y2kbugger.github.io/css-scope-inline/example.html)! Then [view source](https://github.com/y2kbugger/css-scope-inline/blob/main/example.html).

## 🌘 How does it work?

This uses `MutationObserver` to watch for `<style me-scoped>` tags. When found:
1. Gets the parent element's `id` (required!)
2. Replaces `me` with `:scope`
3. Wraps styles in `@scope (#id) { ... }`

Uses modern CSS `@scope` for true style isolation. No flashing or popping.

## 🎁 Install

Add this to your `<head>`:

```html
<script src="https://cdn.jsdelivr.net/gh/y2kbugger/css-scope-inline/script.js"></script>
```

Or [📥 download script.js](https://raw.githubusercontent.com/y2kbugger/css-scope-inline/main/script.js) and host it yourself.

## 📋 Requirements

* Parent element **must have an `id`** attribute
* Add `me-scoped` attribute to your `<style>` tag
* Use `me` to reference the scoped container (gets replaced with `:scope`)

## 🎨 Example

```html
<section id="container">
    <style me-scoped>
        me { background: #e0f7fa; }
        h2 { color: #00796b; font-weight: 900; }
        p { color: #004d40; }
        .details {
            background: #6e39d8;
            color: #e0f7fa;
            padding: 0.5rem;
            .highlight {
                background: #e382ce;
            }
        }
    </style>

    <h2>Overview</h2>
    <p>This section's styles are local to #container.</p>
    <div class="details">
        <p>The <span class="highlight">highlight</span> color stays within this section.</p>
    </div>
</section>
```

## 🔎 Browser Support

Requires browsers with [`@scope` support](https://caniuse.com/css-cascade-scope):
* Chrome/Edge 118+
* Safari 17.4+
* Firefox 128+
