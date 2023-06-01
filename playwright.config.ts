import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: ["tests/recorded.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "on",
  },
  retries: 2,
  reporter: [["dot"],["json", {
    outputFile: "jsonReports/jsonReport.json"
  }],["html", {
    open: "never"
  }]],
};

export default config;
