import knex from '../database/connection'
import { Request, Response} from 'express'

class ItemsController {
  async index(req:Request, res:Response){
    const  items =  await  knex('items').select('*');
    const  serialisedItems = items.map(item=>{
      return{
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      }
    }) 
    return res.json(serialisedItems)
  }
}

export default ItemsController