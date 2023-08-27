function NoteHeader({ notes, sortBy, onSort }) {
  return (
    <div className="w-full bg-white shadow-md">
      <div className=" max-w-[120rem] m-auto py-4 flex flex-col gap-6 items-center justify-around sm:flex-row sm:gap-0">
        <h2 className="text-xl font-bold">My Notes({notes.length})</h2>
        <select
          className="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 p-2"
          value={sortBy}
          onChange={onSort}
        >
          <option value="latest">Sort base on latest notes</option>
          <option value="earliest">sort base on earliest</option>
          <option value="completed">sort base on completed notes</option>
        </select>
      </div>
    </div>
  );
}

export default NoteHeader;
