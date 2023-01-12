import React, {FC, useEffect, useState} from 'react';
import {useLocalStorageState} from 'ahooks';
// import {useDispatch} from "react-redux";
// import {useUsers} from "../store/users/hooks";
// import {fetchUsers} from "../store/users";
import axios from "axios";

interface IUsers {
    id: number,
    name: string,
    age: string | number

    map(element: (el: any) => JSX.Element): any;
}


const Home: FC = () => {
    const [message, setMessage] = useLocalStorageState<string | undefined>(
        'use-local-storage-state-demo1',
        {
            defaultValue: '',
        },
    );
    const [message2, setMessage2] = useLocalStorageState<string | undefined>(
        'use-local-storage-state-demo2',
        {
            defaultValue: '',
        },
    );


    // @ts-ignore
    const [users, setUsers] = useState<IUsers>([])
    useEffect(() => {
        axios.get('https://63839ee11ada9475c80450a2.mockapi.io/api/users/')
            .then(res => {
                console.log(res.data, 'get')
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const addData = (e: any) => {
        e.preventDefault();
        axios.post('https://63839ee11ada9475c80450a2.mockapi.io/api/users/')
            .then(({data}) => {
                console.log(data, 'added')
            }).catch(err => {
            console.log(err, 'add error')
        })
    }

    const deleteData = (id: any, e: any) => {
        e.preventDefault();
        axios.delete(`https://63839ee11ada9475c80450a2.mockapi.io/api/users/${id}`)
            .then(({data}) => {
                console.log(data, 'deleted')
            })
            .catch(err => console.log(err, 'err'))
    }

    const puttedData = (id: any, e: any) => {
        e.preventDefault();
        axios.put(`https://63839ee11ada9475c80450a2.mockapi.io/api/users/${id}`)
            .then(({data}) => {
                console.log(data, 'putted')
            })
            .catch(err => {
                console.log(err, "err put")
            })
    };


    const [form, setForm] = useState({
        title: '',
        body: ''
    })

    const putData = (e: any) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const patchData = (e: any) => {
        e.preventDefault();
        axios.patch('https://jsonplaceholder.typicode.com/posts/1', form)
            .then(({data}) => {
                console.log(data, 'patched')
            })
            .catch(err => {
                console.log(err, 'err')
            })
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: "50px"
        }}>
            <div>
                <button onClick={(e: any) => addData(e)}>POST REQUEST</button>
                {users.map(el => (
                    <div key={el.id}>
                        <p>{el.name}</p>
                        <p>{el.age}</p>
                        <button onClick={(e: any) => puttedData(el.id, e)}>PUT REQUEST</button>
                        <button onClick={(e: any) => deleteData(el.id, e)}>DELETE REQUEST</button>
                    </div>
                ))}
            </div>
            <div style={{paddingTop: "20px"}}>
                <input type="text" placeholder="PUT REQUEST" name="title" onChange={putData}/>
                <input type="text" placeholder="PUT REQUEST" name="body" onChange={putData}/>
                <button onClick={(e: any) => patchData(e)}>PATCH REQUEST</button>
            </div>
            <div style={{paddingTop: "100px"}}>
                <p>AUTOSAVE</p>
                <input value={message || ''} onChange={(e: any) => setMessage(e.target.value)}/>
                <input value={message2 || ''} onChange={(e: any) => setMessage2(e.target.value)}/>
            </div>
            <div style={{paddingTop: "50px"}}>
                {/*<Link to='/route'>*/}
                {/*<button>ROUTE</button>*/}
                {/*</Link>*/}
            </div>
        </div>
    );
};

export default Home;