import AuthForm from "@/components/AuthForm";
import LoginAside from "@/components/LoginAside";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <LoginAside />
      <div className="flex items-center justify-center bg-body px-4 py-16">
        <AuthForm />
      </div>
    </main>
  );
}
