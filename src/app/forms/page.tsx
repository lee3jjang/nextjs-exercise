import { z } from "zod";

export default function Page() {
  return (
    <form action={submitForm}>
      <div className="p-4 bg-[#2f2f2f] flex flex-col gap-y-4">
        <h1 className="text-white font-bold text-lg">제출 폼</h1>
        <input
          className="p-2"
          name="email"
          type="email"
          placeholder="이메일을 입력하세요."
        />
        <input
          className="p-2"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
        <button
          className="p-2 text-white border rounded-md hover:bg-[green]"
          type="submit"
        >
          click
        </button>
      </div>
    </form>
  );
}
const SubmitFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(4, { message: "Be at least 8 characters long" })
    .trim(),
});

async function submitForm(formData: FormData) {
  "use server";

  const validatedFields = SubmitFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
}
