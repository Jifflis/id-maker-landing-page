// utils/SimpleAppLogger.ts
"use client"; // Only needed if using localStorage or browser APIs

import { v4 as uuidv4 } from "uuid";

type LogLevel = "info" | "error" | "warning";

export class SimpleAppLogger {
  private static apiKey: string;
  private static isInit = false;
  private static baseUrl = (
    process.env.NEXT_PUBLIC_LOGGER_URL || "https://api.app-logger.com"
  ).replace(/\/$/, "");

  private static getAuthorizationHeader(): string {
    const apiKey = this.apiKey.trim();
    return apiKey.startsWith("ApiKey ") ? apiKey : `ApiKey ${apiKey}`;
  }


  // Initialize logger
  static async init({ key }: { key: string }) {
    this.apiKey = key;
    this.isInit = true;

    // Post initial variables
    await this.postInitialVariables();

    // Listen to connectivity changes
    if (typeof window !== "undefined") {
      window.addEventListener("online", () => {
        this.retryFailedRequests();
      });
    }
  }

  // Get or generate instance ID (stored in localStorage)
  private static getInstanceId(): string {
    if (typeof window === "undefined") return "unknown";

    let instanceId = localStorage.getItem("simple_logger_instanceId");
    if (!instanceId) {
      instanceId = uuidv4();
      localStorage.setItem("simple_logger_instanceId", instanceId);
    }
    return instanceId;
  }

  // Get current UTC date in ISO string
  private static getDateNow(): string {
    return new Date().toISOString();
  }

  private static getBrowserDeviceName(): string {
    if (typeof navigator === "undefined") return "Web browser";

    const userAgent = navigator.userAgent;
    let browser = "Web browser";
    let operatingSystem = "Web";

    if (/SamsungBrowser\//.test(userAgent)) browser = "Samsung Internet";
    else if (/Edg(?:A|iOS)?\//.test(userAgent)) browser = "Edge";
    else if (/OPR\//.test(userAgent)) browser = "Opera";
    else if (/Firefox\/|FxiOS\//.test(userAgent)) browser = "Firefox";
    else if (/Chrome\/|CriOS\//.test(userAgent)) browser = "Chrome";
    else if (/Safari\//.test(userAgent)) browser = "Safari";

    if (/Android/.test(userAgent)) operatingSystem = "Android";
    else if (/iPhone|iPad|iPod/.test(userAgent)) operatingSystem = "iOS";
    else if (/Windows NT/.test(userAgent)) operatingSystem = "Windows";
    else if (/CrOS/.test(userAgent)) operatingSystem = "ChromeOS";
    else if (/Macintosh|Mac OS X/.test(userAgent)) operatingSystem = "macOS";
    else if (/Linux/.test(userAgent)) operatingSystem = "Linux";

    return `${browser} on ${operatingSystem}`;
  }

  // Post initial device info
  private static async postInitialVariables() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: this.getAuthorizationHeader(),
  };

  const instanceId = this.getInstanceId();
  const deviceName = this.getBrowserDeviceName();
  const deviceModel =
    typeof navigator !== "undefined"
      ? navigator.userAgent.slice(0, 512)
      : "unknown";

  const platform = "web";

  const body = {
    instance_id: instanceId,
    actual_log_time: this.getDateNow(),
    name: deviceName,
    model: deviceModel,
    platform: platform,
    device_id: instanceId, // fallback
  };

  try {
  const response = await fetch(`${this.baseUrl}/api/devices/init`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  console.log("Status code:", response.status);

  if (!response.ok) {
    // Read error message from server
    const errorData = await response.text(); // or response.json() if JSON
    console.error("Server error:", errorData);
  } else {
    const data = await response.json();
    console.log("Success:", data);

    // Make sure 'this' refers to your class instance
    this.log?.("info", "Home page loaded", "Homepage");
  }
} catch (err) {
  console.error("Failed to post initial variables", err);
}
}

  // Retry failed requests placeholder
  private static async retryFailedRequests() {
    console.log("Retrying failed requests...");
    // Implement queue or retry logic if needed
  }

  // Generic log function
  private static async log(level: LogLevel, message: string, tag: string = "") {
    if (!this.isInit) return;

    const url = `${this.baseUrl}/api/logs`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: this.getAuthorizationHeader(),
    };

    const body = {
      instance_id: this.getInstanceId(),
      actual_log_time: this.getDateNow(),
      message,
      level,
      tag,
    };

    try {
      await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error("Failed to send log", err);
    }
  }

  // Log helpers
  static info(message: string, tag: string = "") {
    return this.log("info", message, tag);
  }

  static error(message: string, tag: string = "") {
    return this.log("error", message, tag);
  }

  static warning(message: string, tag: string = "") {
    return this.log("warning", message, tag);
  }
}
