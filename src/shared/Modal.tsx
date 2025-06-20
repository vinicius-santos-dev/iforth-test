import { useState } from "react";
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
  showInput?: boolean;
  inputPlaceholder?: string;
  preventClose?: boolean;
  onConfirm: (value?: string) => void;
  onCancel: () => void;
}

const Modal = ({
  open,
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  showInput = false,
  inputPlaceholder = "Digite aqui...",
  preventClose = false,
  onConfirm,
  onCancel,
}: ModalProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value && !preventClose) onCancel();
      }}
    >
      <DialogContent
        onEscapeKeyDown={(e) => preventClose && e.preventDefault()}
        onPointerDownOutside={(e) => preventClose && e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}

        {showInput && (
          <input
            type="text"
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mt-4 w-full px-4 py-2 border rounded text-sm"
          />
        )}

        <DialogFooter className="mt-4 flex gap-2">
          {!preventClose && (
            <button
              className="px-4 py-2 border rounded text-center transition-colors hover:bg-gray-200 cursor-pointer"
              onClick={onCancel}
            >
              {cancelLabel}
            </button>
          )}
          <button
            className="px-4 py-2 border rounded text-center transition-colors text-white bg-black hover:bg-black/80 cursor-pointer"
            onClick={() => onConfirm(inputValue)}
          >
            {confirmLabel}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
