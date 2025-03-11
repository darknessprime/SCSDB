import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

// Lazy load components for better performance
const Home = lazy(() => import("./components/Home"));
const Trending = lazy(() => import("./components/Trending"));
const Popular = lazy(() => import("./components/Popular"));
const Movie = lazy(() => import("./components/Movie"));
const Tvshows = lazy(() => import("./components/Tvshows"));
const People = lazy(() => import("./components/People"));
const Moviedetails = lazy(() => import("./components/Moviedetails"));
const TvDetails = lazy(() => import("./components/TvDetails"));
const PersonDetails = lazy(() => import("./components/PersonDetails"));
const Trailer = lazy(() => import("./components/partials/Trailer"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => {
    return (
        <div className="bg-primary w-screen h-screen flex overflow-hidden">
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trending" element={<Trending />} />
                    <Route path="/popular" element={<Popular />} />
                    <Route path="/movie" element={<Movie />} />
                    <Route path="/movie/details/:id" element={<Moviedetails />}>
                        <Route path="/movie/details/:id/trailer" element={<Trailer />} />
                    </Route>
                    <Route path="/tv" element={<Tvshows />} />
                    <Route path="/tv/details/:id" element={<TvDetails />}>
                        <Route path="/tv/details/:id/trailer" element={<Trailer />} />
                    </Route>
                    <Route path="/person" element={<People />} />
                    <Route path="/person/details/:id" element={<PersonDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
