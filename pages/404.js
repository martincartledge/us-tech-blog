import DocumentHead from "components/DocumentHead";
import ErrorMessage from "components/ErrorMessage";

export default function NotFoundErrorPage() {
  return (
    <>
      <DocumentHead title="Page not found" />
      <ErrorMessage
        title="Page not found"
        subtitle="We couldn't find the page you were looking for"
        buttonHref="/"
        buttonText="View homepage"
      />
    </>
  );
}
