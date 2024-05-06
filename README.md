## What are the development standards?

### General

- Always open a Jira Issue for any type of development work
- Always use the Jira UI to create a Github branch for an issue
- Always use [smart commits](https://support.atlassian.com/bitbucket-cloud/docs/use-smart-commits/) and [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Always use AI tools such as [Code Genie](https://marketplace.visualstudio.com/items?itemName=astalwick.codegenie) and [Copilot](https://github.com/features/copilot) to assist you
- Always prefer commandline tools over UI - for example [GitHub command line tools](https://cli.github.com/) and [Jira cli](https://github.com/ankitpokhrel/jira-cli)
- Always write [immutable code](https://medium.com/dailyjs/pure-functions-immutability-and-other-software-superpowers-dfe6039af8f6): [Cheatsheet](https://gist.github.com/aluksidadi/10aa07c6f007efc587f793212548ad51)
- - Bad `Array.forEach`, `Array.push`, `let`
- - Good `Array.map`, `Array.reduce`, `const`
- - Bad: `obj.name = "cody"`
- - Good: `const objectWithName = {...obj, name: "cody"};`
- Always check with lead developer when adding an external depedency through yarn, npm, etc.
- Always check your code with `node_modules/.bin/tsc --noEmit` before submitting a PR
- Always use self-describing function and variables names (no matter how long they are)
- Always familiarize yourself with the existing the code in the repo and follow the style. Our goal is to have it look like one developer wrote all the code.
- Always use `const` intead of `let`
- Always avoid the use of `any`
- Always [isolate side-effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)): Structure your methods so variable assignment is at the top and side effects are at the bottom, followed by the return statement and don't mingle the three!
```TypeScript
  ///// Variable definition
  const var1 = "";
  const var2 = "";
  /// ....etc

  //// Side effects
  await updateDatabase();
  await updateImage();
  /// ...etc

  /// return data
  return var2;

  // or EVEN better
  return updateDatabase().then(updateImage).then(() =&gt; var2)
  
```
- Always make sure your linter and formatter rules are turned on and working


### React Conventions

- Follow this [structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)
- - we also add `providers` to specific features where applicable and do not have an `api` directory for each feature. Instead we use `operations.graphql` files.
- Follow the [Container/View pattern](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) for components (see existing code)
- - View Components (also called Presentational components) should be pure functions with no `return` statement or variable/function definitions within the component body.
```
| - Sample
	| - SampleView.tsx
	| - SampleContainer.tsx
	| - index.tsx
```
- Don't use the `style` component and don't use `styled` helper. Use the design properties exposed through GlueStack and the `sx` property.
- Avoid setting explicity dimensions on a component. Instead use `flex` properties and spacing properties such as `margin`, `padding` and `gap`
- Always use `useCallback` and `useMemo` when defining non-scalar functions and definitions within a component
- Never define more than one component in a file
- [Know when to use `useRef` vs `useState`](https://medium.com/web-development-with-sumit/useref-vs-usestate-in-react-330539025245#:~:text=serve%20different%20purposes.-,useRef%20is%20primarily%20used%20to%20access%20and%20manipulate%20the%20DOM,renders%20when%20the%20state%20updates.)


## What are the major technologies/frameworks/libraries that I need to have knowledge of to develop for this?

**The following are knowledge requirements. You should not work on this project if you are unfamiliar with these topics.**

- [Visual Studio Code](https://code.visualstudio.com/docs/introvideos/basics): IDE
- [Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup): Source Control
- [GitHub cli](https://cli.github.com/)
- [React](https://react.dev/learn): View Library
- [React Native](https://reactnative.dev/docs/getting-started): View Library for Native apps
- [Expo](https://docs.expo.dev/): React Native Framework
- [Expo Router](https://expo.github.io/router/docs/): Routing Framework
- [EAS](https://docs.expo.dev/build/introduction/): Build Management System (really only needed for DevOps)
- [GlueStack](https://gluestack.io/ui/docs/overview/introduction): Design Framework
- [GraphQL](https://graphql.org/learn/): API Protocol
- [Apollo](https://www.apollographql.com/docs/react): Client for interacting with the API
- [Reactive Variables](https://www.apollographql.com/docs/react/local-state/reactive-variables/): Apollo tool for managing local state
- [Yup](https://github.com/jquense/yup): Library for form validation
- [React Hook Form](https://www.react-hook-form.com/): Library for building forms
- [luxon](https://moment.github.io/luxon/): Library for interacting with dates
- [TypeScript](https://www.typescriptlang.org/docs/): Programming language
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress): Testing Framework
- [GraphQL Gen](https://the-guild.dev/graphql/codegen): Tool for generating Type Definitions from GraphQL Schema and Operations
- [Debugging](https://docs.expo.dev/debugging/tools/)
