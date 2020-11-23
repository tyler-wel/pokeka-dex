## Navigation learning
- Using `.push()` instead of `.navigate()` allows us to navigate regardless of the current state. This is useful when wanting to navigate to the same route with different params

- We can go back multiple screens by using navigate, ie we know that we want to go back to Home so we can use navigate('Home') (not push!). We could also just do navigation.popToTop() to go back to the first screen in the stack

- Params can be passed _back_ to the previous screen by passing params into a navigate call (if the screen already exists in the stack)
