import { FooterForm } from "./FooterForm";

/* container for email form */
export function FooterEmail(): JSX.Element {
  return (
    <div className="col-span-2 pt-8 md:pt-0 p-4">
      <p className="font-bold uppercase text-center text-white">
        Subscribe to our newsletter
      </p>
      <p className="py-4 text-gray-200">
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>
      <FooterForm />
    </div>
  );
}
