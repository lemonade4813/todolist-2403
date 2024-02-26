interface ITodo {
    id: string;
    text: string;
}

interface TodoItemProps {
    todo: ITodo;
    onDelete: (id: string) => void;
}


export default function TodoItem({ todo, onDelete }: TodoItemProps){

    const { id, text } = todo;

    const handleDeleteClick = () => {
        onDelete(id);
    };

    return(
        <div className="border-white rounded-2xl border-2 flex flex-row h-16 justify-center items-center m-10">
            <p className="w-5/6">{text}</p>
            <button className="border-write rounded-2xl border-2 h-4/5 w-20"
                    onClick={handleDeleteClick}
            >Delete
            </button>
        </div>
    )
}