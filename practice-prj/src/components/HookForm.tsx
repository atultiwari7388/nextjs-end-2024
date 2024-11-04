import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-w-xs">
        {/* Name Field */}
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className="input input-bordered w-full max-w-xs"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}

        {/* Email Field */}
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          className="input input-bordered w-full max-w-xs"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}

        {/* Password Field */}
        <label className="label" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="input input-bordered w-full max-w-xs"
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}

        {/* Submit Button */}
        <button
          className="btn btn-primary mt-4"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default HookForm;
