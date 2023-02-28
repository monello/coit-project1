## Navigation

This is an interrsting file, because everything above the `<Outlet />` component will render once and be visible on all pages.

Between React and React Router DOM, it will nor rerender this section, which makes it an ideal place to put our navigation as we will need this on every page.

### Outlet compoent

This is a really cool componet provided by React Router DOM. It will be aware of what route the user is on (as defined in our routes in the App.tsx).
For whatever route we are on and it will load the component that was defined in the `element` prop in place of the `<Outlet/>` component
