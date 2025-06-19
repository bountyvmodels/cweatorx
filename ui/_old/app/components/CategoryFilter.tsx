type Props = {
  selected: string;
  setSelected: (category: string) => void;
  categories: string[];
};

export default function CategoryFilter({ selected, setSelected, categories }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-3 py-1 text-sm rounded-full border ${
            selected === cat ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
