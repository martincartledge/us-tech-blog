import DocumentHead from "components/DocumentHead";
import ErrorMessage from "components/ErrorMessage";

export default function NotFoundErrorPage() {
  return (
    <>
      <DocumentHead title="Page not found" />
      <ErrorMessage message="Page not found" />
    </>
  );
}
