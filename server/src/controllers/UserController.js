const UserService = require('../services/UserService')

const createUser = async (req, res) => {
    try{
        const {name, email, password, confirmPassword, phone} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if(!email || !password || !confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        else if(!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The email is invalid'
            })
        }
        else if(password !== confirmPassword) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The password and confirm password are not the same'
            })
        }
        const respone = await UserService.createUser(req.body)
        return res.status(200).json(respone)
    } catch (e){
        return res.status(404).json({
            message: e
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if( !email || !password ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            });
        }else if(!isCheckEmail) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The email is invalid'
            })
        }
        const respone = await UserService.loginUser(req.body);
        return res.status(200).json(respone)
    } catch (error) {
        return res.status(404).json({ 
            message: error
        });
    }
}

module.exports = {
    createUser,
    loginUser
}