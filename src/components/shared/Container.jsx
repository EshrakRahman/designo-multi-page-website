export default function Container({ children, fullWidth = false }) {
  const isFullWidth = fullWidth
    ? "mx-auto w-full max-w-277.5 md:px-10"
    : "mx-auto w-full max-w-277.5 px-6 md:px-10";

  return (
    <>
      <div className={isFullWidth}>{children}</div>
    </>
  );
}
