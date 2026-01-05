import useFetchComments from "../../helper/useFetchComments";

export default function Comments({id}) {
    const {comments, loading, error} = useFetchComments(id);
    
    if (loading) return (<p>Loading...</p>)
    if (error) return (<p>{error.message}</p>)

    return (
        <div className="comments-container">
            {comments && comments.map(comment => (
                <div className="comment">
                    <h4>{comment.content}</h4>
                </div>
            ))}
        </div>
    )
}