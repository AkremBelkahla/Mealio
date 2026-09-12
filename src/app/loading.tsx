export default function Loading() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center" role="status">
      <div className="flex flex-col items-center gap-6">
        <span
          aria-hidden="true"
          className="h-12 w-12 animate-spin rounded-full border-4 border-sage border-t-olive"
        />
        <p className="font-body text-lg tracking-[0.02em] text-stone-text">
          Setting the table…
        </p>
      </div>
    </div>
  );
}
