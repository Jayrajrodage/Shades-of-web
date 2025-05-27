const Error = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      {errorMessage}
    </div>
  );
};

export default Error;
