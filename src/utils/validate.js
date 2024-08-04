import z from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be atleast 3 characters",
    })
    .optional(),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be of a string",
    })
    .email({
      message: "Email must be of correct format",
    }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, {
      message:
        "Password must be at least 8 characters long, including one uppercase letter, one digit, and one special character",
    }),
});

export function checkValidation(name, email, password) {
  //... validate
  const obj = {};

  if (typeof name === "string") obj.name = name;

  if (email) obj.email = email;

  if (password) obj.password = password;

  const validationResult = schema.safeParse(obj);
  const res = {};

  if (validationResult.success) {
    res.success = true;
  } else {
    res.success = false;
    res.errorMessage = validationResult.error.issues[0].message;
  }

  return res;
}
