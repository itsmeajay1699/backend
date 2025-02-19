import cron from "node-cron";

cron.schedule("*/14 * * * *", async () => {
  const backendUrl = process.env.BACKEND_URI_PROD;
  console.log("backendUrl", backendUrl);
  const res = await fetch(backendUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) {
    console.log("Backend restarted successfully");
  }
});

cron.schedule("*/10 * * * *", async () => {
  const backendUrl = process.env.BACKEND_URI_PROD;
  console.log("backendUrl", backendUrl);
  const res = await fetch(backendUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) {
    console.log("Backend restarted successfully");
  }
});
