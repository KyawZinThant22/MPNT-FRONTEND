/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
  readonly VITE_REACT_APP_BACKEND_SERVER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
