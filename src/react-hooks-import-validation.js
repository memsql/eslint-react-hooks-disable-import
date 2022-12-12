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

                if (
                    name === "useState" ||
                    name === "useEffect" ||
                    name === "useContext" ||
                    name === "useReducer" ||
                    name === "useCallback" ||
                    name === "useMemo" ||
                    name === "useRef" ||
                    name === "useImperativeHandle" ||
                    name === "useLayoutEffect" ||
                    name === "useDebugValue"
                ) {
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
