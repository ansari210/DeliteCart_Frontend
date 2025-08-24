import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {getUsers, createUser, updateUser, deleteUser,loginUser, forget_password_otp_genrate } from "../services/userAPI";
export const useUsers = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: { name: string; email: string, password:string,term_privacy:boolean }) => createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }); 
    },
  });
};
export const useLogineUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: {  email: string, password:string }) => loginUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] }); 
    },
  });
};
// 🔹 UPDATE user
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, user }: { id: string; user: { name: string; email: string } }) =>
      updateUser(id, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }); // refresh list
    },
  });
};

// 🔹 DELETE user
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useGenrateOtp_forget_password=()=>{
  const queryClient=useQueryClient();
  return useMutation({
    mutationFn:(email:string)=> forget_password_otp_genrate(email),
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["forget"]})
    }
  })
}