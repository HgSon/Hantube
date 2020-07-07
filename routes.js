//Global

const HOME = "/";
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';

//Users

const USERS = '/users';
const USER_DETAIL = '/:id';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';

//Videos

const VIDEOS = '/videos';
const UPLOAD = '/upload';
const VIDEO_DETAIL = '/:id';
const EDIT_VIDEO = '/:id/edit'; // id 는 text로, :id는 변수로 인식
const DETELE_VIDEO = '/:id/delete'


const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if(id) return `/users/${id}`
        else return USER_DETAIL
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if(id) return `/videos/${id}`
        else return VIDEO_DETAIL
    },
    editVideo: id => {
        if(id) return `/videos/${id}/edit`;
        else return EDIT_VIDEO;
    },
    deleteVideo: id =>{
        if(id) return `/videos/${id}/delete`;
        else return DETELE_VIDEO;
    }
}
//일단 videorauter('/:id',로 들어가서 컨트롤러f(){}). 거기서 id받아서 아이디 url에 아이디 채우는건 template에서(예를들어서 홈에서 id잇는주소로 링크걸림)

export default routes;