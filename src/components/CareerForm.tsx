"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number"),
  resume: z
    .string()
    .url("Enter a valid link (e.g. Google Drive)")
    .optional()
    .or(z.literal("")),
  message: z.string().min(10, "Tell us a little about yourself (min 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

const fieldBase =
  "w-full rounded-lg border border-ink-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-sand-700/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

export function CareerForm({ position }: { position: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    const message = values.resume
      ? `${values.message}\n\nResume: ${values.resume}`
      : values.message;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          interest: `Career Application: ${position}`,
          message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand/30 bg-white p-10 text-center shadow-lg shadow-brand/10">
        <CheckCircle2 className="h-12 w-12 text-brand" />
        <h3 className="mt-4 font-serif text-2xl text-ink-900">
          Application received!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-sand-700">
          Thank you for your interest in joining our team. We&apos;ll review your
          application and get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-brand underline-offset-4 hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-xl shadow-ink-900/5 sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            type="text"
            placeholder="Your name"
            className={fieldBase}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            placeholder="you@example.com"
            className={fieldBase}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            placeholder="+91 ..."
            className={fieldBase}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </Field>
        <Field label="Resume (link)" error={errors.resume?.message}>
          <input
            type="url"
            placeholder="Link to your resume (Google Drive, etc.)"
            className={fieldBase}
            aria-invalid={!!errors.resume}
            {...register("resume")}
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Message" error={errors.message?.message}>
          <textarea
            rows={4}
            placeholder="Tell us why you'd like to join the team"
            className={fieldBase}
            aria-invalid={!!errors.message}
            {...register("message")}
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4" /> Something went wrong. Please try
          again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
