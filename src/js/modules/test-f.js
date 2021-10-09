"use strict";
const showStatus = () => {
    console.log("function is imported");
};

export {showStatus};

// export { name1, name2, …, nameN };
// export { variable1 as name1, variable2 as name2, …, nameN };
// export let name1, name2, …, nameN; // или var
// export let name1 = …, name2 = …, …, nameN; // или var, const

// export default выражение;
// export default function (…) { … } // или class, function*
// export default function name1(…) { … } // или class, function*
// export { name1 as default, … };

// export * from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;