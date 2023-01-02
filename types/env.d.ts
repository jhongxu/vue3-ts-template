/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_ENV: string
  readonly VITE_APP_BASE_API: string
  readonly VITE_BUILD_COMPRESS: string
  readonly VITE_AES_KEY: string
  readonly VITE_AES_IV: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
