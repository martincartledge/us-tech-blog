import redirect from "nextjs-redirect";
import DocumentHead from "components/DocumentHead";
import ErrorMessage from "components/ErrorMessage";

export default function RedirectPage({ destination }) {
  const Redirect = redirect(destination);

  return (
    <Redirect>
      <DocumentHead title="Redirecting" />
      <ErrorMessage
        title="Page has moved"
        subtitle="You should be redirected automatically"
        buttonHref="/"
        buttonText="Click to continue"
      />
    </Redirect>
  );
}
