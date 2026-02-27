import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   //加入開發中(dev)、產品路徑(build)
//   base: process.env.NODE_ENV === "production" ? "/react-vite-week6-workflow-test/" : "/",
//   plugins: [react()],
// });

export default defineConfig(({ mode }) => {
  // 根據當前模式 (development/production) 載入 .env 變數
  // 第三個參數設為 '' 表示加載所有環境變數
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // 使用 mode 來判斷路徑，比 process.env 更可靠
    base: mode === "production" ? "/react-vite-week6-workflow-test/" : "/",
    plugins: [react()],
    // 如果你一定要在程式碼以外的地方定義全域變數，可以加在 define (選填)
    define: {
      'process.env': env
    }
  };
});