// CSS Modules
declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// External libraries (optional peer dependencies)
declare module "lightweight-charts" {
  export * from "lightweight-charts";
}
