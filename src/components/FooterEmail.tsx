import { FooterForm } from "./FooterForm";

/* container for email form */
export function FooterEmail(): JSX.Element {
  return (
    <div className="col-span-2 pt-8 md p-4:sm:pt-2">
      <p className="font-bold uppercase text-center">
        Subscribe to our newsletter
      </p>
      <p className="py-4">
        The latest news, articles, and resources, sent to your inbox weekly.
      </p>
      <FooterForm />
    </div>
  );
}
