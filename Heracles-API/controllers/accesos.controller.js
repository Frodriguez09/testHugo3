

try {
    let accesosController = {};

    accesosController.addAcceso = async (req, res)=> {
        if(connection){
            await connection.query(
                "INSERT INTO acceso (fecha, status) VALUES ('"+req.body.fecha+"','"+req.body.status+"');",
                (err, rows)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.status(200).json(rows);
                    }
                }
            )
        }
    };
    
    accesosController.getAccesos = async(req, res)=> {
        if(connection){
            await connection.query(
                "SELECT * FROM acceso WHERE status="+req.params.status+" ORDER BY id DESC LIMIT "+req.params.limit+";",
                (err, rows)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.status(200).json(rows);
                    }
                }
            )
        }
    };

    accesosController.deleteAcceso = async (req, res) =>{
        if(connection){
            await  connection.query(
                // "DELETE FROM acceso WHERE id="+req.params.userID+";",
                "DELETE FROM acceso WHERE id =" +req.params.id+";",
                (err, rows)=>{
                    if(err){
                        console.log(err);
                    }else{
                        res.status(200).json(rows);
                    }
                }
            )
        }
    };




    module.exports = accesosController;
} catch (error) {
    
}