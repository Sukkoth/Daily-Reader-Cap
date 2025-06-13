import IconButton from "./icon-button";
import { Loader2, Share2 } from "lucide-react";
import { Share, type ShareOptions } from "@capacitor/share";
import { Capacitor } from "@capacitor/core";
import { useState } from "react";

type Props = {
  shareOptions: ShareOptions;
};
export default function ShareButton({ shareOptions }: Props) {
  const [sharing, setSharing] = useState(false);

  const isWebAndCantShare =
    Capacitor.getPlatform() === "web" &&
    typeof navigator !== "undefined" &&
    !navigator.share;

  function handleShare() {
    if (isWebAndCantShare) {
      console.log("Web Share API not available");
      return;
    }

    setSharing(true);

    Share.share({
      title: shareOptions.title,
      text: shareOptions.text,
      dialogTitle: shareOptions.dialogTitle,
    })
      .then(() => console.log("Share"))
      .catch((e) => console.log("Share error", e))
      .finally(() => setSharing(false));
  }
  return (
    !isWebAndCantShare && (
      <IconButton
        icon={
          sharing ? (
            <Loader2 className="animate-spin text-gray-400 duration-700" />
          ) : (
            <Share2 className="text-gray-400" />
          )
        }
        onClick={handleShare}
        disabled={sharing}
      />
    )
  );
}
