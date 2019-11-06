# TodoApp

Create todo app with React, Redux and React-Bootstrap.

- Used css-module instead of `styled-components`

  - File structure becomes messier with extra folders and css files.
  - Difficult to identify .js files looking at the editor tab because every file is named `index.js`.
  - You can style conditionlly with `style` prop and ternary expression. But I like separating styling logic from the component better.

- React-Bootstrap's Nav adds `.active` to its `Nav.Link` when it is selected.
- You can pass dispatch handler to `onSelect` prop. It is fired when a `NavItem` is selected. (You can use `onSelect` either in `Nav` or `Navbar`)

## Tricks Learned

- Customize `.active` styling:

  ```JSX
  <Navbar
      className="justify-content-center"
      onSelect={eventKey => {
        setCurrentFilter(eventKey);
      }}
  >
    <Nav activeKey={currentFilter}>
      <Nav.Link className={classes.Filter} eventKey="SHOW_ALL">
        All
      </Nav.Link>
      <Nav.Link className={classes.Filter} eventKey="SHOW_COMPLETED">
        Completed
      </Nav.Link>
      <Nav.Link className={classes.Filter} eventKey="SHOW_ACTIVE">
        Active
      </Nav.Link>
    </Nav>
  </Navbar>
  ```

  ```css
  /* :global(.navbar-light .navbar-nav .nav-link.active) {
    color: var(--primary);
  } */

  /* More specifically scoped. won't affect Nav.Link styling in other Components */
  .Filter:global(.active) {
    color: var(--primary) !important;
  }
  ```

- Remove top border from `.list-group-flush`:

  ```JSX
  import "./index.module.css";
  ```

  ```css
  :global(.list-group-flush .list-group-item:first-child) {
    border-top: none;
  }
  ```
