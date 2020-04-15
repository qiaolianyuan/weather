import { HttpService } from './utils/http'
   
declare module 'vue/types/vue' {
    interface Vue {
        $httpService: HttpService;
    }
}