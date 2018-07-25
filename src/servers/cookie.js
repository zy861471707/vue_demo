/**
 * cookie操作接口
 */
const cookie = {
    set(name, value, days){
        let d = new Date();
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
        window.document.cookie = `${name}=${value};path=/;expires=${d.toGMTString()}`;
    },
    get(name){
        let reg = new RegExp(`(^|;)?${name}=([^;]*)(;|$)`);
        let v = window.document.cookie.match(reg);
        return v ? v[2] : null;
    },
    delete(name){
        this.set(name, '', -1);
    }
};

export default cookie;