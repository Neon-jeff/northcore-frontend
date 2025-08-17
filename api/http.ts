import { env } from '@/env';
import { UserData, useUserStore } from '@/store/user';
import ky from 'ky';
import { toast } from 'sonner';


export const http = ky.extend({
    prefixUrl:env.API_BASE_URL,
	hooks: {
		beforeRequest: [
			request => {
				const store = JSON.parse(localStorage.getItem('user-storage') || 'null') as {state:UserData}
				if (store.state && store.state.token) {
					request.headers.set('Authorization', `Bearer ${store.state.token}`);
				}
			}
		],
		afterResponse: [
			(_input,_option,response) => {
				if (response.status == 401) {
					useUserStore.getState().logout()
					location.replace("/auth/login");
					toast.error("Session expired, please log in again");
				}
				return response;
			}
		],
		beforeError:[
			(error) =>{
				return Promise.reject(error.message)
			}
		]
	}
});

