import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {



    return (
        <div className="md:w-1/3 bg-gray-300 my-4 rounded p-2">
            <h2 className="text-3xl text-center">BookMarked Blogs: {bookmarks.length}</h2> 
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }           
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;