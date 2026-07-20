interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ message, onConfirm, onCancel }: ConfirmDialogProps) {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <p className="text-gray-800 font-semibold mb-4">{message}</p>
      <div className="flex justify-end gap-2">
        <button
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
          onClick={onConfirm}
        >
          Sí
        </button>
        <button
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          onClick={onCancel}
        >
          No
        </button>
      </div>
    </div>
  );
}