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

      <Sheet.Container className="z-50">
        <Sheet.Header />
        <Sheet.Content>{/* Sheet content */}</Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
