import toast from "react-hot-toast"
import { signup as signupApi } from "../../services/apiAuth"
import { useMutation } from "@tanstack/react-query"

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    // eslint-disable-next-line no-unused-vars
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      )
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })

  return { signup, isLoading }
}
