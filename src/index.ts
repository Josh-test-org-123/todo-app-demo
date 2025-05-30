// src/index.ts
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    return new Response("Hello from your Worker! Static assets should be served automatically from the './out' directory.");
  },
};