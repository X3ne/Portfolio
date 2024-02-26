/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly WAKA_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
