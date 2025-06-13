import { Sheet } from "react-modal-sheet";
import AlignmentSettings from "./alignment-settings";
import FontSettings from "./font-settings";

type Props = {
  onClose?: () => void;
  readingType: "simple" | "longer";
};

export default function BottomSheetItem({ onClose, readingType }: Props) {
  return (
    <Sheet isOpen={true} onClose={() => onClose?.()} snapPoints={[0.5]}>
      <Sheet.Backdrop
        onTap={() => {}}
        className="pointer-events-auto fixed inset-0 z-40"
      />

      <Sheet.Container>
        <Sheet.Header className="bg-light-2 dark:bg-shade-2 z-50" />
        <Sheet.Content className="bg-light-2 dark:bg-shade-2">
          <h1 className="pb-4 text-center text-xl font-medium">
            {readingType
              .split("")
              .map((item, i) => (i === 0 ? item.toUpperCase() : item))}{" "}
            Reading Mode Settings
          </h1>
          <FontSettings mode={readingType} />
          <AlignmentSettings mode={readingType} key={readingType} />
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
