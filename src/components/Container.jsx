export default function Container({ children }) {
  return (
    <>
      <div className="mx-auto w-full max-w-277.5 px-6 md:px-10 ">
        {children}
      </div>
    </>
  );
}
