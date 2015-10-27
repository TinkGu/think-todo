/**
 * Created by Tink on 2015/10/24.
 */

module.exports = {
    dbErr: function handleEbErr(res, err){
        console.log(err);
        return res.status(500).json({err: 'db error'});
    },
    notFound: function handleNotFound(res, entity){
        return res.status(500).json({err: entity + ' not found'});
    },
    alreadyExist: function handleAlreadyExist(res, entity){
        return res.status(500).json({err: entity + ' already exist'});
    }
}