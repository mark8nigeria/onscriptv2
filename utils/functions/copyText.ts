import { toast } from "sonner";

export default function copyText(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success("Copied to clipboard");
    })
    .catch((err) => {
      toast.error("Failed to copy text");
    });
}
