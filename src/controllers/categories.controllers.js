import {connection} from "../database";

export const getCategories = async(req, res) => {
    const db = await connection();
    
    const categories = await db.query('SELECT * FROM categories');
    res.json(categories);
}

 //Listar un solo elemento
 export const listId = async(req, res) => {
    
    try{
        const db = await connection();
        const {id} = req.params;
        const category = await db.query('SELECT * FROM categories WHERE id = ?',[id])
        if(category.length > 0){
            return res.json(category[0])
        }
        res.status(404).json({text: "The category don't found"});
    }catch(error){
        console.log('error', error);
    }
    
   
}

//filrar por nombre
export const filterCategories = async(req, res) => {
    try{
        const db = await connection();
        const {name} = req.params;
        const item = await db.query('SELECT * FROM categories WHERE name = ?',[name])
        if(item.length > 0){
            return res.json(item[0])
        }else {
            return res.json([])
        }

    }catch(error){
        console.log('error');
    }
}

export const createCategories = async(req, res) => {
    const db = await connection();
    try {
        console.log(req.body)
        await db.query('INSERT INTO categories SET ?', [req.body]);
        res.json({message: 'Save Categories'})
    }catch(error){
        console.log("Error : ",error)
    }
   

}

export const updateCategories = async(req, res) => {
    try{
        const db = await connection();
        const {id} = req.params;
        await db.query('UPDATE categories set ? WHERE id= ?', [req.body, id]);
        res.json({message: 'The category update'});
    }catch(error){
        console.log('error', error)
    }
}

export const deleteCategories = async(req, res) => {
    try {
        const db = await connection();
        const {id} = req.params;
        await db.query('DELETE FROM categories WHERE id= ?', [id]);
        res.json({message: 'Category Delete'})
    }catch(error){
        console.log('error');
    }
}