// src/index.ts
var index_default = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  async fetch(request, env, ctx) {
    return new Response("Hello from your Worker! Static assets should be served automatically from the './out' directory.");
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
