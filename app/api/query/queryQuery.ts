import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendQuery } from "../services/contactAPI";


export const useCreateQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ( payload:{first_name:string,last_name:string,email:string,message:string,receiver_comm_message:boolean,store_data:boolean}) => sendQuery(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["query"] }); 
    },
  });
};