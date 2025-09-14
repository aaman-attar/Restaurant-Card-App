import Cards from './Cards.jsx';

export default function Sections({ sectionName, dishes, onItemAdded }) {
    const sectionId = sectionName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    
    return (
        <div className="menu-section" id={sectionId}>
            <h2 className="section-title">{sectionName}</h2>
            <div className="dishes-grid">
                {dishes.map((dish, index) => (
                    <Cards key={index} dish={dish} onItemAdded={onItemAdded} />
                ))}
            </div>
        </div>
    );
}