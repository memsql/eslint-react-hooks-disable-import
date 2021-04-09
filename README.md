# eslint-react-hooks-disable-import

## About

The goal of this library is to add a custom eslint rule to enforce how react hooks are imported. The eslint rule will error when the hook is directly imported from react as shown in the example below:

Bad:
```
import { useContext } from "react";
...
const { val } = useContext(...);
```

Good:
```
const { val } = React.useContext(...);
```

## How to Use
1. Install NPM Package
2. Add the rule to eslint-config.js

Add the package to "plugins"
```
"@singlestore/react-hooks-disable-import"
```
Add the rule to the "rules"
```
"@singlestore/react-hooks-disable-import/react-hooks-disable-import": "error"
```
