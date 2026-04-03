"use server";
import { actionClient } from "./safe-action";

import { formSchema } from "@/lib/form-schema";

const SHEETDB_API_URL = "https://sheetdb.io/api/v1/4489cilnow1vn";

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async ({ parsedInput }) => {
    try {
      const response = await fetch(SHEETDB_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          data: {
            Name: parsedInput.name,
            Email: parsedInput.email,
            First: parsedInput.first,
            Main: parsedInput.main,
            Intolerances: parsedInput.intolerances || "None",
            Timestamp: new Date().toISOString(),
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`SheetDB error: ${response.statusText}`);
      }

      // eslint-disable-next-line no-console
      console.log("Form submitted to SheetDB:", parsedInput);

      return {
        success: true,
        message: "RSVP submitted successfully!",
      };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error submitting to SheetDB:", error);
      return {
        success: false,
        message: "Failed to submit RSVP. Please try again.",
      };
    }
  });
