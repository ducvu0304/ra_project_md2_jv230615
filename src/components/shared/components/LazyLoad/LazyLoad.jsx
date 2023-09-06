import { lazy, Suspense } from "react";
import Loading from "../Loading";

const LazyLoad = (importFunc) => {
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 3000);
    });
  });
  // eslint-disable-next-line react/display-name
  return (props) => (
    <>
      <Suspense fallback={<Loading />}>
        <LazyComponent {...props} />
      </Suspense>
    </>
  );
};

export default LazyLoad;
