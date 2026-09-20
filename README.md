# sphere.pub

The Sphere project site, served by its own Sphere Node.

[sphere.pub](https://sphere.pub) is a plain instance of the
[`@sphere-pub/node`](https://github.com/marianoviola/sphere-node) package: the
same node anyone installs, with this deployment's identity in `wrangler.toml`.
It publishes the project's own documentation and theory (the
[sphere](https://github.com/marianoviola/sphere) content repository) as
agent-readable fragments. Sphere publishes itself.

There is no node code here. The whole instance is:

| File | Holds |
|---|---|
| `src/index.ts` | one line: re-export the package's Worker handler |
| `wrangler.toml` | publisher vars and the D1 / R2 / KV bindings |
| `package.json` | the dependency on `@sphere-pub/node` |

The HTTP contract, the fragment schema, and the migrations all come from the
package (`node_modules/@sphere-pub/node/{spec,migrations}`).

## Operate

```bash
npm install
npm run migrate          # apply the package's D1 migrations, remote
wrangler secret put SPHERE_OWNER_TOKEN
npm run deploy           # migrate + wrangler deploy
```

Local development: copy the owner token into `.dev.vars`
(`SPHERE_OWNER_TOKEN=...`), then

```bash
npm run migrate:local
npm run dev
```

## Publish content

Fragments are prepared from the `sphere` content repository with the
[Sphere plugin](https://github.com/marianoviola/sphere-plugin) and published
either with its `publish_fragment` tool (owner-authenticated
`PUT /owner/fragments/{id}`) or with the package's CLI:

```bash
npm run publish:fragment -- ../sphere/fragments/2026-06-23-concept            # dry run
npm run publish:fragment -- ../sphere/fragments/2026-06-23-concept --remote   # upload via wrangler
```

## Upgrade the node

```bash
npm install @sphere-pub/node@latest
npm run deploy
```

`npm run deploy` applies any new migrations before deploying.

## License

MIT for the code in this repository. The content served by sphere.pub is the
Sphere project by Mariano Viola, CC BY-NC unless a fragment states otherwise.
