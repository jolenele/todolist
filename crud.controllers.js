const { Pool } = require('pg');
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});
const getAll = (table) => (req, res) => {
    try{
        const items = await pool.query(`SELECT * FROM ${table} ORDER BY id ASC`) 
        if(!items){
            return res.status(400).json({
                sucess: false,
                message: 'Item not found'
            })
        }
        res.status(200).json({
            success:true,
            count: items.length,
            data: items.rows
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            sucess: false,
            message: 'Server Error'
        })
    }
}

const getOne = (table) => async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const item = await pool.query(`SELECT * FROM ${table} WHERE id = ${id}`) 
        if(!item){
            return res.status(400).json({
                success: false,
                message: 'Item not found'
            })
        }
        res.status(200).json({
            success:true,
            data: item,
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            sucess: false,
            message: 'Server Error'
        })
    }
}
  const addItem = (table, col1, col2) => async (req, res) => {
    try {
        const { val1, val2 } = req.body;
        const item = await pool.query(`INSERT INTO ${table} (${col1}, ${col2}) VALUES (${val1},${val2})`)
        res.status(201).json({
            success: true,
            data: item
        })}
        catch (err) {
            console.error(err);
            res.status(500).json({
              success: false,
              message: 'Server Error',
            });
          }
  };

  const updateItem = (table, col1, col2) => async (req, res) => {
    try {
        const { val1, val2 } = req.body;
        const id = parseInt(req.params.id)
        const updatedItem = await pool.query(`UPDATE ${table} SET ${col1} = ${val1}, ${col2} = ${val2} WHERE id = ${id}`)
        if(!updatedItem){
            res.status(400).send('Failed to update item')
        
        }res.status(200).send(`Successfully update item with ID: ${id}`)
    }catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Server Error',
      });
  }
}
  const deleteItem = (table) => async(req, res) => {
      try{
          const id = parseInt(req.params.id);
          const deletedItem = await pool.query(`DELETE FROM ${table} WHERE id = ${id}`)
          if(!deletedItem){
              res.status(400).send('Failed to delete item')
          
          }res.status(200).send(`Successfully deleted item with ID: ${id}`)
      }catch (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          message: 'Server Error',
        });
      }
  }
module.exports = {
    getAll: getAll,
    getOne: getOne,
    addItem: addItem,
    updateItem: updateItem,
    deleteItem: deleteItem
}