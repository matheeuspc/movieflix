import { generateList } from 'core/utils/list';
import './styles.scss';

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}

const Pagination = ( {totalPages, activePage, onChange} : Props) => {
    const items = generateList(totalPages);

    return (
        <div className="pagination-container">
            {items.map(item => (
                <div 
                    key={item}
                    className={`pagination-item ${item===activePage ? 'active' : ''}`} 
                    onClick={() => onChange(item)}                
                >
                    {item + 1}
                </div>
            ))}
        </div>

    );
}

export default Pagination;