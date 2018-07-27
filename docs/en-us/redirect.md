## Redirect

Sometimes you want to redirect to another specific address when the user accesses certain urls.
The configuration for these redirection is as follows:
1. Open the `index.jsx` file in the `src` directory and find something like this:

```jsx
<Redirect exact from="/docs" to="/docs/installation.md" />
<Redirect exact from="/docs/" to="/docs/installation.md" />
```

2. Modify or add the corresponding redirection rule, where `from` refers to the address to be redirected, `to` refers to the address after the redirection

The entire project uses hash routing, so the values of `from` and `to` will eventually be reflected as hash values on the address bar. Start with `/` please.