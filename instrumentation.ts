import { SeverityNumber } from "@opentelemetry/api-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

export const loggerProvider =
  token && host
    ? new LoggerProvider({
        resource: resourceFromAttributes({
          "service.name": "anywears-world",
        }),
        processors: [
          new BatchLogRecordProcessor({
            exporter: new OTLPLogExporter({
              url: `${host}/i/v1/logs`,
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }),
          }),
        ],
      })
    : undefined;

const posthogLogger = loggerProvider?.getLogger("anywears-world-posthog");

if (!loggerProvider && process.env.NODE_ENV !== "production") {
  const missingVariable = !token
    ? "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN"
    : "NEXT_PUBLIC_POSTHOG_HOST";

  console.warn(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
  );
}

export function register() {}

export function logPageRenderStarted(siteMode: "archive" | "coming-soon") {
  posthogLogger?.emit({
    body: "Page render started",
    severityNumber: SeverityNumber.INFO,
    attributes: { site_mode: siteMode },
  });
}

export function logPageRenderCompleted(siteMode: "archive" | "coming-soon") {
  posthogLogger?.emit({
    body: "Page render completed",
    severityNumber: SeverityNumber.INFO,
    attributes: { site_mode: siteMode },
  });
}
