const getStoredBlogs = () => {
    const storedBlog = localStorage.getItem('blog');
    return storedBlog ? JSON.parse(storedBlog) : []
}

const saveToLS = blog => {
    localStorage.setItem('blog', JSON.stringify(blog))
}

const addToLS = (id) => {
    const blog = getStoredBlogs();
    blog.push(id);
    saveToLS(blog)
}

const removeFromLS = id => {
    const blog = getStoredBlogs();
    const remaining = blog.filter((idx) => idx !== id);
    saveToLS(remaining)
}
 
export {addToLS, getStoredBlogs, removeFromLS}