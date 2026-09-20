// sphere.pub is a plain Sphere Node instance: the project publishes itself
// through the same package anyone else installs. Configuration lives in
// wrangler.toml (vars + bindings) and in the SPHERE_OWNER_TOKEN secret.
export { default } from "@sphere-pub/node";
