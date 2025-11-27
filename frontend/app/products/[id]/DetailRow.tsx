  function DetailRow({ label, value }: { label: string; value: string }) {
    return (
      <div className="flex border-b border-gray-200 py-3">
        <span className="font-medium text-gray-700 w-48">{label}:</span>
        <span className="text-gray-600 flex-1">{value}</span>
      </div>
    );
  }
  export default DetailRow;