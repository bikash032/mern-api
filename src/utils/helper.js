const helper = {
    randomString: (len = 100) => {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randomStr = "";
        const length = chars.length;
        for (let i = 0; i < len; i++) {
            const pos = Math.floor(Math.random() * (length-1));
            randomStr += chars[pos];
        }
        return randomStr;
    }
};


module.exports=helper