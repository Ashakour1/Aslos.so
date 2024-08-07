import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <Link to="#" >
          <div className=" rounded-full w-44 h-20 flex items-center justify-center">
            <img className="h-20 w-44 text-primary" src="/logo.png" />
          </div>
        </Link>
      </div>
      <div className="mx-auto max-w-md text-center">
        <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium">
          Website Under Construction
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Coming Soon
        </h1>
        <p className="mt-4 text-muted-foreground">
          We're hard at work building an amazing new website for you. Stay tuned
          for updates!
        </p>
        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-black h-2.5 rounded-full"
              style={{ width: "40%" }}
            />
          </div>
          <p className="text-xs text-muted-foreground">40% complete</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
