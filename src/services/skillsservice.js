import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export default class SkillService{

    getAllSkills(){
        return axios.get('/skills').then(res => res.data);
    }
}