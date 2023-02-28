## Defining the routes

Here I'm using the App.tsx as a place to define all the routes for the application.

### Routing Provider (`index.ts`)

In here we do some cofiguration that will make the functionality provided by `react-router-dom` available to the entire application

Note the use of `BrowserRouter`

### Root Route (`App.tsx`)

Indicated by the path of `/` will be the root/parent route. All other routes will follow on this one, starting with `/` followed by the path name (Route)

By nesting the rest of the routes under the root route I am able to build up all the routes with `/` as the base.

Note the followinf:

1. the first route does not need a path-param, as it is related directly yo the parent, by applying the `index` propery. This tells `react-router-dom` to load this element (component) when the route `/` is requested
2. For the rest of the nested routes we can now simply specify the name in the path and react-router-dom will append `/` before it automatacally. So path `create` will navigate to `/create`
3. the path `*` will catch all and any paths the user might request that aren't caught by the routes we defined: `/` and `/create`. Meaning this will serve as our `404 Not Found` page
