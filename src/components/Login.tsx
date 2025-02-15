/**
 * navbar login buttons on right when not in hamburger view
 */
export function Login() {
  return (
    <div className="hidden md:flex pr-4">
      <button
        type="button"
        className="border-none bg-transparent text-black mr-4"
      >
        Sign In
      </button>
      <button type="button" className="px-8 py-3 bg-indigo-700">
        Sign Up
      </button>
    </div>
  );
}
