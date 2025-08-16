import { ServerService } from "@/services/server";
import { useQuery } from "@tanstack/react-query";

const serverInstance = ()=> new ServerService()

export function useServerStatus(){
    return useQuery({
        queryKey: ['serverStatus'],
        queryFn: ()=>serverInstance().startServer()
    })
}