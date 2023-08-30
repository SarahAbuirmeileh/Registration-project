import { User} from '../db/entities/User.js'
import {NSUser} from '../types/user.js'

const getAllUsres = async (payload:NSUser.IGetAll)=>{
    const page = parseInt(payload.page)
    const pageSize = parseInt(payload.pageSize)

    const [users, total]= await User.findAndCount({
        skip: pageSize * (page-1),
        take: pageSize,
        order:{
            createdAt: 'ASC'
        }
    })

    return {
        page,
        pageSize,
        total,
        users
    }
}

const insertUser = (payload: User) => {
    const newUser = User.create(payload);
    return newUser.save();
  }
  

export {getAllUsres, insertUser}


