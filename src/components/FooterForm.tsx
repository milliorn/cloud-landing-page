/* form foound in footer to email */
export function FooterForm(): JSX.Element {
  return (
    <form className="flex flex-col sm:flex-row">
      <input
        className="w-full p-2 mr-4 rounded-md mb-4"
        type="email"
        placeholder="Enter email.."
      />
      <button type="button" className="p-2 mb-4 bg-indigo-700">
        Subscribe
      </button>
    </form>
  );
}
