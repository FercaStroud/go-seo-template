import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '192.168.1.93'
  }
})

// import { defineConfig, loadEnv } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default ({ mode }) => {
//   // Load app-level env vars to node-level env vars.
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

//   return defineConfig({
//     // To access env vars here use process.env.TEST_VAR
//     plugins: [vue()],
//     server: {
//       host: '192.168.1.93'
//     }
//   });
// };
