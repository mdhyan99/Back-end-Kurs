
import {Low} from 'lowdb'
import {JSONFile} from 'lowdb/node'
const db = new Low(new JSONFile("./db/data.json" ))

export const getAllAlbums = async (req,res)=>{
    await db.read()
    console.log(db.data.albums);
}
export const getAlbum = async (req,res)=>{
    await db.read()
    const value =db.data.albums.find(a=>a.id === +req.params.id)
    res.json(value)
}

export const editAlbum = async (req,res)=>{
    await db.read()
    const value =db.data.albums.find(a=>a.id === +req.params.id )
}

export const deleteAlbum = async (req,res)=>{}

export const saveAlbum = async (req,res)=>{}