import { useState, useCallback } from "react";

export function useByteLimitedText(maxBytes: number = 320) {
  const [text, setText] = useState("");

  // Calculate UTF-8 byte length
  const getByteLength = useCallback((str: string) => {
    return new TextEncoder().encode(str).length;
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      let newValue = e.target.value;
      const bytes = getByteLength(newValue);

      if (bytes > maxBytes) {
        // Truncate to maxBytes
        let truncated = "";
        let byteCount = 0;

        for (const char of newValue) {
          const charBytes = getByteLength(char);
          if (byteCount + charBytes > maxBytes) break;
          truncated += char;
          byteCount += charBytes;
        }

        newValue = truncated;
      }

      setText(newValue);
    },
    [getByteLength, maxBytes],
  );

  const reset = () => setText("");

  return {
    text,
    handleChange,
    byteLength: getByteLength(text),
    maxBytes,
    reset,
    setText,
  };
}
