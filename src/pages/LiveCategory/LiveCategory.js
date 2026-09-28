import { useParams } from 'react-router-dom';

function LiveCategory() {
    const { category } = useParams();

    return (
        <div>
            <h4>Đang xem thể loại: {category}</h4>
        </div>
    );
}
export default LiveCategory;
