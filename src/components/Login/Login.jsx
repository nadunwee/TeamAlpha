import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/newback.webp";

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ team_name: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const { team_name, password } = formData;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/team/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ team_name, password }),
        }
      );

      const data = await response.json();
      setLoading(false); // Stop loading after response

      if (response.ok) {
        localStorage.setItem("teamName", data.name);
        localStorage.setItem("id", data.id);

        if (data.name === "Admin Access") {
          navigate("/admin-dashboard");
        } else {
          navigate("/dashboard");
        }
      } else {
        // Backend validation errors
        if (data.error === "Incorrect team name") {
          setErrors({ team_name: "Incorrect team name" });
        } else if (data.error === "Incorrect password") {
          setErrors({ password: "Incorrect password" });
        } else {
          setErrors({ form: "Something went wrong. Please try again." });
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
      setErrors({ form: "An unexpected error occurred. Please try again." });
      setLoading(false); // Stop loading on error
    }
  };

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

      <div className="relative z-10 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-fit rounded-lg items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="text-[60px] text-center text-black">Team Alpha</p>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Team Name Field */}
            <div>
              <label
                htmlFor="team_name"
                className="block text-[25px] font-medium"
              >
                username
              </label>
              <div className="mt-2">
                <input
                  id="team_name"
                  name="team_name"
                  type="text"
                  required
                  value={formData.team_name}
                  onChange={handleChange}
                  autoComplete="team-name"
                  className="font-sans block w-full rounded-md bg-white px-3 py-1.5 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#CDB898] sm:text-sm"
                />
              </div>
              {errors.team_name && (
                <p className="text-red-500 text-sm mt-1">{errors.team_name}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-[25px] font-medium"
              >
                password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="font-sans block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#CDB898] sm:text-sm"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button with Loading State */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`mt-10 flex w-full justify-center rounded-md bg-[#CDB898] px-3 py-1.5 text-[25px] font-semibold shadow-sm 
                ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-[#c7b08d]"
                }
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CDB898]`}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-6 w-6 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3-3-3h4z"
                      ></path>
                    </svg>
                    loading...
                  </div>
                ) : (
                  "proceed"
                )}
              </button>
            </div>
            {errors.form && (
              <p className="text-red-500 text-sm mt-4 text-center">
                {errors.form}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
