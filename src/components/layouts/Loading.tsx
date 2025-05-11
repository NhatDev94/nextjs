const Loading = ({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean;
}) => {
  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="fixed top-0 left-0 z-[99] bg-white/80 w-screen h-[100dvh] flex items-center justify-center">
          Loading...
        </div>
      )}
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Loading;
