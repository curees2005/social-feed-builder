import React,{useEffect,useMemo,useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

const seedPosts=[
 {id:'seed-1',userId:1,title:'Small wins add up',body:'Finished the first version of my portfolio today. It is not perfect yet, but shipping something feels much better than waiting for perfection.',createdAt:'2h'},
 {id:'seed-2',userId:2,title:'Learning in public',body:'Spent the morning understanding recursion and the afternoon building with React. The best way to learn really is to make something with it.',createdAt:'4h'},
 {id:'seed-3',userId:3,title:'A reminder for builders',body:'Your first version only needs to solve the problem. Make it beautiful later. Build, test, learn, repeat.',createdAt:'6h'},
 {id:'seed-4',userId:4,title:'Weekend project',body:'Working on a cleaner social feed interface this weekend. Focusing on simple interactions, readable layouts, and a distraction-free experience.',createdAt:'1d'},
 {id:'seed-5',userId:5,title:'Consistency > intensity',body:'One focused hour every day has taken me further than random all-nighters ever did. Keeping the streak alive.',createdAt:'1d'},
 {id:'seed-6',userId:6,title:'What are you building?',body:'I love seeing small projects turn into real products. Share what you are currently working on — I need some weekend inspiration.',createdAt:'2d'}
];
const people=[
 {id:1,name:'Aarav Mehta',username:'aaravcodes'},
 {id:2,name:'Maya Kapoor',username:'mayabuilds'},
 {id:3,name:'Rohan Verma',username:'rohanv'},
 {id:4,name:'Ananya Rao',username:'ananyarao'},
 {id:5,name:'Kabir Singh',username:'kabirdev'},
 {id:6,name:'Ishita Jain',username:'ishitaj'}
];
const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
const avatars=['🧑‍💻','👩‍🎨','🧑‍🚀','👩‍🔬','🧑‍🎓','👩‍💻'];

function App(){
 const [mine,setMine]=useState(()=>read('feed-posts',[]));
 const [likes,setLikes]=useState(()=>read('feed-likes',{})),[comments,setComments]=useState(()=>read('feed-comments',{}));
 const [text,setText]=useState(''),[image,setImage]=useState(''),[query,setQuery]=useState('');
 useEffect(()=>localStorage.setItem('feed-posts',JSON.stringify(mine)),[mine]);
 useEffect(()=>localStorage.setItem('feed-likes',JSON.stringify(likes)),[likes]);
 useEffect(()=>localStorage.setItem('feed-comments',JSON.stringify(comments)),[comments]);
 const all=useMemo(()=>[...mine,...seedPosts].filter(p=>(p.title+' '+p.body).toLowerCase().includes(query.toLowerCase())),[mine,query]);
 function createPost(e){e.preventDefault();if(!text.trim())return;setMine(v=>[{id:`local-${Date.now()}`,title:'Keya',body:text.trim(),image:image.trim(),source:'local',createdAt:'now'},...v]);setText('');setImage('')}
 function toggleLike(id){setLikes(v=>({...v,[id]:!v[id]}))}
 function addComment(id,value){if(!value.trim())return;setComments(v=>({...v,[id]:[...(v[id]||[]),value.trim()]}))}
 function remove(id){setMine(v=>v.filter(p=>p.id!==id));setComments(v=>{const n={...v};delete n[id];return n})}
 return <div className="app"><header><div><b>Feedly</b></div><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search posts..."/></header><main><aside><div className="profile"><div className="bigAvatar">👩‍💻</div><h3>Keya</h3><p>Building things on the web ✨</p></div><nav className="menu"><button className="active">⌂ <span>Home</span></button><button>♡ <span>Favorites</span></button><button>☻ <span>Profile</span></button></nav></aside><section><form className="composer" onSubmit={createPost}><h2>Create a post</h2><textarea value={text} onChange={e=>setText(e.target.value)} placeholder="What's on your mind?"/><input value={image} onChange={e=>setImage(e.target.value)} placeholder="Add an image URL (optional)"/><div className="composeBottom"><small>{text.length} characters</small><button>Post</button></div></form>{all.map((p,i)=><Post key={p.id} p={p} user={p.source==='local'?{name:'Keya',username:'keyagoyal'}:people.find(u=>u.id===p.userId)} avatar={p.source==='local'?'👩‍💻':avatars[(p.userId-1)%avatars.length]} liked={!!likes[p.id]} onLike={()=>toggleLike(p.id)} comments={comments[p.id]||[]} onComment={v=>addComment(p.id,v)} onDelete={p.source==='local'?()=>remove(p.id):null}/>)}</section><aside className="right"><div className="card"><h3>People to follow</h3>{people.slice(0,5).map((u,i)=><div className="person" key={u.id}><span>{avatars[i]}</span><div><b>{u.name}</b><small>@{u.username}</small></div><button>Follow</button></div>)}</div></aside></main><footer>Feedly © 2026</footer></div>
}
function Post({p,user,avatar,liked,onLike,comments,onComment,onDelete}){const [c,setC]=useState('');return <article className="post"><div className="postHead"><div className="avatar">{avatar}</div><div><b>{user?.name||'User'}</b><small>@{user?.username||'user'} · {p.createdAt||'recently'}</small></div>{onDelete&&<button className="ghost" onClick={onDelete}>Delete</button>}</div>{p.source!=='local'&&<h3>{p.title}</h3>}<p>{p.body}</p>{p.image&&<img src={p.image} alt="Post" onError={e=>e.currentTarget.style.display='none'}/>}<div className="actions"><button className={liked?'liked':''} onClick={onLike}>{liked?'♥':'♡'} {liked?'Liked':'Like'}</button><span>💬 {comments.length} {comments.length===1?'Comment':'Comments'}</span></div>{comments.map((x,i)=><div className="comment" key={i}><b>You</b> {x}</div>)}<form className="commentBox" onSubmit={e=>{e.preventDefault();onComment(c);setC('')}}><input value={c} onChange={e=>setC(e.target.value)} placeholder="Write a comment..."/><button>Send</button></form></article>}
createRoot(document.getElementById('root')).render(<App/>);
