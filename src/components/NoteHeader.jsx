function NoteHeader({ notes, sortBy, onSort }) {
  return (
    <div className="w-full bg-white shadow-md">
      <div className=" max-w-[120rem] m-auto py-4 flex flex-col gap-6 items-center justify-around sm:flex-row sm:gap-0">
        <h2 className="text-xl font-bold">یادداشت های من ({notes.length})</h2>
        <select
          className="border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-blue-500 p-2"
          value={sortBy}
          onChange={onSort}
        >
          <option value="latest">مرتب سازی بر اساس جدیدترین ها</option>
          <option value="earliest">مرتب سازی بر اساس قدیمی ترین ها</option>
          <option value="completed">مرتب سازی بر اساس کامل شده ها</option>
        </select>
      </div>
    </div>
  );
}

export default NoteHeader;
