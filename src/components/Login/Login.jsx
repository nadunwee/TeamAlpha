import backgroundImg from "../../assets/newback.webp";

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center font-assassin text-white">
      {/* Blurred Background */}
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 filter blur-lg"
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative z-10 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8w-fit rounded-lg items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="text-[60px] text-center text-black">Team Alpha</p>
          {/* <h2 className="mt-10 text-center text-[50px] font-bold tracking-tight text-gray-900">
            sign in
          </h2> */}
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[25px] font-medium ">
                username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#CDB898] sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-[25px] font-medium"
                >
                  password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#CDB898] sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-10 flex w-full justify-center rounded-md bg-[#CDB898] px-3 py-1.5 text-[25px] font-semibold shadow-sm hover:bg-[#c7b08d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CDB898]"
              >
                proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
