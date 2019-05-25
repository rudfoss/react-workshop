# React-Workshop
This is the code used in the course **Robust web applications with React/Redux**.

## Getting started
Prerequisites:

- [VSCode](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)

Once you have the necessary tools you can clone the repository to a working directory on your machine by running:

```
git clone https://github.com/rudfoss/react-workshop.git ./
```

The clean project without any code files (yet) should now be on your machine. You can now open VSCode in that folder by running `code .` from the terminal.

The last thing we need to do before staring is to install all the necessary dependencies. Open a terminal in your project root folder and run:
```
npm install
```

## Dependency overview
Below is a list of all dependencies in the project and what each one does. For more detailed instructions please read the respective readme files from the repositories or tutorial sites for the libraries

package name|source|description
-|-|-
`devDependencies`||
@babel/core|[source](https://babeljs.io/)|Babel is a transpiler that allows us to write modern javascript and "transpile" it to code that runs on older browsers.
@babel/plugin-proposal-class-properties|[source](https://github.com/tc39/proposal-class-fields)|Plugin for babel that enables support for the class properties/fields proposal.
@babel/plugin-transform-runtime|[source](https://babeljs.io/docs/en/babel-plugin-transform-runtime)|A plugin that enables the re-use of Babel's injected helper code to save on codesize.|
@babel/preset-react|[source](https://babeljs.io/docs/en/babel-preset-react)|Plugin for babel that enables transformation of JSX and other minor things used when working with react
autoprefixer|[source](https://github.com/postcss/autoprefixer)|Adds vendor prefixes like `-ms-` to relevant css properties.
babel-eslint|[source](https://github.com/babel/babel-eslint)|Enables eslint support for all transpiled babel code.
eslint|[source](https://eslint.org/)|Uses a defined ruleset and warns us if our code diverges from it.
eslint-plugin-import|[source](https://github.com/benmosher/eslint-plugin-import)|Adds linter support for import statements
eslint-plugin-jest|[source](https://github.com/jest-community/eslint-plugin-jest)|Adds linter support for jest tests
eslint-plugin-react|[source](https://github.com/yannickcr/eslint-plugin-react)|Adds linter support for react and JSX syntax
identity-obj-proxy|[source](https://github.com/keyz/identity-obj-proxy)|Used to create mocks for css/scss files
jest|[source](https://jestjs.io/)|Our unit test framework	
parcel-bundler|[source](https://parceljs.org/)|Bundles our application and provides a self-reloading development environment (this is equivalent to Webpack) 
postcss-module|[source](https://github.com/css-modules/postcss-modules)|A plugin for postcss that provides support for css modules
sass|[source](https://github.com/sass/dart-sass)|The compiler used for SASS files


## VSCode extensions
Allthough these are not technically required you might consider installing some of these extensions. You can find them by searcing for them by name in the Extensions palette in VSCode

- ESLint
- Settings Sync
- vscode-icons