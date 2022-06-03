const Container = ({ children }) => {
  return (
    <main className="h-full overflow-y-auto">
      <div className="px-11 xl:px-36 py-1 mx-auto">{children}</div>
    </main>
  );
};

export default Container;
