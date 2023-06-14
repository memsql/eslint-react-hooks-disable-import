const NAMES = new Set([
    "createContext",
    "useCallback",
    "useContext",
    "useDebugValue",
    "useDeferredValue",
    "useEffect",
    "useId",
    "useImperativeHandle",
    "useInsertionEffect",
    "useLayoutEffect",
    "useMemo",
    "useReducer",
    "useRef",
    "useState",
    "useSyncExternalStore",
    "useTransition",
]);

module.exports = {
    meta: {
        docs: {
            description: "React hooks cannot not be imported individually.",
        },
        schema: [],
        messages: {
            unexpected: "A React hook was individually imported.",
        },
    },
    create(context) {
        return {
            ImportSpecifier(node) {
                const name = node.imported.name;

                if (NAMES.has(name)) {
                    const importDeclaration = node.parent;

                    if (
                        importDeclaration.type === "ImportDeclaration" &&
                        importDeclaration.source &&
                        importDeclaration.source.value === "react"
                    ) {
                        context.report({ node, messageId: "unexpected" });
                    }
                }
            },
        };
    },
};
