I chose Vuetify in this solution as it provides a Material Design Component implementation,
plus Vue JS comes with 1st party state-mgmt and router thus reducing boiler plate code by a LOT.

I intentionally didn't write this code in Typescript as it will take more time to implement since I'm not actively using TS.

Intentionally didn't give user feedback in-case the api-call fails

I saved all my backend api logic in store. Mutations are synchronous while Actions are async.

My solution is reponsive, works in mobile as well.
Support dark mode as my eyes personally have issues with very bright displays.

In the home page, it will show a spinner while fetching data.
