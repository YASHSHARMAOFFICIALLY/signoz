"use client";

import { useState } from "react";
import { signIn, signUp } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

type Mode = "signin" | "signup";

export default function AuthForm() {
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isSignup = mode === "signup";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = isSignup
      ? await signUp.email({ email, password, name })
      : await signIn.email({ email, password });

    setLoading(false);
    if (error) {
      setError(error.message ?? "Something went wrong. Try again.");
      return;
    }
    // Success — Better Auth set the session cookie. Send them home.
    window.location.href = "/";
  }

  async function handleSocial(provider: "google" | "github") {
    setError(null);
    await signIn.social({ provider, callbackURL: "/" });
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8 shadow-sm">
      <h1 className="font-display text-2xl font-semibold tracking-tight text-heading">
        {isSignup ? "Create your account" : "Welcome back"}
      </h1>
      <p className="mt-1 text-sm text-muted">
        {isSignup
          ? "Start monitoring in a couple of clicks."
          : "Sign in to your SigNoz workspace."}
      </p>

      {/* Social */}
      <div className="mt-6 grid gap-2">
        <SocialButton label="Continue with Google" onClick={() => handleSocial("google")} />
        <SocialButton label="Continue with GitHub" onClick={() => handleSocial("github")} />
      </div>

      <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wide text-muted">
        <span className="h-px flex-1 bg-border" />
        or
        <span className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
        {isSignup && (
          <Field
            id="name"
            label="Name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={setName}
            required
          />
        )}
        <Field
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={setEmail}
          required
        />
        <Field
          id="password"
          label="Password"
          type="password"
          autoComplete={isSignup ? "new-password" : "current-password"}
          value={password}
          onChange={setPassword}
          required
          minLength={8}
          hint={isSignup ? "At least 8 characters." : undefined}
        />

        {error && (
          <p role="alert" className="text-sm text-primary">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={cn(
            "mt-1 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-4",
            "font-semibold text-white transition-colors",
            "hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          )}
        >
          {loading ? "…" : isSignup ? "Create account" : "Sign in"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        {isSignup ? "Already have an account?" : "New here?"}{" "}
        <button
          type="button"
          onClick={() => {
            setMode(isSignup ? "signin" : "signup");
            setError(null);
          }}
          className="rounded font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          {isSignup ? "Sign in" : "Create one"}
        </button>
      </p>
    </div>
  );
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
  autoComplete,
  required,
  minLength,
  hint,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete: string;
  required?: boolean;
  minLength?: number;
  hint?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-heading">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        className={cn(
          "h-11 rounded-lg border border-border bg-body px-3 text-heading",
          "placeholder:text-muted",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        )}
      />
      {hint && <span className="text-xs text-muted">{hint}</span>}
    </div>
  );
}

function SocialButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-lg border border-border bg-surface px-4",
        "text-sm font-medium text-heading transition-colors hover:bg-body",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
      )}
    >
      {label}
    </button>
  );
}
