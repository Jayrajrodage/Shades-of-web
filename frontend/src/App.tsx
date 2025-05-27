import "./App.css";
import Carousel from "./components/Carousel";
import Communities from "./components/Communities";
import Error from "./components/Error";
import Loader from "./components/Loader";
import useFetchApi from "./hooks/useFetchApi";
function App() {
  const { data, isLoading, isError, error } = useFetchApi();
  if (isLoading) return <Loader />;
  if (isError) {
    const serverError =
      (error.response?.data as { error: string }).error || error.message;
    return <Error errorMessage={serverError} />;
  }
  return (
    <div className="flex flex-col py-[5rem] gap-[10rem] px-4 max-w-5xl mx-auto">
      {data && (
        <>
          <Communities data={data} />
          <Carousel data={data} />
        </>
      )}
    </div>
  );
}

export default App;
