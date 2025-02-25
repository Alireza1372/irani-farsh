import Search from "../../assets/images/search.png";
export default function SearchBar() {
  return (
    <form>
      <div className="relative">
        <img src={Search} />
        <input
          type="text"
          className="border-none"
          placeholder="جستجو  فرش"
        ></input>
      </div>
    </form>
  );
}
