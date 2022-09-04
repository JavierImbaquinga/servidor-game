import {connection} from "../database";

export const getCategories = async(req, res) => {
    const db = await connection();
    
    const categories = await db.query('SELECT * FROM categories');
    res.json(categories);
}

export const filterCategories = (req, res) => {
    
}

export const createCategories = async(req, res) => {
    const db = await connection();
    
    await db.query('INSERT INTO categories SET ?', [req.body]);
    res.json({message: 'Save Categories'})
   

}

export const updateCategories = async(req, res) => {
    const db = await connection();
    await db.query('UPDATE categories set ? WHERE id= ?', [req.body, id]);
    res.json({message: 'The category update'});
}

export const deleteCategories = async(req, res) => {
    const db = await connection();
    await db.query('DELETE FROM categories WHERE id= ?', [id]);
    res.json({message: 'Category Delete'})
}