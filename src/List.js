import Route from "react";
import MemeCard from './Card';

export default function List({
    selectedMemeId, memes, handleCloseCard, handleMemeSelect,
}) {
 const selectedMeme = memes.find(meme => meme.id === selectedMemeId);
 return (
    <>
        {!selectedMemeId ? (
        <section className="memes-list">
            <h2>Список мемов</h2>
            <div className="memes-grid">
            {memes.map(meme => (
                <div 
                key={meme.id}
                className={`meme-item ${selectedMemeId === meme.id ? 'selected' : ''}`}
                onClick={() => handleMemeSelect(meme.id)}
                >
                <img src={meme.url} alt={meme.title} className="meme-thumbnail" />
                <h4>{meme.title}</h4>
                <span className="likes">❤️ {meme.likes}</span>
                </div>
            ))}
            </div>
        </section>
        ) : (
        <section className="meme-details">
            {selectedMeme ? (
            <MemeCard meme={selectedMeme} onClose={handleCloseCard} />
            ) : (
            <div className="no-selection">
                <p>Выберите мем из списка для просмотра</p>
            </div>
            )}
        </section>
        )}
    </>
);
}
