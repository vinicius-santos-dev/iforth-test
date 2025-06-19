import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({
  open,
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  onCancel,
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}

        <DialogFooter className="mt-4 flex gap-2">
          <button
            className="px-4 py-2 border rounded text-center transition-colors hover:bg-gray-200 cursor-pointer"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <button
            className="px-4 py-2 border rounded text-center transition-colors text-white bg-black hover:bg-black/80 cursor-pointer"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
