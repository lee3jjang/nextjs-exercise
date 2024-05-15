import { z } from "zod";

import "./styles.css";
import { supabase } from "../../lib/initSupabase";
import { redirect } from "next/navigation";

const PersonSchema = z.object({ name: z.string(), age: z.number().int() });

async function createPerson(formData: FormData) {
  "use server";
  const createPersonInput = PersonSchema.parse({
    name: formData.get("name"),
    age: Number(formData.get("age")),
  });

  const { error } = await supabase.from("person").insert(createPersonInput);

  if (!error) {
    redirect("/");
  }
}

export default async function CreatePersonPage() {
  return (
    <form action={createPerson}>
      <div className="container">
        <div className="title-container">
          <span className="title">사람 추가</span>
        </div>
        <div className="input-container">
          <div className="field-container">
            <label htmlFor="name">이름</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력하세요."
              required
            />
          </div>
          <div className="field-container">
            <label htmlFor="age">나이</label>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="나이를 입력하세요."
              required
            />
          </div>
        </div>
        <div className="form-actions">
          <div className="button-group">
            <button className="button submit" type="submit">
              추가
            </button>
            <button className="button cancel" type="reset">
              취소
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
