import { Sheet } from "react-modal-sheet";

type Props = {
  onClose?: () => void;
};

export default function BottomSheetItem({ onClose }: Props) {
  return (
    <Sheet isOpen={true} onClose={() => onClose?.()} snapPoints={[0.5]}>
      <Sheet.Backdrop
        onTap={() => {}}
        className="pointer-events-auto fixed inset-0 z-40"
      />

      <Sheet.Container>
        <Sheet.Header className="bg-light-2 dark:bg-shade-2 z-50" />
        <Sheet.Content className="bg-light-2 dark:bg-shade-2">
          <h1>Hello World</h1>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
