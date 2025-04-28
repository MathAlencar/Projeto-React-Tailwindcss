export default function Container({ children, withPadding }) {
  const style = withPadding ? 'max-w-[1600px] w-full mx-auto xsee:px-4' : 'max-w-[1600px] w-full mx-auto';
  return (
    <div className={`${style}`}>
      {children}
    </div>
  );
}