// utils/SimpleAppLogger.ts
"use client"; // Only needed if using localStorage or browser APIs

import { v4 as uuidv4 } from "uuid";

type LogLevel = "info" | "error" | "warning";

export class SimpleAppLogger {
  private static apiKey: string;
  private static isInit = false;
  private static baseUrl = process.env.NEXT_PUBLIC_LOGGER_URL;


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

  // Post initial device info
  private static async postInitialVariables() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: this.apiKey,
  };

  const instanceId = this.getInstanceId();
  const deviceName = typeof navigator !== "undefined" ? navigator.platform : "unknown";
  const deviceModel =
    typeof navigator !== "undefined" && "userAgentData" in navigator
      ? (navigator as any).userAgentData.brands.map((b: any) => b.brand).join(", ")
      : navigator?.userAgent || "unknown";

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
      Authorization: this.apiKey,
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
