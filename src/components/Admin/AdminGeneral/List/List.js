import React from "react";
import classes from './List.module.css'
import delBut from '../../../UserRoom/UserRoomIcons/refuseIcon.png'

const List = (props)=>{
    return(
        <div className={classes.listWrapper}>
            <ul>

                {(props.type==='user')?
                    <>
                        <li>
                            <h6>
                                #
                            </h6>
                            <span>Name</span>
                            <span>Email</span>
                            <span>Role</span>
                            <span>Active</span>
                            Delete
                        </li>
                        {
                            props.array.map((item, index)=>{
                                return(
                                    <li>
                                        <h6>
                                            {index+1}.
                                        </h6>
                                        <span>{item.name}</span>
                                        <span>{item.email}</span>
                                        <span>{item.occupation}</span>
                                        <span> active: {item.active? 'true':'false'}</span>
                                        <img src={delBut} onClick={()=>{props.delete(item.id)}} alt=""/>
                                    </li>
                                )
                            })
                        }
                    </>:
                    (props.type==='author')?
                        <>
                            <li>
                                <h6>
                                    #
                                </h6>
                                <span>Name</span>
                                <span>Type</span>
                                <span>Rating</span>
                                Delete
                            </li>
                            {
                                props.array.map((item, index)=>{
                                    return(
                                        <li>
                                            <h6>
                                                {index+1}.
                                            </h6>
                                            <span>{item.name}</span>
                                            <span>{item.type}</span>
                                            <span>{item.averageRating.toFixed(2)}</span>
                                            <img src={delBut} onClick={()=>{props.delete(item.id)}} alt=""/>
                                        </li>
                                    )
                                })
                            }
                        </>:
                        (props.type==='category')?
                            <>
                                <li>
                                    <h6>
                                        #
                                    </h6>
                                    <span>Name</span>
                                    Delete
                                </li>
                                {
                                    props.array.map((item, index)=>{
                                        return(
                                            <li>
                                                <h6>
                                                    {index+1}.
                                                </h6>
                                                <span>{item.name}</span>
                                                <img src={delBut} onClick={()=>{props.delete(item.id)}} alt=""/>
                                            </li>
                                        )
                                    })
                                }
                            </>:
                            (props.type==='book')?
                                <>
                                    <li>
                                        <h6>
                                            #
                                        </h6>
                                        <span>Name</span>
                                        <span>Author</span>
                                        <span>Rating</span>
                                        Delete
                                    </li>
                                    {
                                        props.array.map((item, index)=>{
                                            return(
                                                <li>
                                                    <h6>
                                                        {index+1}.
                                                    </h6>
                                                    <span>{item.name}</span>
                                                    <span>{item.author?item.author.name:'Null'}</span>
                                                    <span>{item.averageRating.toFixed(2)}</span>
                                                    <img src={delBut} onClick={()=>{props.delete(item.id)}} alt=""/>
                                                </li>
                                            )
                                        })
                                    }
                                </>:
                                null
                }
            </ul>
        </div>
    )
}

export default List;