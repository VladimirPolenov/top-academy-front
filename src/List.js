import Route, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, CardHeader } from "./CardStyles";
import { MemesContext } from "./MemesContext";

export default function List({ fav }) {
 const navigate = useNavigate();
 
 const handleSelect = (id) => {
    navigate(`/meme/${id}`);
 };

 const { memes, favoriteMemes } = useContext(MemesContext);

 const memesList = fav ? favoriteMemes : memes;

 return (
    <CardContainer>
        <CardHeader>Выберите мем для просмотра подробностей</CardHeader>
        <section className="memes-list">
            <h2>Список мемов</h2>
            <div className="memes-grid">
            {memesList.map(meme => (
                <div 
                key={meme.id}
                className={`meme-item`}
                onClick={() => { handleSelect(meme.id); }}
                >
                <img src={meme.url} alt={meme.title} className="meme-thumbnail" />
                <h4>{meme.title}</h4>
                <span className="likes">❤️ {meme.likes}</span>
                </div>
            ))}
            </div>
        </section>
    </CardContainer>
);
}
