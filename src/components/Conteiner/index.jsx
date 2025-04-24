export default function Container({ children }) {
  return (
    <div className="max-w-[1600px] w-full mx-auto xsee:px-4">
      {children}
    </div>
  );
}